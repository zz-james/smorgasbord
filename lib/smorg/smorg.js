/**
 * base smorg classs
 */

sb.Smorg = Object.subType({

    ownerGame:undefined,
    _ownerList:undefined,
    sprite:undefined,
    _position:undefined,
    _attitudetoMotionLock:true, /* Bool: Shall I lock together the display sprite and
        the motion? By default the player has _attitudetomotionlock
        FALSE and all other critters have it TRUE. */
    _attitude:undefined, /* Matrix: The attitude expresses the way that the critter
        is situated for rendering.  When _attitudetomotionlock is
        TRUE, _attitude has the columns	_tangent, _normal, _binormal, _position.
        If _attitudetomotionlock is FALSE, _attitude can be instead controlled by
        _spin or by the _plistener actions. The _attitude transformation rotates
        to match the standard ijk trihedron to the critter's _tangent-_normal-
         _binormal trihedron, then translates the origin to _position. */
    _spin:undefined, /* Number: _spin holds the spinangle in radians per second and
        the spinaxis which is the axis to spin around (z by default).  Presently
        used only when _attitudetomotionlock is OFF. */

    _tangent:undefined, /* Vector: We always keep _velocity = _speed * _tangent.  It's
        useful to have _tangent around even when _speed goes to 0 and _velocity
        is zero, this way we know what direction to start back up in. */

    _normal:undefined, /* We maintain a _normal vector to fully
        express the	motion of the critter */

    // these two not used with box2D but in there for cases when not using it. (e.g. viewerSmorg)
    _acceleration:undefined,
    _velocity:undefined, /* just tangent * speed */
    _speed: undefined,

    init:function(ownerGame) {

        this._position = new sb.Vector().setFromArray(sb.Vector.ZEROVECTOR);
        this._velocity = new sb.Vector().setFromArray(sb.Vector.ZEROVECTOR);

        this._speed = 0.0; //Must match _velocity.magnitude().
        this._tangent = new sb.Vector(1.0, 0.0); //We always want some unit vector _tangent.
        this._normal = new sb.Vector(0.0, 1.0); // orthagonal to tangent (curvelinear)
        this._acceleration = new sb.Vector().setFromArray(sb.Vector.ZEROVECTOR);


        // _listeneracceleration(cCritter::LISTENERACCELERATION),
        //this_spin(); //_spin is initialized to 0 spinangle around ZAXIS by default constructor



        //add to smorglist
        this.ownerGame = ownerGame;
        this._ownerList = ownerGame.smorgList;
        this._ownerList.add(this);
    },

    feellistener:function() {
        console.log('feeling listener');
    },

    animate:function() {
        //overriden;


    },

    moveTo:function(newpos) {
        this._position = newpos;
        console.log('moving smorg');
        this._attitude.setLastColumn(this._position);
    },

    move:function() {

    },

    update:function() {

    },

    draw:function() {
        console.log('drawing smorg');
    },

    // position and attitude accessors
    attitudeTangent:function() {return this._attitude.column(0);},
    attitudeNormal:function() {return this._attitude.column(1);},

    // position and attiture setters
    setAttitudeTangent:function() {

    },




    setAttitude:function(attitude) //Change tan, norm, but NOT position.
    {
        this._attitude = attitude;
        this._attitude.setLastColumn(_position); /* Don't use the last column of the attitude argument. */

        if 	(_attitudetomotionlock)
        {
            this._tangent = this.attitudeTangent();
            this._velocity = this._speed * this._tangent;
            this._normal = this.attitudeNormal();
        }
    }




    /*
    updateAttitude:function() {
        // match smorgs attitude to current motion matrix
        // if the smorg's attitudeMotionLock is true or
        // otherwise rotate the smorg's attitude by dt+_spin (from box 2d?)
        // leave the attitude alone if spin is zero
    }
    */
});
