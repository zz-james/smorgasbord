/**
 * cog smorg class
 * derived from Smorg base type
 */

sb.BlockSmorg = sb.Smorg.subType({

    _width: 64,
    _height: 64,

    attitude:undefined, //not using matrix representation with dhtml to simplify
    rotation:0, // sprite attitude matrix replaced with x, y, and rotation

    init:function(ownerGame) {

        this._super(ownerGame);

        // create sprite
        this.sprite = new sb.SpriteIcon({
            _image: 'resources/images/girder.jpg',
            _width: this._width,
            _height: this._height
        });

        // cache a pointer into the physics engine
        var pin = new sb.Pin_PhysicsBox(ownerGame.world,ownerGame.bodyDef,ownerGame.fixDef).getPin();
        this.position = pin.GetPosition();
        this.rotation = pin.GetAngle();  //angle is in radians

    },

    animate:function() {
        this.sprite.animate(this);
    },

    draw:function(graphics) {
        graphics.setPosition(this.position.x * sb.SCALE, this.position.y * sb.SCALE);
        this.sprite.draw(graphics);
    },

    /**
     * overridden
     */
    move:function() {},

    updateAttitude:function() {}

});