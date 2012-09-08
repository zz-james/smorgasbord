sb.Peg_PhysicsBox = sb.Peg.subType({

    peg:undefined,

    init:function(world,bodyDef,fixDef, owner) {
        bodyDef.type = Box2D.Dynamics.b2Body.b2_dynamicBody;  // the type is dynamic



        fixDef.shape = new Box2D.Collision.Shapes.b2PolygonShape

        fixDef.shape.SetAsBox((owner._width / sb.SCALE) / 2, (owner._height/sb.SCALE) / 2);
        bodyDef.position.x = owner.x/sb.SCALE;
        bodyDef.position.y = owner.y/sb.SCALE;
        bodyDef.userData = owner;
        var obj = world.CreateBody(bodyDef).CreateFixture(fixDef);   // creates the object in the world
        this.peg = obj.GetBody()
    }, // init()

    getPeg:function() {
        return this.peg;
    }

});
