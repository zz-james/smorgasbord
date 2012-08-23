/**
 * @type sb.View
 * Base (view) class
 */

sb.View = Object.subType({

    _graphics:undefined,
    _viewPointSmorg:undefined,

    init:function(params) {
        // unpack properties
        for (var name in params) {
            if (params.hasOwnProperty(name)) {
                this[name] = params[name];
            }
        }
    }, // init()

    onUpdate:function(hint) {
      //  this.invalidate();    do not need, browser does this
      //  check the hint
      //  move this_viewPointSmorg()
        this.onDraw();

    },

    invalidate:function() {

    },

    onDraw:function() {
        //  garbage collection for unused sprites?
        // update anything graphical about the overall state of the game
        // install the projection and view matrices
        // draw the world background to foreground
        // draw the critters
        // page flip
        // this._graphics.draw()?
    }

});