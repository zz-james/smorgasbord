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



_forcearray    //array
_plistener     //lister behaviour object
_attitude //matrix
_sprite      // sprite object?
_fixedLifeTime      // number
_useFixedLifeTime // bool

_moveBox // gives us boundaries to the world

init:function() {
    this._age = 0;
    this._health = 1;
}

move:function(dt){
    this._age += dt;
}

reset:function(){},

touch:function(){},

collide:function(){},

die:function(){},

damage:function(){},


