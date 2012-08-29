/**
 * viewer smorg class
 * derived from Smorg base type
 */

sb.ViewerSmorg = sb.Smorg.subType({

    ownerview:undefined,
    ownerGame:undefined,
    graphics:undefined,

    attitude:undefined,
    position:undefined,

    init:function(ownerview) {
        this.ownerview = ownerview;
        this.graphics = ownerview._graphics;
    },



    setViewPoint:function(toViewerVector, lookatpointVector) {
        // in 2d toViewer is always the z-axis
      //  attitude = cMatrix(cVector2(1.0, 0.0), cVector2(0.0, 1.0), position);
        var seethewholeworld = 1;
        this.moveTo(lookatpointVector * seethewholeworld * toViewerVector ); // check into this vector multiplication!
        this.lookAt(lookatpointVector);
    },

    moveTo:function(pos) {
      console.log('moving viewpoint smorg');
    },

    lookAt:function(vec) {
      console.log('aligning viewersmorg with view');
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
       console.log('loading the view matrix');

       // viewmatrix = (cVector2::XAXIS, cVector2::YAXIS, position());
       // graphics.loadMatrix(viewmatrix.inverse());
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