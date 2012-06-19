require(["lib/smorg/Person.js"], function(util) {



    // birth kid object using object function
    var kid = object(Person.prototype); // so we get the nice reusable stuff from person
    console.log(typeof(kid.getName));

});

