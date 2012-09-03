sb.attrib = {

    game:
    {
        bord:sb.Bord2d,
        size:{_lox:0, _hix:640, _loy:0, _hiy:480}
    },

    player:
    {

    },

    smorgs:
    {
        blok:{type:sb.BlockSmorg, params:{x:250,y:400, _width:780, _height: 20, rotation: 10}},
        cog1:{type:sb.CogSmorg, params:{x:280,y:10}},
        cog2:{type:sb.CogSmorg, params:{x:270,y:60}},
        cog3:{type:sb.CogSmorg, params:{x:380,y:10}},
        cog4:{type:sb.CogSmorg, params:{x:460,y:20}}
    },

    graphics: sb.Dhtml

};