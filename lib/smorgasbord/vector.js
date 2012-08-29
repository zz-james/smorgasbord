/**
 * base vector classs
 */

sb.Vector = Object.subType({

    x1:undefined, // these should be NUMBERS.
    x2:undefined,

    init:function(x1,x2) {
        this.x1 = x1;
        this.x2 = x2;
    },

    setFromArray:function(arr) {
        if(!!arr && arr.constructor === Array)
            {this.x1 = arr[0];this.x2 = arr[1];}
        else
            {/*throw an error;*/ alert('not an array');}
        return this;
    },

    setFromVector:function(vec) {
       // if(!!vec && vec.constructor == sb.Vector)
            //{
                this.x1 = vec.x1; this.x2 = vec.x2;
    //}
     //   else
      //      {/*throw an error;*/ alert('not a vector');}
        return this;
    },

    add: function(other) {
        return new sb.Vector(this.x1 + other.x1, this.x2 + other.x2);
    },

    diff:function(other) {
        return new sb.Vector(this.x1 - other.x1, this.x2 - other.x2);
    },

    scale: function(by) {
        return new sb.Vector(this.x1 * by, this.x2 * by);
    },

    normalize: function() {
        function norm(value) {
            return value > 0 ? 1 : value < 0 ? -1 : 0;
        }
        return new sb.Vector(norm(this.x1), norm(this.x2));
    },

    isPracticallyZero: function() {
        return this.magnitude() < sb.Vector.PRACTICALLY_ZERO;
    },

    magnitude: function() {
        return Math.sqrt(this.x1*this.x1 + this.x2*this.x2);
    },

    perpendicular: function() {
        return new sb.Vector(this.x2, -1 * this.x1);
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