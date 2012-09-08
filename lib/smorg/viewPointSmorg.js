/**
 * viewer smorg class
 * derived from Smorg base type
 * at the moment it is only 2D
 * viewer smorg is not normally under control of the physics engine
 * but can be pinned to a smorg that is
 */

sb.ViewerSmorg = sb.Smorg.subType({

    ownerview:undefined,
    ownerGame:undefined,
    graphics:undefined,
    rotation:undefined,
    targetpos:undefined,
    _translation:undefined,
    trackPlayer:false, // boolean tracking player true if tracking player
    trackee:undefined, // pointer to the smorg being tracked
    xoff:undefined, // offset from top left of smorg being tracked.
    yoff:undefined,

    init:function(ownerview) {
       // this._super(ownerview._game);
        this.ownerview = ownerview;
        this.ownerGame = ownerview._game;
        this.ownerList = this.ownerGame.smorgList;
        this.trackee = this.ownerGame.border.centre(); // at first trackee has the same x,y as this.
    },


    setGraphicsClass:function(graphics) {
        this.graphics = graphics;
    },

    /**
     * @param toViewerVector
     * @param lookatpointVector
     */
    setViewPoint:function(lookatpointVector) {

       // initialised to looking at the centre.
        this.position = lookatpointVector;
        // in 2d toViewerVector is always the z-axis, so in 2d it doesn't matter
        // not using matix representation for now.
        //this.attitude = new sb.Matrix2d().setMatrixFromVectors(new sb.Vector(1.0, 0.0), new sb.Vector(0.0, 1.0), this.position);
        // so nothing to do here except pass this to the lookAt method.

        this.lookAt(lookatpointVector);

    },

    /**
     * lookAt determined the orientation of the viewerSmorg
     * this creates several temporary vectors and is a prime candidate for using pooling.
     * @param targetpos is a vector, this is to do with rotating 'wheeling' (curvilinear)
     */
    lookAt:function(targetpos)
    {
        this.targetpos = targetpos;
        this._translation = this.position.inverse();  // vector maths!

        //You don't need to do anything if it's on top of you. so bail making changes.
       // if (this._translation.isPracticallyZero()) {return;}
        this.loadViewMatrix();
    },

    setZoom:function(zoomFactor) { /*integer */
        if(!zoomFactor) {zoomFactor = 1.0;}

    },

    setTrackplayer:function(track) {
        if(track)
        {
            this.trackee = this.ownerList.findPlayer();
            this.xoff = this.trackee._width / sb.SCALE;
            this.yoff = this.trackee._height / sb.SCALE;
            this.trackPlayer = true;
        } else {
            this.trackPlayer = false;
        }
    },

    loadProjectionMatrix:function() {
        console.log('loading the projection matrix');
       /* graphics.matrixMode(cGraphics::PROJECTION);
        graphics.loadIdentity();
        graphics.perspective(fieldOfViewDegrees(), _aspect, _znear, _zfar);
        graphics.matrixMode(cGraphics::MODELVIEW);          */
    },

    loadViewMatrix:function() {
       var viewmatrix = this._translation;
       this.graphics.loadMatrix(viewmatrix);
    },

   draw:function() {
      //  console.log("don't draw me");
    },

    feellistener:function() {

    },


    update:function() {
        this._super(this.ownerview);
        if(!this.trackPlayer){return;}

        var trackeepos = this.trackee.position;


        this.position.init((trackeepos.x) * sb.SCALE,(trackeepos.y) * sb.SCALE); // directly sets position vector without making a new vec
        this.lookAt(this.targetpos);
        /*
         if (_trackplayer && pgame()->visibleplayer() &&
         !(plistener() && plistener()->GetRuntimeClass() == RUNTIME_CLASS(cListenerViewerRide)))
         */
        /* The meaning of the visibleplayer() condition is that it doesn't make sense
         to track the player if it's not an onscreen player. The reason for the
         listener condition is that you don't want to stare at the player when
         riding it. */

    }

});