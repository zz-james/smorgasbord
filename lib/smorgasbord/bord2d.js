/**
 * @type smorgasbord.Bord 2d
 * Derived (bord) class containing state of the world
 *
 * Subclass of bord that uses box 2d physics engine, for 2d games only
 *
 */

sb.Bord2d = sb.Bord.subType({

        world:undefined,
        jimmy:undefined,
        bodyDef:undefined,
        fixDef:undefined,
        smorgList:undefined,

        init:function() {
            // create world
            var gravity =  new Box2D.Common.Math.b2Vec2(0, 10);
            var doSleep = true;

            this.smorgList = new sb.SmorgList(this);

            this.world = new Box2D.Dynamics.b2World(gravity, doSleep);


            // A body is a rigid physical object
            // a b2BodyDef is a structure for holding body definitions
            this.bodyDef = new Box2D.Dynamics.b2BodyDef;

            // A fixture binds a shape to a body and adds material properties such as density, friction, and restitution.
            // a b2FixtureDef is a structure for holding fixture definitions
            this.fixDef = new Box2D.Dynamics.b2FixtureDef;

            // material properties for the fixture
            this.fixDef.density = 1.0;
            this.fixDef.friction = 0.5;
            this.fixDef.restitution = 0.2;
        }, // init()

        makeSmorgs:function() {
            // smorg into the list
            new sb.Smorg(this);
            new sb.Smorg(this);
        } ,

        update:function() {

            this.world.Step(
                1 / 60   //frame-rate
                ,  10       //velocity iterations
                ,  10       //position iterations
            );

            this.smorgList.draw();

            this.world.ClearForces();

        } // update()

    });
