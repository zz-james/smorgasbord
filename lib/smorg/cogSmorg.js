/**
 * cog smorg class
 * derived from Smorg base type
 */

sb.CogSmorg = sb.Smorg.subType({

    _image: 'resources/images/cogs.png',
    _width: 64,
    _height: 64,
    drawTarget: document.getElementById('draw-target'),

    sprite:undefined,
    body:undefined,
    world:undefined,


    init:function(ownerGame) {

        this._super(ownerGame);
        this.world = ownerGame.world;
        var bodyDef = ownerGame.bodyDef;
        var fixDef = ownerGame.fixDef;

        // create sprite
        this.sprite = new sb.SpriteIcon({
            _image: this._image,
            _width: this._width,
            _height: this._height,
            _drawTarget: this.drawTarget});

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
