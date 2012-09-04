/**
 * monkey smorg class
 * derived from Smorg base type
 */

sb.MonkeySmorg = sb.Smorg.subType({

    _width: 110,
    _height: 90,


    attitude:undefined, //not using matrix representation with dhtml to simplify
    rotation:0, // sprite attitude matrix replaced with x, y, and rotation
    peg:undefined,

    init:function(ownerGame, name, params) {

        this._super(ownerGame, params);

        // create sprite
        this.sprite = new sb.SpriteIcon({
            _name: name,
            _image: 'resources/images/donkey-kong.gif',
            _width: this._width,
            _height: this._height
        });

        // cache a pointer into the physics engine
        this.peg = new sb.Peg_PhysicsBox(ownerGame.world,ownerGame.bodyDef,ownerGame.fixDef, this.x, this.y, this._width, this._height, this.rotation).getPeg();
        this.position = this.peg.GetPosition();
        this._offsetW = this._width / 2;
        this._offsetH = this._height / 2;
    },

    draw:function(graphics) {
        graphics.setPosition(this.position.x * sb.SCALE - this._offsetW, this.position.y * sb.SCALE - this._offsetH);
        this.sprite.draw(graphics);
    },

    /**
     * overridden
     */
    move:function() {},

    updateAttitude:function() {
        this.rotation = this.peg.GetAngle();
    }

});
