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
        //this.smorgList.move();
        this.smorgList.animate();
        this.smorgList.draw();
    } // update()

});