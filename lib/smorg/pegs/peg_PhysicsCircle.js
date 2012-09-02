sb.Peg_PhysicsCircle = sb.Peg.subType({

    peg:undefined,

    init:function(world,bodyDef,fixDef) {
        bodyDef.type = Box2D.Dynamics.b2Body.b2_dynamicBody;  // the type is dynamic
        fixDef.shape = new Box2D.Collision.Shapes.b2CircleShape( 28 / sb.SCALE ); // the shape is a circle
        bodyDef.position.x = (Math.random()*500)/sb.SCALE;
        bodyDef.position.y = (Math.random()*50)/sb.SCALE;
        var obj = world.CreateBody(bodyDef).CreateFixture(fixDef);   // creates the object in the world
        this.peg = obj.GetBody()
    }, // init()

    getPeg:function() {
        return this.peg;
    }

});