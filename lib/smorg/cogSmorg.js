/**
 * cog smorg class
 * derived from Smorg base type
 */

sb.CogSmorg = sb.Smorg.subType({

    _width: 64,
    _height: 64,
    _radius: 32,

    attitude:undefined, //not using matrix representation with dhtml to simplify
    rotation:0, // sprite attitude matrix replaced with x, y, and rotation
    peg:undefined,

    init:function(ownerGame, name, params) {

        this._super(ownerGame, name, params);

        // create sprite
        this.sprite = new sb.SpriteIcon({
            _name: name,
            _image: 'resources/images/cogs.png',
            _width: this._width,
            _height: this._height
        });

        // cache a pointer into the physics engine
        this.peg = new sb.Peg_PhysicsCircle(ownerGame.world,ownerGame.bodyDef,ownerGame.fixDef, this).getPeg();
        this.position = this.peg.GetPosition(); // this value is a pointer so updates

        // if we need to lock rotation to direction
        if (this.attitudetomotionlock)
        {
            this.rotation = copyMotionMatrixToAttitudeMatrix();
        } // find direction vector
        else //_attitudetomotionlock is FALSE
        {
            this.rotation = this.peg.GetAngle();
        }
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
