/**
 * returns the requested listener to the smorg
 */

sb.ListenerFactory = function() {

    // Key input.
    keys = function () {
        var keyMap = {
                '37': 'left',
                '39': 'right',
                '32': 'fire'
            },
            kInfo = {
                'left': 0,
                'right': 0,
                'fire': 0
            },
            key,
            keyCheck = function (event) {
                key = '' + event.which;
                if (keyMap[key] !== undefined) {
                    kInfo[keyMap[key]] = event.type === 'keydown' ? 1 : 0;
                    return false;
                }
            };

        document.onkeydown = keyCheck;
        document.onkeyup = keyCheck;

        return kInfo; // use this
    }();

    return keys;
};

document.onclick = function(e) {

    // x-browser target
    e = e || window.event;
    var target = e.target || e.srcElement;

    alert(e.target.id);

    // x-browser prevent default action and cancel bubbling
    if(typeof e.preventDefault === 'function') {
        e.preventDefault();
        e.stopPropagation();
    } else {
        e.returnValue = false;
        e.cancelBubble = true;
    }


};

