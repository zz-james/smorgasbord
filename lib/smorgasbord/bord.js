/**
 * @type sb.Bord
 * Base (bord) class containing state of the world
 */

sb.Bord = Object.subType({

    smorgList:undefined, // list of game objects
    player: undefined,
    border: undefined, // size of the world
    gameOver: false, // boolean
    wrapFlag: false,
    level: 1,
    _is3d: undefined,

    init:function(params) {
        this.smorgList = new sb.SmorgList(this);
        this.border = new sb.Box(params.size);
    }, // init()

    makeSmorgs:function(smorgs) {
        // smorgs from attributes sheet into the list
        for (var name in smorgs)
            new smorgs[name].type(this,smorgs[name].params);
    },

    initialiseView:function(view) {
        view.setGraphicsClass(sb.attrib.graphics);
    },

    initialiseViewpoint:function(viewPointSmorg) {
       // overridden
    },

    is3d:function() {
        return _is3d;
    },

    setBorder:function(dx, dy, dz) {
      if(dz = undefined) {dz=0.0;}
      this.border = new sb.Box({_lox:0, _hix:dx, _loy:0, _hiy:dy, _loz:0, _hiz:dz});
    },

    update:function() {
        // this is the view module loop
        // is game over?
        this.smorgList.feellistener();// update controller (input)
        this.smorgList.move();
        this.smorgList.update();
        // this.smorgList.processServiceRequests();
        this.smorgList.animate();

    } // update()

});