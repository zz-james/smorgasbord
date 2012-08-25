/**
 * cog smorg class
 * derived from Smorg base type
 */

sb.CogSmorg = sb.Smorg.subType({

    images: 'resources/images/cogs.png',
    width: 64,
    height: 64,
    imagesWidth: 256,
    $drawTarget: $('#draw-target'),

    sprite:undefined,
    body:undefined,
    world:undefined,
    ownerGame:undefined,
    _ownerList:undefined,

    init:function(ownerGame) {

        this.ownerGame = ownerGame;
        this._ownerList = ownerGame.smorgList;
        this.world = ownerGame.world;

        var bodyDef = ownerGame.bodyDef;
        var fixDef = ownerGame.fixDef;

        //add to smorglist
        this._ownerList.add(this);

        // create sprite
        this.sprite = new sb.SpriteLoop({
            images: 'resources/images/cogs.png',
            imagesWidth: 256,
            width: 64,
            height: 64,
            $drawTarget: $('#draw-target')});

        //this.body = new physicsPinCircle()

        bodyDef.type = Box2D.Dynamics.b2Body.b2_dynamicBody;  // the type is dynamic
        fixDef.shape = new Box2D.Collision.Shapes.b2CircleShape( 28 / this.SCALE ); // the shape is a circle
        bodyDef.position.x = (Math.random()*500)/sb.SCALE;
        bodyDef.position.y = (Math.random()*50)/sb.SCALE;
        this.body = this.world.CreateBody(bodyDef).CreateFixture(fixDef);   // creates the object in the world
    },

    draw:function() {
        var pos =  this.body.GetBody().GetPosition();
        var scale =  sb.SCALE;

        this.sprite.draw(pos.x * scale , pos.y * scale);
    }
});
