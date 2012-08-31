/**
 * @type sb.Dhtml
 * derived (graphics) class
 */

sb.Dhtml = sb.Graphics.subType({

    _border:undefined,
    _window:document.getElementById("draw-target"),

    init:function(params) {
        console.log("i am dhtml graphics");
        this._super(params);
        this.setViewport();
    }, // init()

    pushMatrix:function() {
      //  console.log('rendering pipeline: push matrix');
    },

    multMatrix:function() {
      //  console.log('rendering pipeline: multi matrix');
    },

    popMatrix:function() {
      //  console.log('rendering pipeline: pop matrix');
    },

    display:function() {
        this._drawTarget.appendChild(d);
        console.log("draw an image of the game and display it in the browsers")
    },

    drawbitmap:function(elem) {
        console.log('drawing bitmap');
        this._window.appendChild(elem);
    },

    setViewport:function(width,height)
    {
        this._elemStyle = this._window.style;
        this._elemStyle.position = 'absolute';
        this._elemStyle.top = this._border._loy+'px';
        this._elemStyle.left = this._border._lox+'px';
        this._elemStyle.right = this._border._hix+'px';
        this._elemStyle.bottom = this._border._hiy+'px';
        this._elemStyle.width = this._border.getWidth()+'px';
        this._elemStyle.height = this._border.getHeight()+'px';
      /*  this._elemStyle.backgroundImage = 'url(' + this._image + ')';  */
    }


});