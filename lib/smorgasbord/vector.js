/**
 * base vector classs
 */

sb.Vector = Object.subType({

    x:undefined, // these should be NUMBERS.
    y:undefined,

    init:function(n1,n2) {
        this.x = n1;
        this.y = n2;
    },

    setFromArray:function(arr) {
        if(!!arr && arr.constructor === Array)
            {this.x = arr[0];this.y = arr[1];}
        else
            {/*throw an error;*/ alert('not an array');}
        return this;
    },

    setFromVector:function(vec) {
       // if(!!vec && vec.constructor == sb.Vector)
            //{
                this.x = vec.x; this.y = vec.y;
    //}
     //   else
      //      {/*throw an error;*/ alert('not a vector');}
        return this;
    },

    add: function(other) {
        return new sb.Vector(this.x + other.x, this.y + other.y);
    },

    diff:function(other) {
        return new sb.Vector(this.x - other.x, this.y - other.y);
    },

    scale: function(by) {
        return new sb.Vector(this.x * by, this.y * by);
    },

    normalize: function() {
        function norm(value) {
            return value > 0 ? 1 : value < 0 ? -1 : 0;
        }
        return new sb.Vector(norm(this.x), norm(this.y));
    },

    isPracticallyZero: function() {
        return this.magnitude() < sb.Vector.PRACTICALLY_ZERO;
    },

    magnitude: function() {
        return Math.sqrt(this.x*this.x + this.y*this.y);
    },

    perpendicular: function() {
        return new sb.Vector(this.y, -1 * this.x);
    }

},

{   // statics
    ZEROVECTOR: [0.0, 0.0],
    XAXIS: [1.0, 0.0],
    YAXIS: [0.0, 1.0],
    ZAXIS: [0.0, 0.0, 1.0],
    PRACTICALLY_ZERO: 0.001
}


);