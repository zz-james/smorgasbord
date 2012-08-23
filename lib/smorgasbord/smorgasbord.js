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
    "lib/smorg/smorg.js",
    "lib/smorg/cogSmorg.js",
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
sb._game = undefined;
sb._view = undefined;

sb.serve = function() {
    sb.setGameClass(sb.attrib.game.bord);
    // here we should have a test.
};

/**
 * sets the game class, creating a new game
 * @param runtimeclass  - string with the name of the class
 */
sb.setGameClass = function(runtimeclass) {
    sb._view = new sb.View();
    sb._game = new runtimeclass();
    sb._game.makeSmorgs(sb.attrib.smorgs);
    requestAnimFrame(function() {sb.update();});
    // sb._view.onUpdate(sb.VIEWHINT_STARTGAME);
};


/**
 * hooked into the browser to capture frame events, called just before browser repaints
 */
sb.update = function() {
    sb._game.update();
    // sb._view.onUpdate();
    // deal with queue
    requestAnimFrame(function() {sb.update();});
};

