/**
 * @type smorgasbord.Bord 2d
 * Derived (bord) class containing state of the world
 *
 * Subclass of bord that uses box 2d physics engine, for 2d games only
 *
 */

sb.Bord2d = sb.Bord.subType({

        world:undefined;

        init:function() {

        }, // init()


        update:function() {
            this.world.Step(
                1 / 60   //frame-rate
                ,  10       //velocity iterations
                ,  10       //position iterations
            );

            this.jimmy.draw();

            this.world.ClearForces();
        } // update()

    });
