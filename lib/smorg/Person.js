//person constructor
function Person() {}

//so this prototype is the reusable part we’re looking for, more akin to a class def)
// define the class person here
Person.prototype.getName = function() {
    return this.name;
}