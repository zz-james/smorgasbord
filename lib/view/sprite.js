/**
 * @type sb.Sprite
 * Base (sprite) class
 */

sb.Sprite = Object.subType({

    _radius:undefined,
  //  _spriteAttitude:new sb.matrix(),

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
        this.imageDraw(graphics, drawflags);
        graphics.popMatrix();
    },

    imageDraw:function() {
        //overriden by child classes.
    }

});
