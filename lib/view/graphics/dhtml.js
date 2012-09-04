/**
 * @type sb.Dhtml
 * derived (graphics) class
 */

sb.Dhtml = sb.Graphics.subType({

    _border:undefined,
    _viewportRect:undefined,
    _viewport:document.getElementById("viewport"),
    _window:document.getElementById("draw-target"),
    _positionX:undefined, //  not matrix for 2d dhtml sprites so use a position vector + rotation
    _positionY:undefined, //  not matrix for 2d dhtml sprites so use a position vector + rotation

    init:function(params) {
        console.log("i am dhtml graphics");
        this._super(params);
        this._viewportRect = sb.attrib.game.viewport;
        this.setViewPort();
        this.setGameWorld();
    }, // init()

    setPosition:function(x,y) {
        this._positionX = x;
        this._positionY = y;
    },

    loadMatrix:function(translationVector) {
        var xtrans = translationVector.x;
        var ytrans = translationVector.y;
        elemStyle = this._window.style;
        elemStyle.MozTransform = 'translate('+xtrans+'px, '+ytrans+'px)'; //rotation goes here too
    },

    display:function() {
        this._drawTarget.appendChild(d);
    },

    drawbitmap:function(elem, _style) {
        _style += 'top:'+this._positionY+'px;'+'left:'+this._positionX+'px';
        elem.setAttribute("style", _style);
        this._window.appendChild(elem);
    },

    setViewPort:function()
    {
        elemStyle = this._viewport.style;
        elemStyle.position = 'absolute';
        elemStyle.overflow = 'hidden';
        elemStyle.top = this._viewportRect._loy+'px';
        elemStyle.left = this._viewportRect._lox+'px';
        elemStyle.width = this._viewportRect._hix+'px';
        elemStyle.height = this._viewportRect._hiy+'px';
    },

    setGameWorld:function()
    {
        elemStyle = this._window.style;
        elemStyle.position = 'relative';
        elemStyle.top = this._border._loy+'px';
        elemStyle.left = this._border._lox+'px';
        elemStyle.width = this._border.getWidth()+'px';
        elemStyle.height = this._border.getHeight()+'px';
      /*  this._elemStyle.backgroundImage = 'url(' + this._image + ')';  */
    }


});