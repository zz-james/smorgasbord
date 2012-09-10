sb.attrib = {

    game:
    {
        bord:sb.Bord2d2,
        size:{_lox:0, _hix:600, _loy:0, _hiy:400},
        viewport:{_lox:0, _hix:600, _loy:0, _hiy:400}
    },

    player:
    {
        name:'rmonkey',
        type:sb.MonkeySmorg,
        params:{x:450,y:-250,density:20}
    },

    smorgs:
    {
        lmonkey:{type:sb.MonkeySmorg,params:{x:150,y:280,density:10}},
        floor:{type:sb.BlockSmorg, params:{x:300,y:390, _width:600, _height: 20, rotation: +0}},
        lwall:{type:sb.BlockSmorg, params:{x:10,y:200, _width:600, _height: 20, rotation: +90}},
        rwall:{type:sb.BlockSmorg, params:{x:590,y:200, _width:960, _height: 20, rotation: +90}},
        seesaw:{type:sb.SeeSawSmorg, params:{x:300,y:355, _width:400, _height: 20, rotation: +0}}
    },

    graphics: sb.Dhtml

};