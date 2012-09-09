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

    feellistener:function() {

    },


    /**
     * overridden
     */
    move:function() {},

    updateAttitude:function() {
      //  this.rotation = this.peg.GetAngle();
    }

});
