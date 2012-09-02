/**
 * @type sb.Sprite
 * Base (sprite) class
 */

sb.Sprite = Object.subType({

    _radius:undefined,
    _width:undefined,
    _height:undefined,
    _spriteAttitude:undefined,

    init:function(params) {
        // unpack properties
        for (var name in params) {
            if (params.hasOwnProperty(name)) {
                this[name] = params[name];
            }
        }
    }, // init()

    radius:function() {
        return this._radius;
    },

    /**
     * draw method
     * called by smorg's draw method
     * push's matrix into the graphics pipeline object
     */
    draw:function(graphics) {
        graphics.pushMatrix();
        graphics.multMatrix(this._spriteAttitude);
        this.imageDraw(graphics);
        graphics.popMatrix();
    },

    imageDraw:function(graphics) {
        //overriden by child classes.

    },

    animate:function() {
       //overriden by child classes
    }

});
