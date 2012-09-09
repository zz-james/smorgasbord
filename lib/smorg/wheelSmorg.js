/**
 * wheel smorg class
 * derived from Smorg base type
 */

sb.WheelSmorg = sb.Smorg.subType({

    _width: 30,
    _height: 60,
    attitude:undefined, //not using matrix representation with dhtml to simplify
    rotation:0, // sprite attitude matrix replaced with x, y, and rotation
    peg:undefined,

    steered:undefined, // owner car smorg
    revolving:undefined,
    powered:undefined,

    init:function(ownerGame, name, params) {

        this._super(ownerGame, name, params);

        // create sprite


        this.sprite = new sb.SpriteIcon({
            _name: name,
            _image: 'resources/images/wheel.gif',
            _width: this._width,
            _height: this._height
        });

        // cache a pointer into the physics engine
       this.peg = new sb.Peg_Steering(ownerGame.world,ownerGame.bodyDef,ownerGame.fixDef, this).getPeg();
       this.position = this.peg.GetPosition(); // this value is a pointer so updates
       this._offsetW = this._width / 2;
       this._offsetH = this._height / 2;
    },

    draw:function(graphics) {
        graphics.setPosition(this.position.x * sb.SCALE - this._offsetW, this.position.y * sb.SCALE - this._offsetH);
        this.sprite.draw(graphics);
    },

    /**
     * angle - wheel angle relative to steered smorg, in degrees?
     */
    setAngle:function(angle){
        this.peg.SetAngle(this.steered.peg.GetAngle()+(angle*Math.PI/180));
    },

    /**
     * returns get velocity vector relative to steered smorg
     */
    getLocalVelocity:function(){
        var res=this.steered.peg.GetLocalVector(this.steered.peg.GetLinearVelocityFromLocalPoint(new Box2D.Common.Math.b2Vec2(this.position[0], this.position[1])));
        return [res.x, res.y];
    },

    /**
     * returns a world unit vector pointing in the direction this wheel is moving
     */
    getDirectionVector:function(){
        return new sb.Vector().setFromArray( (this.getLocalVelocity()[1]>0) ? [0, 1]:[0, -1]).rotate(this.peg.GetAngle());
    },

    /**
    * substracts sideways velocity from this wheel's velocity vector and returns the remaining front-facing velocity vector
    */
    getKillVelocityVector:function(){
        var velocity=this.peg.GetLinearVelocity();
        var sideways_axis=this.getDirectionVector();
        var dotprod= new sb.Vector().setFromArray([velocity.x, velocity.y]).dot(sideways_axis);
        return [sideways_axis[0]*dotprod, sideways_axis[1]*dotprod];
    },


    /**
     * removes all sideways velocity from this wheels velocity
     */
    killSidewaysVelocity:function(){
        var kv=this.getKillVelocityVector();
        this.peg.SetLinearVelocity(new Box2D.Common.Math.b2Vec2(kv[0], kv[1]));
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
