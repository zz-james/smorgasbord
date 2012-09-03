/**
 * @type sb.Dhtml
 * derived (graphics) class
 */

sb.Dhtml = sb.Graphics.subType({

    _border:undefined,
    _window:document.getElementById("draw-target"),
    _positionX:undefined, //  not matrix for 2d dhtml sprites so use a position vector + rotation
    _positionY:undefined, //  not matrix for 2d dhtml sprites so use a position vector + rotation

    init:function(params) {
        console.log("i am dhtml graphics");
        this._super(params);
        this.setViewport();
    }, // init()

    setPosition:function(x,y) {
        this._positionX = x;
        this._positionY = y;
    },

    loadMatrix:function(translationVector) {
        var xtrans = translationVector.x;
        var ytrans = translationVector.y;
        this._elemStyle = this._window.style;
        this._elemStyle.MozTransform = 'translate('+xtrans+'px, '+ytrans+'px)';
    },

    display:function() {
        this._drawTarget.appendChild(d);
    },

    drawbitmap:function(elem, _style) {
        _style += 'top:'+this._positionY+'px;'+'left:'+this._positionX+'px';
        elem.setAttribute("style", _style);
        this._window.appendChild(elem);
    },

    setViewport:function()
    {
        this._elemStyle = this._window.style;
        this._elemStyle.position = 'relative';
        this._elemStyle.top = this._border._loy+'px';
        this._elemStyle.left = this._border._lox+'px';
        this._elemStyle.right = this._border._hix+'px';
        this._elemStyle.bottom = this._border._hiy+'px';
        this._elemStyle.width = this._border.getWidth()+'px';
        this._elemStyle.height = this._border.getHeight()+'px';
      /*  this._elemStyle.backgroundImage = 'url(' + this._image + ')';  */
    }


});