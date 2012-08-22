/**
 * base smorg classs
 */

sb.Smorg = Object.subType({
    SCALE:30,
    images: 'resources/images/cogs.png',
    width: 64,
    height: 64,
    imagesWidth: 256,
    $drawTarget: $('#draw-target'),

    sprite:undefined,
    body:undefined,
    world:undefined,

    init:function(world, bodyDef, fixDef) {

        //add to smorglist



        this.world = world;

        // create sprite
        this.sprite = DHTMLSprite({
            images: 'resources/images/cogs.png',
            imagesWidth: 256,
            width: 64,
            height: 64,
            $drawTarget: $('#draw-target')});
        this.sprite.changeImage(2);


        //this.body = new physicsPinObject()

        bodyDef.type = Box2D.Dynamics.b2Body.b2_dynamicBody;  // the type is dynamic
        fixDef.shape = new Box2D.Collision.Shapes.b2CircleShape( 28 / this.SCALE ); // the shape is a circle
        bodyDef.position.x = (Math.random()*500)/this.SCALE;
        bodyDef.position.y = (Math.random()*50)/this.SCALE;
        this.body = this.world.CreateBody(bodyDef).CreateFixture(fixDef);   // creates the object in the world
    },

    draw:function() {
        var pos =  this.body.GetBody().GetPosition();
        var scale =  this.SCALE

        this.sprite.draw(pos.x * scale , pos.y * scale);
    }
});
