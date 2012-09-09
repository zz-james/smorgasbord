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
    },

    inverse:function() {
        return new sb.Vector(-1 * this.x, -1 * this.y);
    },

    /**
     * calculate vector dot product
     * @param {Array} vector [v0, v1]
     * @returns {Number} dot product of v1 and v2
     */
    dot:function(vector) {
        return this.x*vector[0]+this.y*vector[1];
    },

    /**
     * rotate vector
     * @param {Number} angle to rotate vector by, radians. can be negative
     * @returns {Array} rotated vector [v0, v1]
     */
    rotate:function(angle){
        angle=this.normaliseRadians(angle);
        return [this.x * Math.cos(angle)-this.y*Math.sin(angle), this.x* Math.sin(angle)+this.y*Math.cos(angle)];
    },

    normaliseRadians:function(radians){
        radians=radians % (2*Math.PI);
        if(radians<0)radians+=(2*Math.PI);
        return radians;
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