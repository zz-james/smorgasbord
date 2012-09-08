sb.Pin_PhysicsBox = sb.Peg.subType({

    pin:undefined,

    init:function(world,bodyDef,fixDef,owner) {

        bodyDef.type = Box2D.Dynamics.b2Body.b2_staticBody;
        fixDef.shape = new Box2D.Collision.Shapes.b2PolygonShape;

        // positions the center of the object (not upper left!)
        bodyDef.position.x = owner._x / sb.SCALE;
        bodyDef.position.y = owner._y / sb.SCALE;
        bodyDef.angle = owner._rotation * (Math.PI/180);
        bodyDef.userData = owner;
        // half width, half height. eg actual height here is 1 unit
        fixDef.shape.SetAsBox((owner._width / sb.SCALE) / 2, (owner._height/sb.SCALE) / 2);

        var obj = world.CreateBody(bodyDef).CreateFixture(fixDef);   // creates the object in the world
        this.pin = obj.GetBody()
    }, // init()

    getPin:function() {
        return this.pin;
    }

});