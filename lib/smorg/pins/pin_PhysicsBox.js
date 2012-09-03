sb.Pin_PhysicsBox = sb.Peg.subType({

    pin:undefined,

    init:function(world,bodyDef,fixDef,_x,_y, _width, _height, _rotation) {

        bodyDef.type = Box2D.Dynamics.b2Body.b2_staticBody;
        fixDef.shape = new Box2D.Collision.Shapes.b2PolygonShape;

        // positions the center of the object (not upper left!)
        bodyDef.position.x = _x / sb.SCALE;
        bodyDef.position.y = _y / sb.SCALE;
        bodyDef.angle = _rotation * (Math.PI/180);

        // half width, half height. eg actual height here is 1 unit
        fixDef.shape.SetAsBox((_width / sb.SCALE) / 2, (_height/sb.SCALE) / 2);

        var obj = world.CreateBody(bodyDef).CreateFixture(fixDef);   // creates the object in the world
        this.pin = obj.GetBody()
    }, // init()

    getPin:function() {
        return this.pin;
    }

});