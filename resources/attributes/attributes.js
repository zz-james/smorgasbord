sb.attrib = {

    game:
    {
        bord:sb.Bord2d,
        size:{_lox:0, _hix:1000, _loy:0, _hiy:960},
        viewport:{_lox:0, _hix:640, _loy:0, _hiy:480}
    },

    player:
    {
        name:'cog',
        type:sb.CogSmorg,
        params:{x:40,y:100}
    },

    smorgs:
    {
        floor:{type:sb.BlockSmorg, params:{x:500,y:960, _width:1000, _height: 20, rotation: +0}},
        lwall:{type:sb.BlockSmorg, params:{x:10,y:480, _width:960, _height: 20, rotation: +90}},
        rwall:{type:sb.BlockSmorg, params:{x:990,y:480, _width:960, _height: 20, rotation: +90}},
        ramp1:{type:sb.BlockSmorg, params:{x:250,y:240, _width:800, _height: 20, rotation: +10}},
        ramp2:{type:sb.BlockSmorg, params:{x:550,y:500, _width:700, _height: 20, rotation: -10}},
        ramp3:{type:sb.BlockSmorg, params:{x:250,y:680, _width:800, _height: 20, rotation: +10}},
        blok4:{type:sb.BlockSmorg, params:{x:850,y:400, _width:20, _height: 20, rotation: 0}}
     //   cog2:{type:sb.CogSmorg, params:{x:350,y:60}},
        /*cog3:{type:sb.CogSmorg, params:{x:380,y:10}},
        cog4:{type:sb.CogSmorg, params:{x:460,y:20}}*/
    },

    graphics: sb.Dhtml

};