/**
 * @type sb.SpriteIcon
 * Derived (sprite) class for use with DHTML type sprites
 */

sb.SpriteIcon = sb.Sprite.subType({

    _style:"",
    _elem:undefined,
    _spriteRotation:0,
    _name:undefined,

    init:function(params) {
        this._super(params);
        // create the bitmap sprite.
        this._elem = document.createElement('div');
        this._elem.id = this._name;
     }, // init()

    /**
     *
     * @param graphics
     */
    imageDraw:function(graphics) {
        this._style += 'position:absolute;width:'+this._width+'px;height:'+this._height+'px;background-image:url(' + this._image + ');';
        graphics.drawbitmap(this._elem, this._style);
        this._style = '';
    },

    animate:function(smorg) {
        // no animation frame changes for spriteicon, only rotation
        // handle rotation
        this._style += '-moz-transform:rotate('+smorg.rotation+'rad);';
    },

    /**
     * draw method
     * called by smorg's draw method
     * simple in the case of spriteicon as image matrix matches smorg's matrix, so no work to do
     */
    draw:function(graphics) {
        this.imageDraw(graphics);
    }

    /*
     #rotate {
     transform:rotate(45deg);
     }
     */


});