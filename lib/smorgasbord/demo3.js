sb.Person = Object.subType({
    x:0, y:0,   // coords

    init:function() {
        console.log("I am ready");
    },

    dance:function() {
        console.log("I am dancing");
    }
});

// ninja is going to be a smorg but she needs some setup
sb.Ninja = sb.Person.subType({

    dance:function() {
        console.log("When I fight");
        this._super();
    }
},{
        smorg: "borg"
});


