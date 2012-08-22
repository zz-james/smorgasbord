require([
    "lib/lang/inheritence.js",
    "lib/lang/browser.js",
    "lib/smorg/smorg.js",
    "lib/smorgasbord/bord.js",
    "lib/smorgasbord/demo.js",
    "lib/smorgasbord/Box2d.min.js"   /*this sucks should be able to load it in bord2d */
    ], function() {
    sb.serve();
});


if(typeof sb === 'undefined') {
    var sb = {};
}

sb.jimmy = undefined;
sb._game = undefined;
sb.world = undefined;

sb.serve = function() {

    // create world
    var gravity =  new Box2D.Common.Math.b2Vec2(0, 10);
    var doSleep = true;
    sb.world = new Box2D.Dynamics.b2World(gravity, doSleep);


    // A body is a rigid physical object
    // a b2BodyDef is a structure for holding body definitions
    var bodyDef = new Box2D.Dynamics.b2BodyDef;

    // the next 4  bodies are static.
    bodyDef.type = Box2D.Dynamics.b2Body.b2_staticBody;

    // A fixture binds a shape to a body and adds material properties such as density, friction, and restitution.
    // a b2FixtureDef is a structure for holding fixture definitions
    var fixDef = new Box2D.Dynamics.b2FixtureDef;

    // material properties for the fixture
    fixDef.density = 1.0;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.2;

    // assign a polygon shape type to the fixture
    fixDef.shape = new Box2D.Collision.Shapes.b2PolygonShape;

    // change shape
    fixDef.shape.SetAsBox(20, 2);  // horizontal box

    // smorg 1
    bodyDef.position.Set(10, 400 / 30 + 1.8);
    sb.world.CreateBody(bodyDef).CreateFixture(fixDef); // creates the object in the world

    // smorg 2
    bodyDef.position.Set(10, -1.8);
    sb.world.CreateBody(bodyDef).CreateFixture(fixDef); // creates the object in the world


    // change shape
    fixDef.shape.SetAsBox(2, 14);  // vertical box

    // smorg 3
    bodyDef.position.Set(-1.8, 13);
    sb.world.CreateBody(bodyDef).CreateFixture(fixDef); // creates the object in the world

    // smorg 4
    bodyDef.position.Set(21.8, 13);
    sb.world.CreateBody(bodyDef).CreateFixture(fixDef); // creates the object in the world

    // smorg 5
    sb.jimmy = new sb.Smorg(sb.world, bodyDef, fixDef);

    sb.anim();

    // here we should have a test.

};

sb.anim = function() {

    sb.world.Step(
        1 / 60   //frame-rate
        ,  10       //velocity iterations
        ,  10       //position iterations
    );


    sb.jimmy.draw();

    sb.world.ClearForces();
    requestAnimFrame(function() {sb.anim();});
}

/**
 *  sets the game class, creating a new game
 * @param runtimeclass  - string with the name of the class
 */
sb.setGameClass = function(runtimeclass) {

     // where do we birth view?
    sb._game = new runtimeclass();
    sb._game.makeSmorgs();
    requestAnimFrame(function() {sb._game.update();});
  //  view.onUpdate(this, lHint, pHint);      // wtf?
};







