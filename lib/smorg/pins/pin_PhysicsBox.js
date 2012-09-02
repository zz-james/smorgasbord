sb.Pin_PhysicsBox = sb.Peg.subType({

    pin:undefined,

    init:function(world,bodyDef,fixDef) {

        bodyDef.type = Box2D.Dynamics.b2Body.b2_staticBody;
        fixDef.shape = new Box2D.Collision.Shapes.b2PolygonShape;

        // positions the center of the object (not upper left!)
        bodyDef.position.x = (500 / 2) / sb.SCALE;
        bodyDef.position.y = 400 / sb.SCALE;

        // half width, half height. eg actual height here is 1 unit
        fixDef.shape.SetAsBox((600 / sb.SCALE) / 2, (10/sb.SCALE) / 2);

        var obj = world.CreateBody(bodyDef).CreateFixture(fixDef);   // creates the object in the world
        this.pin = obj.GetBody()
    }, // init()

    getPin:function() {
        return this.pin;
    }

});