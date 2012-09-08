/**
 * blcok smorg class
 * derived from Smorg base type
 *
 * block smorgs do not move.
 */

sb.SpringSmorg = sb.Smorg.subType({

    _width: undefined,
    _height: undefined,
    _offsetW: undefined,
    _offsetH: undefined,

    attitude:undefined, //not using matrix representation with dhtml to simplify
    rotation:0, // sprite attitude matrix replaced with x, y, and rotation
    pin:undefined,
    dirty:true, // only if dirty is set to true will a block smorg be redrawn.

    init:function(ownerGame, name, params) {

        this._super(ownerGame, name, params);

        // create sprite
        this.sprite = new sb.SpriteIcon({
            _name: name,
            _image: 'resources/images/spring.gif',
            _width: this._width,
            _height: this._height
        });

        // cache a pointer into the physics engine
        this.pin = new sb.Pin_PhysicsBox(ownerGame.world,ownerGame.bodyDef,ownerGame.fixDef, this).getPin();
        this.position = this.pin.GetPosition();
        this._offsetW = this._width / 2;
        this._offsetH = this._height / 2;
        this.animate();
    },

    animate:function() {
        if(this.dirty)
            this._super();
    },

    draw:function(graphics) {
        if(this.dirty) {
            graphics.setPosition(this.position.x  * sb.SCALE - this._offsetW, this.position.y * sb.SCALE - this._offsetH);
            this.sprite.draw(graphics);
        }
        this.dirty = false;
    },

    /**
     * overridden
     */
    move:function() {},

    updateAttitude:function() {
        this.rotation = this.pin.GetAngle();
    }

});