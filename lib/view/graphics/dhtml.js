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
    _viewportHeight:undefined,
    _viewportWidth:undefined,
    _limitX:undefined,
    _limitY:undefined,

    init:function(params) {
        console.log("i am dhtml graphics");
        this._super(params);
        this._viewportRect = sb.attrib.game.viewport;
        this.setViewPort();
        this.setGameWorld();
        this._limitX = this._viewportRect._hix-this._border._hix; // world should not move further
        this._limitY = this._viewportRect._hiy-this._border._hiy;
    }, // init()

    setPosition:function(x,y) {
        this._positionX = x;
        this._positionY = y;
    },

    loadMatrix:function(translationVector) {
        var xtrans = translationVector.x + (this._viewportRect._hix/2);
        var ytrans = translationVector.y + (this._viewportRect._hiy/2);

        if(xtrans > 0) {xtrans = 0;}
        if(xtrans < this._limitX) {xtrans = this._limitX;}

        if(ytrans > 0) {ytrans = 0;}
        if(ytrans < this._limitY) {ytrans = this._limitY;}
      //  log(this._viewport._hix);

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