/**
 * base point classs
 */

sb.Point = Object.subType({

    x:undefined,
    y:undefined,

    init:function(x,y) {
        this.x = x;
        this.y = y;
    },

    relative:function(to) {
        return new Vector(to.x - this.x, to.y - this.y);
    },

    distance:function(to) {
        return Math.sqrt(Math.pow(this.x - to.x, 2) + Math.pow(this.y - to.y, 2));
    }

});