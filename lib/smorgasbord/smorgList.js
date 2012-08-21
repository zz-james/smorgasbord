/**
 * collection class that holeds an array of pointers to smorg objects
 *
 *
 */

game:undefined; // will hold a pointer to the game object
serviceRequests:new Array(); // special bookkeeping array of simple objects called serviceRequect


init:function(ownerGame) {
    //etcetera
},

/**
 * add overrides the array's add function so that it wont let you
 * acidentally add the same thing twice, it also sets the smorg's ownerlist field
 */
add:function(smorg){

},

/*
    smorglist is responsible for deleting all of it's members
    the destructor calls the destructor for the smorgs in the array
*/

draw:function() }{},        // gets called by view

move:function() }{},

update:function() }{},

animate:function() }{},

render:function() }{},        // deferred to box2d

listen:function() }{},



