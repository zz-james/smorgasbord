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
        this.peg = new sb.Peg_PhysicsBox(ownerGame.world,ownerGame.bodyDef,ownerGame.fixDef, this).getPeg();
        this.position = this.peg.GetPosition();

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


    feellistener:function() {

    },


    /**
     * overridden
     */
    move:function() {},

    updateAttitude:function() {
       // this.rotation = this.peg.GetAngle();
    }

});
