/**
 * @type sb.Graphics
 * Base (graphics) class
 */

sb.Graphics = Object.subType({

    _width:undefined,
    _height:undefined,

    _modelviewmatrixstack:new Array(),
    _projectionmatrixstack:new Array(),

    init:function(params) {
        // unpack properties
        for (var name in params) {
            if (params.hasOwnProperty(name)) {
                this[name] = params[name];
            }
        }
    }, // init()

    display:function(hint) {
        /* overridden */
    }

});