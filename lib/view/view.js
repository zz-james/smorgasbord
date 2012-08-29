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
        console.log("I am the view");
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
        this._viewPointSmorg.animate();

        this.onDraw();

    },

    setGraphicsClass:function(graphicsClass) {
        this._graphics = new graphicsClass();
    },

    onDraw:function() {
        console.log('on draw in the view');
        // involve the _graphics object
        //  garbage collection for unused sprites?
        // update anything graphical about the overall state of the game
        // install the projection and view matrices
        // draw the world background to foreground
        // draw the critters
        // page flip

        //if (this._game.gameover()) { /* do something graphically*/}

        //Install the projection and view matrices.
        this._viewPointSmorg.loadProjectionMatrix(); // Initializes the PROJECTION matrix
        this._viewPointSmorg.loadViewMatrix(); //Initializes the MODELVIEW matrix
        this._smorgList.draw(this._graphics /*,_drawflags*/);     // use cached pointer
        this._graphics.display();
    }

});