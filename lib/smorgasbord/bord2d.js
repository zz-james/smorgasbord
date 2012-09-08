/**
 * @type sb.Bord 2d
 * Derived (bord) class containing state of the world
 *
 * Subclass of bord that uses box 2d physics engine, for 2d games only
 *
 */

sb.Bord2d = sb.Bord.subType({

    world:undefined,  // physics
    bodyDef:undefined,
    fixDef:undefined,
    is3d:false,

    init:function(params) {
        this._super(params);
        this.createWorld();
    }, // init()

    makePlayer:function(playerProps) {
        this._super(playerProps);
        // do something that makes it a player
        // like a keyboard listener.
        // Listener.getListener(arrowKeys);
    },

    createWorld:function() {

        var gravity =  new Box2D.Common.Math.b2Vec2(0, 10);
        var doSleep = true;
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

        // set up a collider
        var listener = createContactListener({ BeginContact: function(idA, idB){

            if(idA.name == 'spring'){

                var force = new Box2D.Common.Math.b2Vec2(0, -150);
                idB.peg.ApplyImpulse(force,idB.peg.GetWorldCenter());
            }
        } });
        this.world.SetContactListener(listener);
    },

    initialiseView:function(view) {
        this._super(view);
        view._viewPointSmorg.setTrackplayer(true);
    },


    initialiseViewpoint:function(viewPointSmorg) {
        viewPointSmorg.setViewPoint(new sb.Vector(0,0));
        viewPointSmorg.setZoom(1.0);
    },

    update:function() {

        this.world.Step(
            1 / 60   //frame-rate
            ,  10       //velocity iterations
            ,  10       //position iterations
        );

        //this.smorgList.move();    // box 2d does this
        this.world.ClearForces();
        this._super();
    } // update()

});
