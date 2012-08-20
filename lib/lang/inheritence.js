// self executing function gives us block scope.
(function() {
    var constructing = false;
    var superPattern = /\b_super\b/;

    Object.subType = function(members, _static) {
        var SuperConstructor = this;
        var _superTraits = SuperConstructor.prototype;     // traits object for 'super'

        constructing = true;
        var proto = new SuperConstructor();
        constructing = false;

        for (var name in members) {
            if (typeof members[name] == "function" && typeof _superTraits[name] == "function" && superPattern.test(members[name])) {
                proto[name] = function (name, fn) {
                    var newFunc = function () {
                        this._super = _superTraits[name];
                        var ret = fn.apply(this, arguments);
                        return ret;
                    };
                    return newFunc;
                }(name, members[name]);
            } else {
                proto[name] = members[name];
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