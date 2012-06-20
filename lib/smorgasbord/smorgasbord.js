require(["lib/smorg/Duck.js","lib/smorg/killerDuck.js"], function(util) {
    init();
});

// used to create a class-subclass kind of relationship between proto objects
// no need to return anything as all done by reference.
function extend(C,P) {
    var F = function() {};
    F.prototype = P.prototype;

    for(prop in C.prototype)
    {
        if(C.prototype.hasOwnProperty(prop)){
            F.prototype[prop] = C.prototype[prop];
        }
    }

    C.prototype = new F();
    C.prototype.constructor = C;
}

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


