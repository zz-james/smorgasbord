sb.Peg_Steering = sb.Peg.subType({

    peg:undefined,
    ownerBody:undefined, // the body this steering peg belongs to
    x:undefined, y:undefined, // the horiz and vert offset from ownerBody
    width:undefined,  // width and length IN METERS
    length:undefined,
    revolving:undefined, // bool: does this peg revolve when steering
    powered:undefined, // bool: is this peg powered
    position:[],

    init:function(world,bodyDef,fixDef, owner) {
        this._super();
        //initialize body
        bodyDef.type = Box2D.Dynamics.b2Body.b2_dynamicBody;  // the type is dynamic
        bodyDef.position=owner.steered.peg.GetWorldPoint(new Box2D.Common.Math.b2Vec2(owner.x, owner.y));
        bodyDef.angle=owner.steered.peg.GetAngle();
        bodyDef.userData = owner;
        //initialize shape
        fixDef.density=1;
        fixDef.isSensor=true; //wheel does not participate in collision calculations: resulting complications are unnecessary
        fixDef.shape = new Box2D.Collision.Shapes.b2PolygonShape
        fixDef.shape.SetAsBox((owner._width / sb.SCALE) / 2, (owner._height/sb.SCALE) / 2);

        var obj = world.CreateBody(bodyDef).CreateFixture(fixDef);   // creates the object in the world
        this.peg = obj.GetBody();

        //create joint to connect wheel to body
        if(owner.revolving){
            var jointdef=new Box2D.Dynamics.Joints.b2RevoluteJointDef();
            jointdef.Initialize(owner.steered.peg, this.peg, this.peg.GetWorldCenter());
            jointdef.enableMotor=false; //we'll be controlling the wheel's angle manually
        }else{
            var jointdef=new Box2D.Dynamics.Joints.b2PrismaticJointDef();
            jointdef.Initialize(owner.steered.peg, this.peg, this.peg.GetWorldCenter(), new Box2D.Common.Math.b2Vec2(1, 0));
            jointdef.enableLimit=true;
            jointdef.lowerTranslation=jointdef.upperTranslation=0;
        }

        world.CreateJoint(jointdef);




    }, // init()

    getPeg:function() {
        return this.peg;
    }

});