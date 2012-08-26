/**
 * @type sb.Box
 * Base (box) class
 */

sb.Box = Object.subType({

    _lox:undefined, _hix:undefined, _loy:undefined, _hiy:undefined, _loz:undefined, _hiz:undefined,

    init:function(params) {
        // unpack properties
        for (var name in params) {
            if (params.hasOwnProperty(name)) {
                this[name] = params[name];
            }
        }
    }, // init()

});