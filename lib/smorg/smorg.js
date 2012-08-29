/**
 * base smorg classs
 */

sb.Smorg = Object.subType({

    ownerGame:undefined,
    _ownerList:undefined,

    init:function(ownerGame) {
        //add to smorglist
        this.ownerGame = ownerGame;
        this._ownerList = ownerGame.smorgList;
        this._ownerList.add(this);
    },

    feellistener:function() {

    },

    animate:function() {
        //overriden;


    },

    move:function() {

    },

    update:function() {

    }
    /*
    updateAttitude:function() {
        // match smorgs attitude to current motion matrix
        // if the smorg's attitudeMotionLock is true or
        // otherwise rotate the smorg's attitude by dt+_spin (from box 2d?)
        // leave the attitude alone if spin is zero
    }
    */
});
