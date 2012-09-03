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

    init:function(ownerview) {
       // this._super(ownerview._game);
        this.ownerview = ownerview;
        this.ownerGame = ownerview._game;
    },


    setGraphicsClass:function(graphics) {
        this.graphics = graphics;
    },

    /**
     *
     * @param toViewerVector
     * @param lookatpointVector
     */
    setViewPoint:function(lookatpointVector) {
       // initialised to looking at the centre.
        this.position = this.ownerGame.border.centre();
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
        this._translation = new sb.Vector().setFromVector(targetpos.diff(this.position));  // vector maths!

        //You don't need to do anything if it's on top of you. so bail making changes.
        if (this._translation.isPracticallyZero()) {return;}
        this.loadViewMatrix();
    },

    setZoom:function(zoomFactor) { /*integer */
        if(!zoomFactor) {zoomFactor = 1.0;}

    },

    setTrackplayer:function(track) {
        console.log('tracking player is '+track);
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


    moveTo:function(x,y) {
        this.position.init(x,y);
        this.lookAt(this.targetpos);
    },

    draw:function() {
      //  console.log("don't draw me");
    },

    update:function() {
        this._super(this.ownerview);

       // var x = this.position.x + 1;
       // var y = this.position.y + 1;

      //  this.moveTo(x,y);
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