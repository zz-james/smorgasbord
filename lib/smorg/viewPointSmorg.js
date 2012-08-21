setViewPoint:function(toViewerVector, lookatpointVector) {
    // in 2d toViewer is always the z-axis
    moveTo(lookatpointVector * seethewholeworld * toViewerVector );
    lookAt(lookatpointVector);
}

zoom(zoomFactor /*integer*/) {

}