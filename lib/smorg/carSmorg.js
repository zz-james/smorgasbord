/**
 * car smorg class
 * derived from Smorg base type
 */

sb.CarSmorg = sb.Smorg.subType({

    _width: 30,
    _height: 60,
    attitude:undefined, //not using matrix representation with dhtml to simplify
    rotation:0, // sprite attitude matrix replaced with x, y, and rotation
    peg:undefined,
    wheeldefs:{
        wheel1:{x:-1, y:-1.2, _width:6, _height:12, revolving:true, powered:true}, //top left
        wheel2:{x:1, y:-1.2, _width:6, _height:12, revolving:true, powered:true}, //top right
        wheel3:{x:-1, y:1.2, _width:6, _height:12, revolving:false, powered:false}, //back left
        wheel4:{x:1, y:1.2, _width:6, _height:12, revolving:false, powered:false}  //back right
    },
    wheels:[],
    position:[10, 10],  //??????????????
    angle:180,
    power:60,
    max_steer_angle:20,
    max_speed:60,

    init:function(ownerGame, name, params) {

        this._super(ownerGame, name, params);

        // create sprite
        this.sprite = new sb.SpriteIcon({
            _name: name,
            _image: 'resources/images/car.png',
            _width: this._width,
            _height: this._height
        });

        // cache a pointer into the physics engine
        this.peg = new sb.Peg_TopDown(ownerGame.world,ownerGame.bodyDef,ownerGame.fixDef, this).getPeg();
        this.position = this.peg.GetPosition();
        this._offsetW = this._width / 2;
        this._offsetH = this._height / 2;

        var wheeldef, i;
        for(var prop in this.wheeldefs){
            if (this.wheeldefs.hasOwnProperty(prop)) {
                wheeldef=this.wheeldefs[prop];
                wheeldef.steered=this;
                this.wheels.push(new sb.WheelSmorg(ownerGame,prop,wheeldef));
            }
        }
    },

    draw:function(graphics) {
        graphics.setPosition(this.position.x * sb.SCALE - this._offsetW, this.position.y * sb.SCALE - this._offsetH);
        this.sprite.draw(graphics);
    },


    getPoweredWheels:function(){
        //return array of powered wheels
        var retv=[];
        for(var i=0;i<this.wheels.length;i++){
            if(this.wheels[i].powered){
                retv.push(this.wheels[i]);
            }
        }
        return retv;
    },

    /**
     * returns car's velocity vector relative to the car
     */
    getLocalVelocity:function(){
        var retv = this.peg.GetLocalVector(this.peg.GetLinearVelocityFromLocalPoint(new Box2D.Common.Math.b2Vec2(0, 0)));
        return [retv.x, retv.y];
    },

    /**
     * return array of wheels that turn when steering
     */
    getRevolvingWheels:function(){
        var retv=[];
        for(var i=0;i<this.wheels.length;i++){
            if(this.wheels[i].revolving){
                retv.push(this.wheels[i]);
            }
        }
        return retv;
    },


    /**
     * speed - speed in kilometers per hour
     */
    setSpeed:function(speed){
        var velocity=this.peg.GetLinearVelocity();
        velocity=new sb.Vector().setFromArray([velocity.x, velocity.y]).nomalize();
        velocity=new Box2D.Common.Math.b2Vec2(velocity[0]*((speed*1000.0)/3600.0), velocity[1]*((speed*1000.0)/3600.0));
        this.peg.SetLinearVelocity(velocity);
    },
       //sb._MSDURATION


    getSpeedKMH:function(){
        var velocity=this.peg.GetLinearVelocity();
        var len=new sb.Vector().setFromArray([velocity.x, velocity.y]).magnitude();
        return (len/1000)*3600;
    },

    update:function(){
        //1. KILL SIDEWAYS VELOCITY

        //kill sideways velocity for all wheels
        var i;
        for(i=0;i<this.wheels.length;i++){
            this.wheels[i].killSidewaysVelocity();
        }

        //2. SET WHEEL ANGLE

        //calculate the change in wheel's angle for this update, assuming the wheel will reach is maximum angle from zero in 200 ms
        var incr=(this.max_steer_angle/200) * sb._MSDURATION;

        if(sb._LISTENERS.right){
            this.wheel_angle=Math.min(Math.max(this.wheel_angle, 0)+incr, this.max_steer_angle) //increment angle without going over max steer
        }else if(sb._LISTENERS.left){
            this.wheel_angle=Math.max(Math.min(this.wheel_angle, 0)-incr, -this.max_steer_angle) //decrement angle without going over max steer
        }else{
            this.wheel_angle=0;
        }

        //update revolving wheels
        var wheels=this.getRevolvingWheels();
        for(i=0;i<wheels.length;i++){
            wheels[i].setAngle(this.wheel_angle);
        }

        //3. APPLY FORCE TO WHEELS
        var base_vect; //vector pointing in the direction force will be applied to a wheel ; relative to the wheel.

        //if accelerator is pressed down and speed limit has not been reached, go forwards
        if((sb._LISTENERS.up) && (this.getSpeedKMH() < this.max_speed)){
            base_vect=[0, -1];
        }
        else if(sb._LISTENERS.down){
            //braking, but still moving forwards - increased force
            if(this.getLocalVelocity()[1]<0)base_vect=[0, 1.3];
            //going in reverse - less force
            else base_vect=[0, 0.7];
        }
        else base_vect=[0, 0];

        //multiply by engine power, which gives us a force vector relative to the wheel
        var fvect=[this.power*base_vect[0], this.power*base_vect[1]];

        //apply force to each wheel
        wheels=this.getPoweredWheels();
        for(i=0;i<wheels.length;i++){
            var position=wheels[i].peg.GetWorldCenter();
            wheels[i].peg.ApplyForce(wheels[i].peg.GetWorldVector(new Box2D.Common.Math.b2Vec2(fvect[0], fvect[1])), position );
        }

        //if going very slow, stop - to prevent endless sliding
        if( (this.getSpeedKMH()<4) &&(this.accelerate==0)){
            this.setSpeed(0);
        }


    },

    feellistener:function() {

    },


    /**
     * overridden
     */
    move:function() {},

    updateAttitude:function() {
       this.rotation = this.peg.GetAngle();
    }

});
