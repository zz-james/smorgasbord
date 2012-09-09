/**
 * the doc part of the document-view
 */

if(typeof sb === 'undefined') {
    var sb = {};
}

log = function(msg) {
    document.getElementById("out").innerHTML = msg;
};

  /* this is fucked */
require([
    "lib/lang/inheritence.js",
    "lib/lang/browser.js",
    "lib/smorgasbord/vector.js",
    "lib/smorgasbord/point.js",
    "lib/smorgasbord/matrix2d.js",
    "lib/smorgasbord/smorgList.js",
    "lib/view/sprite/sprite.js",
    "lib/view/sprite/spriteIcon.js",
    "lib/view/view.js",
    "lib/view/graphics/graphics.js",
    "lib/view/graphics/dhtml.js",
    "lib/smorg/pegs/peg.js",
    "lib/smorg/pegs/peg_PhysicsCircle.js",
    "lib/smorg/pegs/peg_PhysicsBox.js",
    "lib/smorg/pegs/peg_Steering.js",
    "lib/smorg/pins/pin.js",
    "lib/smorg/pins/pin_PhysicsBox.js",
    "lib/smorg/smorg.js",
    "lib/smorg/cogSmorg.js",
    "lib/smorg/carSmorg.js",
    "lib/smorg/wheelSmorg.js",
    "lib/smorg/blockSmorg.js",
    "lib/smorg/springSmorg.js",
    "lib/smorg/viewPointSmorg.js",
    "lib/smorgasbord/box.js",
    "lib/smorgasbord/bord.js",
    "lib/smorgasbord/bord2d.js",
    "lib/smorgasbord/carbord.js",
    "lib/listener/listenerFactory.js",
    "lib/force/Box2d.min.js",   /*this sucks should be able to load it in bord2d */
    "resources/attributes/attributes2.js"
    ], function() {
    sb.serve();
});

// GLOBALS
sb.VIEWHINT_STARTGAME = 2;
sb.VIEWHINT_LOADING = 3;
sb.SCALE = undefined; // this converts pixels to meters in Box2d library
sb._GAME = undefined;
sb._VIEW = undefined;
sb._LISTENERS = undefined;

sb.serve = function() {
    sb.setGameClass(sb.attrib.game.bord);
    sb.setGameView(sb.attrib.graphics);
    sb.listenerFactory();
    sb._GAME.makeSmorgs(sb.attrib.smorgs);
    sb._GAME.makePlayer(sb.attrib.player);
    // process service requests.
    sb._VIEW.onUpdate(sb.VIEWHINT_STARTGAME);
    requestAnimFrame(function() {sb.update();});
    // here we should have a test.
};

/**
 * sets the game class, creating a new game
 * @param gameclass  - string with the name of the class
 */
sb.setGameClass = function(gameclass) {
    sb._GAME = new gameclass({size:sb.attrib.game.size});
};

/**
 * sets the game view from attribute sheet
 */
sb.setGameView = function() {
    sb._VIEW = new sb.View({_game:sb._GAME});
};

/**
 * listener factory
 */
sb.listenerFactory = function() {
    sb._LISTENERS = new sb.ListenerFactory();
};


/**
 * hooked into the browser to capture frame events, called just before browser repaints
 */
sb.update = function() {
    sb._GAME.update();      //step()
    sb._VIEW.onUpdate();     //update all viewss
    // deal with queue
    //document.getElementById("ui").innerHTML = sb._LISTENERS.left;

   requestAnimFrame(function() {sb.update();});
};

