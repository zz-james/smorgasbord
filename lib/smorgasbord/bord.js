/**
 * @type sb.Bord
 * Base (bord) class containing state of the world
 */

sb.Bord = Object.subType({

    smorgList:undefined, // list of game objects

    init:function() {

        this.smorgList = new sb.SmorgList(this);

    }, // init()

    makeSmorgs:function(smorgs) {

        // smorgs from attributes sheet into the list
        for (var name in smorgs)
            new smorgs[name](this);

    } ,

    update:function() {
        this.smorgList.move();    // box 2d does this
        this.smorgList.animate();

    } // update()

});