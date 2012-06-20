require(["lib/smorg/Duck.js","lib/smorg/killerDuck.js"], function(util) {
    init();
});



// used to create a class-subclass kind of relationship between proto objects
// no need to return anything as all done by references to the constructors.
function extend(C,P) {
    var F = function() {}; // create this function object F
    F.prototype = P.prototype; // set prototype to point to P's prototype (psuedo class)
    for(prop in C.prototype) // give it all the properties of Cs current prototype
    {
        if(C.prototype.hasOwnProperty(prop)){
            F.prototype[prop] = C.prototype[prop];
        }
    }
    C.prototype = new F(); // then use F as the prototype of C
    C.prototype.constructor = C;
}




// -----------------------
function init() {

    var kid = new KillerDuck(); // so we get the reusable stuff from duck.prototype

    kid.fly();
    kid.shoot();

    for(var prop in kid)
    {
        if(kid.hasOwnProperty(prop)){
            console.log(prop);
        } else {
            console.log("safe");
        }
    }
};


