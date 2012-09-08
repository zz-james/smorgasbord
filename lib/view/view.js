/**
 * @type sb.View
 * Base (view) class
 */

sb.View = Object.subType({

    _graphics:undefined,
    _viewPointSmorg:undefined,
    _game:undefined, // pointer back to game
    _smorgList:undefined, // we cache a pointer to the smorglist locally

    init:function(params) {
        // unpack properties
        for (var name in params) {
            if (params.hasOwnProperty(name)) {
                this[name] = params[name];
            }
        }

        this._viewPointSmorg = new sb.ViewerSmorg(this);
        this._smorgList = this._game.smorgList;     // cache this
    }, // init()

    onUpdate:function(hint) {
        //  check the hint
        if (hint && hint === sb.VIEWHINT_STARTGAME)         // this seems like it would be slow
        {
            this._game.initialiseView(this);
            this._game.initialiseViewpoint(this._viewPointSmorg);
        }

        // this is the view module loop
        this._viewPointSmorg.feellistener();
        this._viewPointSmorg.move();
        this._viewPointSmorg.update();

        this.onDraw();
    },

    setGraphicsClass:function(graphicsClass) {
        this._graphics = new graphicsClass({_border:this._game.border});
        this._viewPointSmorg.setGraphicsClass(this._graphics);
    },

    onDraw:function() {

        //if (this._game.gameover()) { /* do something graphically*/}
        // this._graphics.clear();

        //Install the projection and view matrices.
        //this._viewPointSmorg.loadProjectionMatrix(); // Initializes the PROJECTION matrix (not using this!)
        this._viewPointSmorg.loadViewMatrix(); //Initializes the MODELVIEW matrix

        this._smorgList.draw(this._graphics /*,_drawflags*/);     // use cached pointer
    }

});