
// -----------------------------------------------------------------------------
// smorgasbord Library 0.01
// http://catplusplus.org.uk//
// -----------------------------------------------------------------------------





// -----------------------------------------------------------------------------
// sb Namespace

(function(window){

    window.ig = {
        game: null,
        debug: null,
        version: '1.19',
        global: window,
        modules: {},
        resources: [],
        ready: false,
        baked: false,
        nocache: '',
        ua: {},
        lib: 'lib/',

        _current: null,
        _loadQueue: [],
        _waitForOnload: 0,

        $: function( selector ) {
            return selector.charAt(0) == '#'
                ? document.getElementById( selector.substr(1) )
                : document.getElementsByTagName( selector );
        },

        $new: function( name ) {
            return document.createElement( name );
        },

        module: function( name ) {
            if( ig._current ) {
                throw( "Module '"+ig._current.name+"' defines nothing" );
            }
            if( ig.modules[name] && ig.modules[name].body ) {
                throw( "Module '"+name+"' is already defined" );
            }

            ig._current = {name: name, requires: [], loaded: false, body: null};
            ig.modules[name] = ig._current;
            ig._loadQueue.push(ig._current);
            //ig._initDOMReady();
            return ig;
        },


        requires: function() {
            ig._current.requires = Array.prototype.slice.call(arguments);
            return ig;
        },

        defines: function( body ) {
            name = ig._current.name;
            ig._current.body = body;
            ig._current = null;
            ig._execModules();
        },

        _loadScript: function( name, requiredFrom ) {
            ig.modules[name] = {name: name, requires:[], loaded: false, body: null};
            ig._waitForOnload++;

            var path = ig.lib + name.replace(/\./g, '/') + '.js' + ig.nocache;
            var script = ig.$new('script');
            script.type = 'text/javascript';
            script.src = path;
            script.onload = function() {
                ig._waitForOnload--;
                ig._execModules();
            };
            script.onerror = function() {
                throw(
                    'Failed to load module '+name+' at ' + path + ' ' +
                        'required from ' + requiredFrom
                    );
            };
            ig.$('head')[0].appendChild(script);
        },


        _execModules: function() {
            var modulesLoaded = false;
            for( var i = 0; i < ig._loadQueue.length; i++ ) {
                var m = ig._loadQueue[i];
                var dependenciesLoaded = true;

                for( var j = 0; j < m.requires.length; j++ ) {
                    var name = m.requires[j];
                    if( !ig.modules[name] ) {
                        dependenciesLoaded = false;
                        ig._loadScript( name, m.name );
                    }
                    else if( !ig.modules[name].loaded ) {
                        dependenciesLoaded = false;
                    }
                }

                if( dependenciesLoaded && m.body ) {
                    ig._loadQueue.splice(i, 1);
                    m.loaded = true;
                    m.body();
                    modulesLoaded = true;
                    i--;
                }
            }

            if( modulesLoaded ) {
                ig._execModules();
            }

            // No modules executed, no more files to load but loadQueue not empty?
            // Must be some unresolved dependencies!
            else if( !ig.baked && ig._waitForOnload == 0 && ig._loadQueue.length != 0 ) {
                var unresolved = [];
                for( var i = 0; i < ig._loadQueue.length; i++ ) {

                    // Which dependencies aren't loaded?
                    var unloaded = [];
                    var requires = ig._loadQueue[i].requires;
                    for( var j = 0; j < requires.length; j++ ) {
                        var m = ig.modules[ requires[j] ];
                        if( !m || !m.loaded ) {
                            unloaded.push( requires[j] );
                        }
                    }
                    unresolved.push( ig._loadQueue[i].name + ' (requires: ' + unloaded.join(', ') + ')');
                }

                throw(
                    'Unresolved (circular?) dependencies. ' +
                        "Most likely there's a name/path mismatch for one of the listed modules:\n" +
                        unresolved.join('\n')
                    );
            }
        }

    }
})(window);



// -----------------------------------------------------------------------------
// The main() function creates the system, input, sound and game objects,
// creates a preloader and starts the run loop

ig.module(
    'impact.impact'
)
    .requires(
    'smorg.alert'
)
    .defines(function(){

        ig.main = function( canvasId, gameClass, fps, width, height, scale, loaderClass ) {
            var loader = new (loaderClass || ig.Loader)( gameClass, ig.resources );
            loader.load();
        };

    });