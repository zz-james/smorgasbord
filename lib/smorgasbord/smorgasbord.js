/**
 * the doc part of the document-view
 */

if(typeof sb === 'undefined') {
    var sb = {};
}

  /* this is fucked */
require([
    "lib/lang/inheritence.js",
    "lib/lang/browser.js",
    "lib/smorgasbord/smorgList.js",
    "lib/view/sprite.js",
    "lib/view/spriteLoop.js",
    "lib/view/view.js",
    "lib/view/graphics/graphics.js",
    "lib/view/graphics/dhtml.js",
    "lib/smorg/smorg.js",
    "lib/smorg/cogSmorg.js",
    "lib/smorgasbord/box.js",
    "lib/smorgasbord/bord.js",
    "lib/smorgasbord/bord2d.js",
    "lib/force/Box2d.min.js",   /*this sucks should be able to load it in bord2d */
    "resources/attributes/attributes.js"
    ], function() {
    sb.serve();
});

// GLOBALS
sb.VIEWHINT_STARTGAME = 2;
sb.VIEWHINT_LOADING = 3;
sb.SCALE = 30; // this converts pixels to meters in Box2d library
sb._GAME = undefined;
sb._VIEW = undefined;

sb.serve = function() {
    sb.setGameClass(sb.attrib.game.bord);
    sb.setGameView(sb.attrib.graphics);
    sb._GAME.makeSmorgs(sb.attrib.smorgs);
    sb._VIEW.onUpdate(sb.VIEWHINT_STARTGAME);
    requestAnimFrame(function() {sb.update();});
    // here we should have a test.
};

/**
 * sets the game class, creating a new game
 * @param runtimeclass  - string with the name of the class
 */
sb.setGameClass = function(gameclass) {
    sb._GAME = new gameclass();
};

sb.setGameView = function(viewclass) {
    sb._VIEW = new sb.View({ _graphics:new viewclass(), _game:sb._GAME });
};


/**
 * hooked into the browser to capture frame events, called just before browser repaints
 */
sb.update = function() {
    sb._GAME.update();      //step()
    sb._VIEW.onUpdate();     //update all viewss
    // deal with queue
    requestAnimFrame(function() {sb.update();});
};

