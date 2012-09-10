/**
 * seesaw smorg class
 * derived from Smorg base type
 */

sb.SeeSawSmorg = sb.Smorg.subType({

    _width: undefined,
    _height: undefined,
    attitude:undefined, //not using matrix representation with dhtml to simplify
    rotation:0, // sprite attitude matrix replaced with x, y, and rotation
    peg:undefined,
    deckparams:{x:0, y:-20, _width:200, _height:20}, // middle and up

    init:function(ownerGame, name, params) {

        this._super(ownerGame, name, params);



        // create sprite
        this.sprite = new sb.SpriteIcon({
            _name: name,
            _image: 'resources/images/wood.jpg',
            _width: this._width,
            _height: this._height
        });

        // cache a pointer into the physics engine
        this.peg = new sb.Peg_PhysicsBox(ownerGame.world,ownerGame.bodyDef,ownerGame.fixDef, this).getPeg();
        this.position = this.peg.GetPosition();
        this._offsetW = this._width / 2;
        this._offsetH = this._height / 2;

        var jointDef = new Box2D.Dynamics.Joints.b2RevoluteJointDef();

        jointDef.localAnchorA.Set(10,11);
        jointDef.localAnchorB.Set(0,0); // pin this object at its center

        jointDef.bodyA = ownerGame.world.GetGroundBody();
        jointDef.bodyB = this.peg;
        ownerGame.world.CreateJoint(jointDef);


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
       this.rotation = this.peg.GetAngle();
    }

});
