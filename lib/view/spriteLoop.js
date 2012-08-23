/**
 * @type sb.SpriteComposite
 * Derives (sprite) class
 * allowing multiple bitmaps sprites to form a looping animation
 */

sb.SpriteLoop = sb.Sprite.subType({

    animIndex:undefined,
    width:undefined,
    height:undefined,
    imagesWidth:undefined,
    $drawTarget:$('#draw-target'),
    $element:undefined,
    elemStyle:undefined,
    mathFloor: Math.floor,
    images:undefined,

    init:function(params) {
        this._super(params);
        this.$element = this.$drawTarget.append('<div/>').find(':last');
        this.elemStyle = this.$element[0].style
        this.$element.css({
            position: 'absolute',
            width: this.width,
            height: this.height,
            backgroundImage: 'url(' + this.images + ')'
        });
        this.animIndex = 0

    }, // init()


    /**
     * draw method
     * called by smorg's draw method
     * push's matrix into the graphics pipeline object
     */
    draw:function(x, y) {
        this.animIndex += 1 ;
        this.animIndex %= 5;
        this.animIndex += this.animIndex < 0 ? 5: 0;
        this.changeImage(this.animIndex);
        this.elemStyle.left = x + 'px';
        this.elemStyle.top = y + 'px';                         // so what does this mean??
    },

    imageDraw:function() {

    },

    changeImage: function (index) {
        index *= this.width;
        var vOffset = -this.mathFloor(index / this.imagesWidth) * this.height;
        var hOffset = -index % this.imagesWidth;
        this.elemStyle.backgroundPosition = hOffset + 'px ' + vOffset + 'px';
    }


});