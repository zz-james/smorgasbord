sb.Peg_TopDown = sb.Peg.subType({

    peg:undefined,

    init:function(world,bodyDef,fixDef, owner) {
        bodyDef.type = Box2D.Dynamics.b2Body.b2_dynamicBody;  // the type is dynamic


        bodyDef.position=new Box2D.Common.Math.b2Vec2(owner.x/sb.SCALE, owner.y/sb.SCALE);
        bodyDef.angle = owner.rotation * (Math.PI/180);
        bodyDef.linearDamping=0.15;  //gradually reduces velocity, makes the car reduce speed slowly if neither accelerator nor brake is pressed
        bodyDef.bullet=true; //dedicates more time to collision detection - car travelling at high speeds at low framerates otherwise might teleport through obstacles.
        bodyDef.angularDamping=0.3;

        //initialize shape
        fixDef.shape = new Box2D.Collision.Shapes.b2PolygonShape;
        fixDef.shape.SetAsBox((owner._width / sb.SCALE) / 2, (owner._height/sb.SCALE) / 2);
        fixDef.density = 1.0;
        fixDef.friction = 0.3; //friction when rubbing agaisnt other shapes
        fixDef.restitution = 0.4;  //amount of force feedback when hitting something. >0 makes the car bounce off, it's fun!

        bodyDef.userData = owner;
        var obj = world.CreateBody(bodyDef).CreateFixture(fixDef);   // creates the object in the world
        this.peg = obj.GetBody()
    }, // init()

    getPeg:function() {
        return this.peg;
    }

});