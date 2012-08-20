require([
    "lib/lang/inheritence.js",
    "lib/lang/browser.js",
    "lib/smorgasbord/Box2d.min.js",
    "lib/smorgasbord/bord.js",
    ], function() {
    serve();
});


var serve = function() {



// ninja is going to be a smorg but he needs some setup
var Person = Object.subType({ init:function() { console.log("I am ready"); } , dance:function() { console.log("I am dancing"); } });
var Ninja = Person.subType({ dance:function() { console.log("When I fight"); this._super(); } }, { smorg: "borg" });  // Person and it's subClass method were created by Object.subClass


var jimmy = new Ninja();
jimmy.dance();


    box2d();
// here we should have a test.

}





