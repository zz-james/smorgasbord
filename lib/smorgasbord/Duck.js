//duck class constructor
function Duck() {}

//so this prototype is the reusable part we’re looking for, more akin to a class def)
// define the class duck here
Duck.prototype.fly = function() {
    console.log("I'm flying");
};

Duck.prototype.quack = function() {
    console.log("quack quack");
};