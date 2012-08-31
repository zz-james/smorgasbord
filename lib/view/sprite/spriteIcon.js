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
        this._style = 'position:absolute;width:'+this._width+'px;height:'+this._height+'px;background-image:url(' + this._image + ')';

        // graphics (dhtml) attaches to element surface

     }, // init()

    /**
     *
     * @param graphics
     */
    imageDraw:function(graphics) {
        this._elem.setAttribute("style", this._style);
        //this._super(graphics);
        graphics.drawbitmap(this._elem);
    }




});