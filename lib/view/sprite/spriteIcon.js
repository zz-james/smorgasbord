/**
 * @type sb.SpriteIcon
 * Derived (sprite) class for use with DHTML type sprites
 */

sb.SpriteIcon = sb.Sprite.subType({

     _style:undefined,
     _elem:undefined,

    init:function(params) {
        this._super(params);
        // create the bitmap sprite.
        this._elem = document.createElement('div');
        // set image?
     }, // init()

    /**
     *
     * @param graphics
     */
    imageDraw:function(graphics) {

        this._style = 'position:absolute;width:'+this._width+'px;height:'+this._height+'px;background-image:url(' + this._image + ')';
        this._elem.setAttribute("style", this._style);

        graphics.drawbitmap(this._elem);
    },

    animate:function() {
        //spriteicon does not animate
    }

    /*
     #rotate {
     transform:rotate(45deg);
     }
     */


});