/**
 * base smorg classs
 */


_age  // number
_health     // number
_score         // number
_ownerlist   // smorglist object



// probably override all of these with box2d?
_position   // vector
_speed      // number
_velocity      // vector
_tangent
_acceleration    // number?
_mass           // number

//this helps us with aligning sprite with direction of motion....
_attitude //matrix
_attitudeMotionLock
_spin

_forcearray    //array
_listener     //lister behaviour object

_sprite      // sprite object?    - bitmap sprites, svg, polyvector (canvas)
_fixedLifeTime      // number
_useFixedLifeTime // bool

_moveBox // gives us boundaries to the world
_wrapflag // do we want wrapping or bouncing at the edges?
_maxspeed // the max speed (!)

_normal
_binormal // these 2 for when we go 3d

_target // smorg object - do we want the smorg to follow, shoot at etc. and particular smorg ?

init:function() {
    this._age = 0;
    this._health = 1;
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