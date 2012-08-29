/**
 * @type sb.Graphics
 * Base (graphics) class
 */

sb.Graphics = Object.subType({

    init:function(params) {
        // unpack properties
        for (var name in params) {
            if (params.hasOwnProperty(name)) {
                this[name] = params[name];
            }
        }
    }, // init()

    display:function(hint) {

    }

});