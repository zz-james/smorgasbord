/**
 * base smorg classs
 */

sb.Smorg = Object.subType({

    ownerGame:undefined,
    ownerList:undefined,
    sprite:undefined,
    attitude:new sb.Matrix2d(), // default constructor sets to identity matrix
    attitudetomotionlock:false,
    position:new sb.Vector(0,0), //(x,y)
    x:undefined, y:undefined, //only used in initialising positions

    init:function(ownerGame, params) {
        //add to smorglist
        this.ownerGame = ownerGame;
        this.ownerList = ownerGame.smorgList;
        this.ownerList.add(this);

        for (var name in params) {
            if (params.hasOwnProperty(name)) {
                this[name] = params[name];
            }
        }
    },

    feellistener:function() {

    },

    feelForce:function() {

    },

    animate:function() {
        this.updateAttitude();
        this.sprite.animate(this);
    },

    move:function() {

    },

    update:function() {
        this.feelForce();
    },

    setAttitude:function() {

    },

    draw:function(graphics) {
        /*if (recentlyDamaged())
            drawflags |= CPopView::DF_WIREFRAME;  */
        graphics.pushMatrix();
        graphics.multMatrix(this.attitude);
        this.sprite.draw(graphics);
        graphics.popMatrix();
    },

    updateAttitude:function() {
        // match smorgs attitude to current motion matrix
        // if the smorg's attitudeMotionLock is true or
        // otherwise rotate the smorg's attitude by dt+_spin (from box 2d?)
        // leave the attitude alone if spin is zero
        {
            this.attitude.setLastColumn(this.position); //always update position.
          //  if (_attitudetomotionlock)
          //      copyMotionMatrixToAttitudeMatrix();
          //  else //_attitudetomotionlock is FALSE
           //  rotateAttitude(spin);
        }
    }

});
