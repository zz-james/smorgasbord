
// self executing function gives us block scope.
(function() {
    var constructing = false; // constructing is a flag we set that says when we birth use the superconstructor we don't want to run the initialiser
    // the constructor has 2 states, if it is being run to extend the proto chain or to instance a type

    // add the cross browser serialisation regex test (secrets of javascript ninje listing 6.20)
    var superPattern = /\b_super\b/;

    // give object constructor a extra method.
    // called as a factory method to create sub constructors
    // returns a constructor funcion with an instance from 'this' (super class)  as prototype
    // the returned constructor has this subClass function as a member
    Object.subType = function(members, _static) {
        // 'this' is the caller, e.g. for Ninja it is Person  - this is a factory method for the superconstructor to make it's subconstuctor
        var SuperConstructor = this;
        var _superTraits = SuperConstructor.prototype;     // traits object for 'super'

        // THE OBJECTS INSTANCED FOR PURPOSES OF PROVIDING SUPER TRAITS PROTOTYPES ARE ALWAYS EMPTY
        // BECUASE ONLY PER-INSTANCE MEMBERS LIVE IN THIS KIND OF OBJECT.
        // YOU CANNOT BUILD A MODEL LIKE IN SELF B/COS JAVASCRIPT'S INHERITANCE
        // SYSTEMS ARE HORRIBLY BROKEN.
        /*  */
        constructing = true; // here we avoid running the base objects initialiser
        var proto = new SuperConstructor();   // make an instance of the 'super' object (with 'super' traits as parent)
        constructing = false; // set the constructing flag back to false;


        /* potentially   -   pretty much the same as the cnostructor functions 'body' props are always empty
         var TempConstructor = function() {};
         TempConstructor.prototype = this.prototype;
         proto = new TempConstructor();
         */

        /* a tricksy part - we need to copy our members object into the prototype (proto) */
        /* but not overwrite any of proto's members of the same name */
        for (var name in members) {
            if (typeof members[name] == "function" && typeof _superTraits[name] == "function" && superPattern.test(members[name])) {
                proto[name] = function (name, fn) {      // here function is used to ensure each itteration is seperate from the last

                    // 2. create a function object
                    var newFunc = function () {
                        this._super = _superTraits[name];     // 2.2 this will put into _super the method from the super's traits object with the current name (captured by closure!)
                        var ret = fn.apply(this, arguments);      // 2.3  this calls the method with any arguments passed
                        return ret;                   // 2.5 this returns any value that the method call returned
                    };
                    return newFunc; // 3. return the new function object (we can factor out the use of the temp variable newFunc)

                }(name, members[name]);  // 1. immediately invoke a function passing in the name and value each member of the members object
            } else {
                proto[name] = members[name]; // just copy if no 'super' member method exist with that name
            }
        }

        var SubConstructor = function () {
            if (!constructing && this.init) {
                this.init.apply(this, arguments);
            }
        };

        SubConstructor.prototype = proto;
        SubConstructor.constructor = SubConstructor;

        // extend the subconstrucor here
        if (_static) {
            console.log("extend the constructor method with static methods");
        }

        SubConstructor.subType = arguments.callee; // arguments.callee is a pointer a function object has to itself when invoked
        return SubConstructor;
    };

})();



var Person = Object.subType({ init:function() { console.log("I am ready"); } , dance:function() { console.log("I am dancing"); } });


var Ninja = Person.subType({ dance:function() { console.log("When I fight"); this._super(); } }, { smorg: "borg" });  // Person and it's subClass method were created by Object.subClass


var jimmy = new Ninja();
jimmy.dance();

//var Jimmy = Ninja.subClass();   //

//jimmy = new Jimmy();
// here we should have a test.