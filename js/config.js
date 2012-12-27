//Used to set constants
var CONFIG = (function() {
     var private = {
         'INIT_GAME': 1,
         'RUN_GAME': 2
     };

     return {
        get: function(name) { return private[name]; }
    };
})();