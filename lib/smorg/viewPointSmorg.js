/**
 * viewer smorg class
 * derived from Smorg base type
 */

sb.ViewerSmorg = sb.Smorg.subType({

    setViewPoint:function(toViewerVector, lookatpointVector) {
        // in 2d toViewer is always the z-axis
        moveTo(lookatpointVector * seethewholeworld * toViewerVector );
        lookAt(lookatpointVector);
    },

    zoom:function(zoomFactor) { /*integer */

    },

    loadProjectionMatrix:function() {

    },

    loadViewMatrix:function() {

    }
});