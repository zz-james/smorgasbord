/**
 * 2 dimensional graphics matrix class
 * OOP wise should probably subtype 2 and 3 dimensional matrix from base matrix
 * but kind of really not much point? code sharing minimal and not really for polymorphic use
 */

sb.Matrix2d = Object.subType({

    _mat: [[0,0],[0,0],[0,0]],

    init:function() {

    },

    setMatrixFromVectors:function(col0,  col1,  col2) {  // this takes 3 matrices.
        this._mat[0][0] = col0.x1;
        this._mat[1][0] = col0.x2;
        this._mat[2][0] = 0.0;

        this._mat[0][1] = col1.x1;
        this._mat[1][1] = col1.x2;
        this._mat[2][1] = 0.0;

        this._mat[0][2] = col2.x1;
        this._mat[1][2] = col2.x2;
        this._mat[2][2] = 1.0;

        return this;
    },

    setLastColumn:function(pos) {
        this._mat[0][2] = pos.x1;
        this._mat[1][2] = pos.x2;
    }


});