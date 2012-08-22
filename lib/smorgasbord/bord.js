/**
 * @type smorgasbord.Bord
 * Base (bord) class containing state of the world
 *
 * This class maintains an array of Smorg objects which are game elements
 *
 * <p>
 * Example:
 * <code>
 * Borg = new sb.Bord();
 * </code>
 *
 */

sb.Bord = Object.subType({

    _smorgCount:undefined,
    _gameOver:undefined,
    _maxScore:undefined,
    _scoreCorrection:undefined,
    _border:undefined,          // defines boundaries of the world
    _wrapFlag:undefined,
    _level:undefined,
    _newGame:undefined,
    _smorgs:undefined,
    _collider:undefined,
    _controller:undefined,
    _player:undefined,

    /**
     * init - constructor function
     *
     * @param params.size - width and height of game world in pixels
     * @param params.background - any bitmap used as background
     * @param params.wrapped  - whether game is wrapped or has edges
     * @param params.player  - what class is the player smorg
     * @param params.permanent  - what 'permanent' smorgs are there?
     */
    init:function(params) {
        console.log("I am a bord");
        this._smorgCount = 0;
        this._gameOver = false;
        this._maxScore = 100;
        this._scoreCorrection =0;
        this._wrapFlag = params.wrapped;
        this._level = 1;
        this._newGame = true;

        _smorgs = new sb.SmorgList(this);        // what is the smorglist class? a container!!
        //_collider = new Collider();
        //_controller = new Controller(); /* this is a structure to hold key and mouse info */

        // initialise the player
        this.setPlayer(new playerSmorg(this));
    },

    /**
     * seeds the game smorgs
     * @param temporary  - what temporary smorgs there is
     * @param arrangement - the arrangement of the smorgs
     */
    makeSmorgs:function(temporary, arrangement) {
        console.log("make smorgs");

        for(var i = 0; i < this._smorgCount; i++)
        {
           new Smorg(this);   // - passing in this automagically adds it to the SmorgList
        }
    },

    /**
     * gets called once per game update (from within step() method)
     * by default it does nothing
     */
    adjustGameParameters:function() {
        console.log('adjust game parameters');

        // end the game if the player is dead
        if(!this.health() && !this._gameOver ) {
            // player is dead and game is not over
            this._gameOver = true;
            this.player().addScore(_scoreCorrection);
            // play sounds();
            return;
        }

        // may call makeSmorgs() to reseed the screen?
        var otherCritterCount = (_smorgs.count(/*need introspection*/smorgs) - _smorgs.count(smorg_projectile)) - 1;
        if(!otherCritterCount) {
            this.makeSmorgs(null, null);
        }
    },

    initialiseView:function(view) {
        console.log('initialiseView');
        view.setGraphicsClass('dhtmlSprites');
        view.viewPointSmorg().setTrackPlayer(true); // track player


    },

    initialiseViewpoint:function(_viewPointSmorg) {
        console.log('initialiseViewPoint');
        /* the two args to setViewPoint are directionToViewer and lookAtPoint
        note that direction to viewer looks from the origin towards the viewer
         */
        if(_viewPointSmorg.is3d) {
            _viewPointSmorg.setViewPoint(new Vector(0.0,-1.0,2.0));
        } else {
            _viewPointSmorg.setViewPoint(new Vector(ZAXIS));
        }
    },

    statusMessage:function() {
        console.log('status message');
    },

    reset:function() {
        console.log('reset');
        // call makeSmorgs()
        // reset health
        // reset level
        // reset score
    }

    /*
    makeSmorgs()           // seedCritters()
    smorgs[]:smorg;      // biota container class
    smorg:player        // distinguished player smorg
    box:border // size of the world/game
    wrapflag // what to do at edges, WRAP/BOUNCE/CLAMP -> just there to set default on in smorgs

    _seedcount // specifies how many critters to seed with
    _maxscrore // determined when the game is over
    _bord:score() // accessor to return player score

    ---- the collection class cCollider _pcollider holds pairs of smorgs for collision
     */

      /* the step cycle */
    /*
    step(real dt); - > controls animation
        1. adjust game params - game over? need to reseed? change levels?
        2. listen - pass recent user input to the critter feellistener methods (usually to player critter)
                    controllers may have put event into cController _pcontroller member
                    for any interested critters
        3. move - call the critters move methods to keep physics working  // not used in box2d
        4. update - let critters react to their new environment
                     - look at feelforce in the p_forcearray
                     - maybe delete itelf
                     - maybe sporn a projectile.
        5. collide - cgeck and compute collisioons   - each pair of touching critters // not used in box2d
                    - but have to decide what to do about the collisioni here
        6. clean up - remove any critters that died add new ones that are requested
                    - processServiceRequest()
        7. animate - possible animate the sprites (flip book, rotate, morph)


     */
     /*
     draw - after each step smorgs get drawn to the active view
      */






});