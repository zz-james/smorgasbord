/**
 * collection class that holeds an array of pointers to smorg objects
 */

sb.SmorgList = function(ownerGame) {
    this.ownerGame = ownerGame;
    console.log("Smorglist ready");
};

sb.SmorgList.prototype = new Array();

sb.SmorgList.prototype.ownerGame = undefined;

sb.SmorgList.prototype.add =  function(value) {
    console.log("I am pushing");
    this.push(value);
};

sb.SmorgList.prototype.moo = function () {
    console.log("moo");
};



sb.SmorgList.prototype.animate = function() {
    for(var i = 0, j = this.length; i < j; ++i)
    {
        this[i].animate(); // itterate
    }
};

sb.SmorgList.prototype.draw = function() {    // gets called by view
    for(var i = 0, j = this.length; i < j; ++i)
    {
        this[i].draw(); // itterate
    }
};

sb.SmorgList.prototype.update = function(view) {
    for(var i = 0, j = this.length; i < j; ++i)
    {
        this[i].update(view); // itterate
    }
};

//game:undefined; // will hold a pointer to the game object
//serviceRequests:new Array(); // special bookkeeping array of simple objects called serviceRequect

/*
init:function(ownerGame) {
    //etcetera
},
*/

/**
 * add overrides the array's add function so that it wont let you
 * acidentally add the same thing twice, it also sets the smorg's ownerlist field
 */
/*
add:function(smorg){

},
*/
/*
    smorglist is responsible for deleting all of it's members
    the destructor calls the destructor for the smorgs in the array
*/

//draw:function() }{},

//move:function() }{},

//update:function() }{},

//animate:function() }{},

//render:function() }{},        // deferred to box2d

//listen:function() }{},



