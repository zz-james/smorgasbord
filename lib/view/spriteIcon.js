/**
 * @type sb.SpriteIcon
 * Derived (sprite) class for use with DHTML type sprites
 */

sb.SpriteIcon = sb.Sprite.subType({

    width:undefined,
    height:undefined,

    $drawTarget:$('#draw-target'),
    $element:undefined,
    elemStyle:undefined,

    image:undefined,

    init:function(params) {
        this._super(params);
        this.$element = this.$drawTarget.append('<div/>').find(':last');
        this.elemStyle = this.$element[0].style
        this.$element.css({
            position: 'absolute',
            width: this.width,
            height: this.height,
            backgroundImage: 'url(' + this.image + ')'
        });


    }, // init()


    /**
     * draw method
     * called by smorg's draw method
     * push's matrix into the graphics pipeline object
     */
    draw:function(x, y) {
        this.elemStyle.left = x + 'px';
        this.elemStyle.top = y + 'px';                         // so what does this mean??
    },

    imageDraw:function() {

    }




});