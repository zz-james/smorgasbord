sb.Peg_PhysicsBox = sb.Peg.subType({

    peg:undefined,

    init:function(world,bodyDef,fixDef, _x, _y, _width, _height, _rotation) {
        bodyDef.type = Box2D.Dynamics.b2Body.b2_dynamicBody;  // the type is dynamic



        fixDef.shape = new Box2D.Collision.Shapes.b2PolygonShape

        fixDef.shape.SetAsBox((_width / sb.SCALE) / 2, (_height/sb.SCALE) / 2);

        bodyDef.position.x = _x/sb.SCALE;
        bodyDef.position.y = _y/sb.SCALE;
        var obj = world.CreateBody(bodyDef).CreateFixture(fixDef);   // creates the object in the world
        this.peg = obj.GetBody()
    }, // init()

    getPeg:function() {
        return this.peg;
    }

});
