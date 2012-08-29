/**
 * @type 2d
 *
 *
 * view class for 2d games
 *
 */

game : undefined;
viewPointSmorg : undefined;
graphics : undefined;

init : function(game, vps) {
    this.pGame = game;
    this.pViewPointSmorg = vps;
}


onUpdate:function(document, lHint, pHint) {
    if(lHint === document.VIEWHINT_STARTGAME) {
        game.initialiseView(this);
        game.initialiseViewPoint(this._viewPointSmorg);
      //  pGraphics.anykindoflightingmodel(???);      3d only
        // and now go on to call invalidate to show the game
    }
}

setGraphicsClass:function() {

}

onDraw:function() {
    // use viewPointSmorg's zoom and perspective to set projection method used by graphics object
    // use viewPointSmorg's position and orientation to set the view matrix used by graphics object
    // use the graphics to draw the world and the smorgs as seen by the viewpoint smorg
}

is3d:function() {
    return false;
}