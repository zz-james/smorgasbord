//KillerDuck class constructor
function KillerDuck() {}

KillerDuck().prototype.prototype = new Duck();

//so this prototype is the reusable part we’re looking for, more akin to a class def)
// define the class killer duck here
KillerDuck.prototype.shoot = function() {
    console.log("bang! bang!");
};

