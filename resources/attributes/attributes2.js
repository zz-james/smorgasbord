sb.attrib = {

    game:
    {
        bord:sb.CarBord,
        size:{_lox:0, _hix:600, _loy:0, _hiy:400},
        viewport:{_lox:0, _hix:600, _loy:0, _hiy:400}
    },

    player:
    {
        name:'car',
        type:sb.CarSmorg,
        params:{x:200,y:200}
    },

    smorgs:
    {
        roof:{type:sb.BlockSmorg, params:{x:300,y:10, _width:600, _height: 20, rotation: +0}},
        floor:{type:sb.BlockSmorg, params:{x:300,y:390, _width:600, _height: 20, rotation: +0}},
        lwall:{type:sb.BlockSmorg, params:{x:10,y:200, _width:600, _height: 20, rotation: +90}},
        rwall:{type:sb.BlockSmorg, params:{x:590,y:200, _width:960, _height: 20, rotation: +90}},
        cog2:{type:sb.CogSmorg, params:{x:350,y:60}},
        cog3:{type:sb.CogSmorg, params:{x:60,y:250}}
    },

    graphics: sb.Dhtml

};