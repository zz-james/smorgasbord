/**
 * @type sb.SpriteIcon
 * Derived (sprite) class for use with DHTML type sprites
 */

sb.SpriteIcon = sb.Sprite.subType({

    _drawTarget:undefined,
    _element:undefined,
    _elemStyle:undefined,

    _image:undefined,

    init:function(params) {
        this._super(params);

        // create the bitmap sprite.
        var d = document.createElement('div');
        this._elemStyle = d.style;
        this._elemStyle.position = 'absolute';
        this._elemStyle.width = this._width+'px';
        this._elemStyle.height = this._height+'px';
        this._elemStyle.backgroundImage = 'url(' + this._image + ')';


        // attach to drawing surface???????
        this._element = this._drawTarget.appendChild(d);

    }, // init()


    /**
     * draw method
     * called by smorg's draw method
     * push's matrix into the graphics pipeline object
     */
    draw:function(x, y) {
        this._elemStyle.left = x + 'px';
        this._elemStyle.top = y + 'px';                         // so what does this mean??
    },

    imageDraw:function() {

    }




});