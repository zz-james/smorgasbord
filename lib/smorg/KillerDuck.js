//KillerDuck class constructor
function KillerDuck() {

}

// define the class killer duck here
KillerDuck.prototype.shoot = function() {
    console.log("bang! bang!");
};

// make KillerDuck inherit from Duck
extend(KillerDuck,Duck);

