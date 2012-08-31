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

    init:function(ownerview) {
       // this._super(ownerview._game);
        this.ownerview = ownerview;
        this.graphics = ownerview._graphics;

    },

    /**
     *
     * @param toViewerVector
     * @param lookatpointVector
     */
    setViewPoint:function(toViewerVector, lookatpointVector) {
      console.log('setting view point');

        // in 2d toViewerVector is always the z-axis, so in 2d it doesn't matter
        this.attitude = new sb.Matrix2d().setMatrixFromVectors(new sb.Vector(1.0, 0.0), new sb.Vector(0.0, 1.0), this.position);

        this.moveTo(lookatpointVector); // check into this vector multiplication!
        this.lookAt(lookatpointVector);
    },

    /**
     * lookAt determined the orientation of the viewerSmorg
     * this creates several temporary vectors and is a prime candidate for using pooling.
     * @param targetpos is a vector, this is to do with rotating 'wheeling' (curvilinear)
     */
    lookAt:function(targetpos)
    {
        console.log('aligning viewersmorg with view');

        newTangent = new sb.Vector().setFromVector(targetpos.diff(this.position));  // vector maths!
        //You can't look at this as it's on top of you. so bail making changes.
        if (newTangent.isPracticallyZero()) {return;}
        newTangent.normalize();

        //find perpendicular vector which points to the centre of the curve....
        newNormal = newTangent.perpendicular();
        newNormal.normalize();

        this.setAttitude(new sb.Matrix2d().setMatrixFromVectors(newTangent, newNormal, this.position));

    },


    setZoom:function(zoomFactor) { /*integer */
        if(!zoomFactor) {zoomFactor = 1.0;}

    },

    setTrackplayer:function(track) {
        console.log('tracking player is '+track);
    },

    loadProjectionMatrix:function() {
       // console.log('loading the projection matrix');
       /* graphics.matrixMode(cGraphics::PROJECTION);
        graphics.loadIdentity();
        graphics.perspective(fieldOfViewDegrees(), _aspect, _znear, _zfar);
        graphics.matrixMode(cGraphics::MODELVIEW);          */
    },

    loadViewMatrix:function() {
       //console.log('loading the view matrix');

       // viewmatrix = (cVector2::XAXIS, cVector2::YAXIS, position());
       // graphics.loadMatrix(viewmatrix.inverse());
    },


    draw:function() {
      //  console.log("don't draw me");
    },

    update:function() {
        this._super(this.ownerview);
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