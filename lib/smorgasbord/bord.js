/**
 * @type smorgasbord.Bord
 * Base (document) class containing state of the world
 *
 * This class maintains an array of Smorg objects which are game elements
 * usually under the control of the physics engine + their own behaviours + sometimes user input
 * <p>
 * Example:
 * <code>
 * Borg = new smorgasbord.Bord();
 * </code>
 *
 */

var Bord = Object.subType({

    init:function() {
        console.log("I am a bord");
    },

    dance:function() {
        console.log("I am dancing");
    }
});