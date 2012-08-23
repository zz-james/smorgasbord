/**
 * base smorg classs
 */


// #include GraphicsClass
// #include SmorgList
// #include Sprite
// #include Listener
// #include Force

// #include DistanceAndDirection ???
// #include View //used as argument to sniff
// #include Game // return type for getGame method
// #include Graphics // for draw method


/*

/* statics */
SAFEWAIT = 0.3;
STARTHEALTH = 1;
FIXEDLIFETIME =
STARTWRAPFLAG =
DENSITY =
MAXSPEED =
MINTWITCHSPEED =

/* state instance fields */
_age  // number
_health     // number

_fixedLifeTime      // number
_useFixedLifeTime // bool
_target // smorg object - do we want the smorg to follow, shoot at etc. and particular smorg ?

/* game fields */
_ownerlist   // smorglist object
_score         // number
_value // the value to another smorg

/* position fields */
_position   // vector
_moveBox // gives us boundaries to the world
_wrapflag // do we want wrapping or bouncing at the edges?
_outcode

/* velocity fields */
// probably override all of these with box2d?
_fixedflag // refuse to move
_speed      // number
_velocity      // vector
_tangent

_normal
_binormal // these 2 for when we go 3d
_minSpeed // the min speed
_maxSpeed // the max speed (!)


_acceleration    // number?
_mass           // number
_density


/* listener fields */
_forcearray    //array
_listener     //lister behaviour object

/* collision fields */
_colliderPriotity
_bouncyness
_mintwitchtriggerspeed  // stops flipping orientation graphic if barely moving one way / other

/* attitude and display fields */
_sprite      // sprite object?    - bitmap sprites, svg, polyvector (canvas)
// //this helps us with aligning sprite with direction of motion....
_attitude //matrix
_attitudeMotionLock
_spin


init:function(ownerGame) {
    this._ownerList = null;
    this._age = 0.0;
    this._lasthit_age = -SAFEWAIT;
    this._health = STARTHEALTH;
    this._usefixedlifetime = false;
    this._fixedLifeTime = FIXEDLIFETIME;
    this._shieldflag = false;
    this._outcode = 0;
    this._score = 0;
    this._newLevelScoreStep = 0;
    this._newLevelReward = 0;
    this._value = 1;
    this._wrapflag = STARTWRAPFLAG;
    this._density = DENSITY;
    this._mass = 1.0; // Dummy default is reset by fixMass
    this._colliderPriority = ?? ;

    this._attitudeMotionLock = true;
    this._spin = 0;
    this._maxSpeed = MAXSPEED;
    this._mintwitchtriggerspeed =  MINTWITCHSPEED;
    this._bounciness = 1;
    this._target = null;

    this._sprite = new Sprite(); // default sprite is a smiley
    this._listener = new Listener(); // always have a listener, the default does nothing
    this._attitude.setLastColumn(this._position);  // the default _attitude constructor sets matrix to identity matrix

    if(ownerGame) {
        ownerGame.add(this,TRUE); // this call will do stuff, the true flag means to insert the smorg into smorglist
    }


}



feelListener:function() {
    this._listener.listen(dt, this);
    /* pass in a pointer to this so that it can change the field
    of the calling smorg as required. the caller smorg's game() holds the
    controller object that stores all of the kets and mouse actions
    THAT SEEMS SHIT FOR JAVASCRIPT
     */
}

move:function(dt){
    this._age += dt;
    this._velocity += dt * this._accelleration;
    // check for maxumum velocity
    this._position += dt * this._velocity;
    // wrap, bounce or clamp position if on border
    // update _tangent, _normal, _binormal.
    // set smorgs outcode depending on which border it hit if any.

}

update:function(view)  //pass view so possible to override
    this.feelForce();
     if(this._useFixedLifeTime && this._age > this._fixedLifeTime)
     {
         this.dieOfOldAge();
     }
}

feelForce:function() {
    for (var i=0; i<this_forceArray.length; i++)
    {
        var forceSum += _forceArray.getAt(i)->force(this);
        this._acceleration = forceSum / this._mass;
    }
}

collide:function(){},


animate:function() {
    this.updateAttitude(dt);
    this._sprite.animate(dt,this)      ;
}


draw:function(graphics, drawflags){
    if(recentlyDamaged())
    {
        drawflags |= ???
    }
    graphics.pushMatrix();
    graphics.multMatrix(this._attitude);
    this._sprite.draw(graphics, drawflags);
    graphics.popMatrix();

}



reset:function(){},

touch:function(){},

die:function(){
    this.deleteMe();
},

dieOfOldAge:function(){}

damage:function(hitStrength){
    this._health -= hitStrength;
    if (this._health < 1) {
        this._die();
    }
},

 radius:function(){
     this._sprite.radius();
 }

destructor:function() {
    fixPointerRefs();
}

updateAttiture:function(dt) {
     this._attitude.setLastColumn(this._position)      ; // update position
    if(this._attitudeMotionLock)        {
        copyMotionMatrixToAttitudeMatrix();
    } else {
        rotateAttitude(dt * this._spin);
    }
}

*/