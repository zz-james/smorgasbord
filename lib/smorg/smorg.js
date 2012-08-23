/**
 * base smorg classs
 */

sb.Smorg = Object.subType({

    animate:function() {
        //overriden;
        //this.updateAttitude();

    },
    /*
    updateAttitude:function() {
        // match smorgs attitude to current motion matrix
        // if the smorg's attitudeMotionLock is true or
        // otherwise rotate the smorg's attitude by dt+_spin (from box 2d?)
        // leave the attitude alone if spin is zero
    }
    */
});
