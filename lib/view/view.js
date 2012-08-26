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

        //  move this._viewPointSmorg()
        this._viewPointSmorg.feellistener();
        this._viewPointSmorg.update();
        this._viewPointSmorg.animate();

        this.onDraw();

    },


    onDraw:function() {
        // involve the _graphics object
        //  garbage collection for unused sprites?
        // update anything graphical about the overall state of the game
        // install the projection and view matrices
        // draw the world background to foreground
        // draw the critters
        // page flip

        if (this._game.gameover()) { /* do something graphically*/}

        //Install the projection and view matrices.
        this._viewPointSmorg.loadProjectionMatrix(); // Initializes the PROJECTION matrix
        this._viewPointSmorg.loadViewMatrix(); //Initializes the MODELVIEW matrix
        this._smorgList.draw(_graphics, _drawflags);     // use cached pointer
        this._graphics.display();
    }

});