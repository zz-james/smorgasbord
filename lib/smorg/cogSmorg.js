/**
 * cog smorg class
 * derived from Smorg base type
 */

sb.CogSmorg = sb.Smorg.subType({

    _width: 64,
    _height: 64,

    attitude:undefined, //not using matrix representation with dhtml to simplify
    rotation:0, // sprite attitude matrix replaced with x, y, and rotation

    init:function(ownerGame) {

        this._super(ownerGame);

        // create sprite
        this.sprite = new sb.SpriteIcon({
            _image: 'resources/images/cogs.png',
            _width: this._width,
            _height: this._height
        });

        // cache a pointer into the physics engine
        var peg = new sb.Peg_PhysicsCircle(ownerGame.world,ownerGame.bodyDef,ownerGame.fixDef).getPeg();
        this.position = peg.GetPosition();

        // if we need to lock rotation to direction
        if (this._attitudetomotionlock)
        {
            this.rotation = copyMotionMatrixToAttitudeMatrix();
        } // find direction vector
        else //_attitudetomotionlock is FALSE
        {
            this.rotation = peg.GetAngle();  //angle is in radians
        }

    },

    animate:function() {
        this.sprite.animate(this);
    },

    draw:function(graphics) {
        this.sprite.draw(graphics);
    },

    /**
     *
     * @param graphics
     */
    move:function(graphics) {},

    updateAttitude:function() {}

});
