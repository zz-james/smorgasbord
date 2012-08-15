
/*
require(["lib/smorg/Duck.js","lib/smorg/killerDuck.js"], function(util) {
    init();
});
*/


// self executing function gives us block scope.
(function() {
    var constructing = false;    // constructing is a flag we set that says when we birth use the superconstructor we don't want to run the initialiser
    // add the cross browser serialisation regex test (secrets of javascript ninje listing 6.20)
    var superPattern = /\b_super\b/;

    // give object constructor a extra method.
    // called as a factory method to create sub constructors
    // returns a constructor funcion with an instance from 'this' (super class)  as prototype
    // the returned constructor has this subClass function as a member
    Object.subClass = function(members)
    {
        // 'this' is the caller, e.g. for Ninja it is Person  - this is a factory method for the superconstructor to make it's subconstuctor
        var SuperConstructor = this;
        var _superTraits = SuperConstructor.prototype;     // traits object for 'super'



        constructing = true; // here we avoid running the base objects initialiser
        var proto = new SuperConstructor();   // make an instance of the 'super' object (with 'super' traits as parent)
        constructing = false; // set the constructing flag back to false;

        /* potentially   -   rejected as although we don't want to RUN the base classes initialise we *want it to have* all the methods
        var TempConstructor = function() {};
        TempConstructor.prototype = this.prototype;
        proto = new TempConstructor();
        */

        /* a tricksy part - we need to copy our members object into the prototype (proto) */
        /* but not overwrite any of proto's members of the same name */
        for(var name in members)
        {
            if(typeof members[name] == "function" && typeof _superTraits[name] == "function" && superPattern.test(members[name]) )
            {
                proto[name] = function(name, fn) {      // here function is used to ensure each itteration is seperate from the last

                    // 2. create a function object
                    var newFunc = function() {
                        this._super = _superTraits[name];     // 2.2 this will put into _super the method from the super's traits object with the current name (captured by closure!)
                        var ret = fn.apply(this,arguments);      // 2.3  this calls the method with any arguments passed
                        return ret;                   // 2.5 this returns any value that the method call returned
                    };
                    return newFunc; // 3. return the new function object (we can factor out the use of the temp variable newFunc)

                }(name, members[name]);  // 1. immediately invoke a function passing in the name and value each member of the members object
            } else {
                proto[name] = members[name]; // just copy if no 'super' member method exist with that name
            }
        }

        var SubConstructor = function() {
            if(!constructing && this.init) {this.init.apply(this,arguments);}
        };

        SubConstructor.prototype = proto;
        SubConstructor.constructor = SubConstructor;
        SubConstructor.subClass = arguments.callee; // arguments.callee is a pointer a function object has to itself when invoked
        return SubConstructor;
    };

})();



var Person = Object.subClass({ init:function() { console.log("I am ready"); } , dance:function() { console.log("I am dancing"); } });


var Ninja = Person.subClass({ dance:function() { console.log("When I fight"); this._super(); } });  // Person and it's subClass method were created by Object.subClass
if(true === true) {}
var jimmy = new Ninja();
jimmy.dance();

//var Jimmy = Ninja.subClass();   //

//jimmy = new Jimmy();



// here we should have a test.

/*
Object.extend = function() {
    var TempConstuctor = function() {};
    TempConstuctor.prototype = this.prototype; // steal the base traits

    var proto = new TempConstuctor ();   // create an empty object with base traits as parent

    var subConstructor  = function() {}

    subConstructor.prototype = proto; stick if onto our sub

    subConstructor.prototype.constructor = subConstructor;
    subConstructor.superClass = baseConstructor.prototype;
    return subConstructor;
};

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

  */


