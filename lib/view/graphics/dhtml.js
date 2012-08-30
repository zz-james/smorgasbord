/**
 * @type sb.Dhtml
 * derived (graphics) class
 */

sb.Dhtml = sb.Graphics.subType({

    init:function(params) {
        console.log("i am dhtml graphics");
        // unpack properties
        for (var name in params) {
            if (params.hasOwnProperty(name)) {
                this[name] = params[name];
            }
        }
    }, // init()

    pushMatrix:function() {
        console.log('rendering pipeline: push matrix');
    },

    multMatrix:function() {
        console.log('rendering pipeline: multi matrix');
    },

    popMatrix:function() {
        console.log('rendering pipeline: pop matrix');
    },

    display:function() {
        console.log("draw an image of the game and display it in the browsers")
    }
});