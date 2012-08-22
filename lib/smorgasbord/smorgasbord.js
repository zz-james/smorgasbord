if(typeof sb === 'undefined') {
    var sb = {};
}

  /* this is fucked */
require([
    "lib/lang/inheritence.js",
    "lib/lang/browser.js",
    "lib/smorgasbord/smorgList.js",
    "lib/smorg/smorg.js",
    "lib/smorgasbord/bord.js",
    "lib/smorgasbord/bord2d.js",
    "lib/smorgasbord/demo.js",
    "lib/smorgasbord/Box2d.min.js"   /*this sucks should be able to load it in bord2d */
    ], function() {
    sb.serve();
});


/**
 * onStartMovie !!
 */
sb.serve = function() {
    sb.setGameClass(sb.Bord2d);
    // here we should have a test.
};

/**
 * sets the game class, creating a new game
 * @param runtimeclass  - string with the name of the class
 */
sb.setGameClass = function(runtimeclass) {
     // where do we birth view?
    sb._game = new runtimeclass();
    sb._game.makeSmorgs();
    requestAnimFrame(function() {sb.update();});
  //  view.onUpdate(this, lHint, pHint);      // wtf?
};


/**
 * hooked into the browser to capture frame events, called just before browser repaints
 */
sb.update = function() {
    sb._game.update();
    requestAnimFrame(function() {sb.update();});
};





