require([
    "lib/lang/inheritence.js",
    "lib/lang/browser.js",
    "lib/smorgasbord/demo3.js",
    "lib/smorgasbord/bord.js",
    "lib/smorgasbord/Box2d.min.js",   /*this sucks should be able to load it in bord2d */
    "lib/smorgasbord/bord2d.js"
    ], function() {
    sb.serve();
});


if(typeof sb === 'undefined') {
    var sb = {};
}


sb.serve = function() {

    var bord2d = new sb.Bord2d();
    setTimeout(function() {bord2d.init();}, 25000);
    requestAnimFrame(bord2d.update);


    var jimmy = new sb.Ninja(/*pointer to 2d body*/);
    jimmy.dance();

    // here we should have a test.

};






