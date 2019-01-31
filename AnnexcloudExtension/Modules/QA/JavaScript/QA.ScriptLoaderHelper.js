define('QA.ScriptLoaderHelper', [
    'Backbone',
    'jQuery',
    'underscore'
], function(
    Backbone,
    jQuery,
    _
) {

    var scriptURL = 'https://s23.socialannex.com/v4/js/s23-main-curl.js';

    return _.extend({
        scriptLoaded: false,
        loadedPromise: jQuery.Deferred(),
        loadScript: function loadScript() {
            var self = this;

            if (self.scriptLoaded) return;

            window.s23AsyncInit = function() {
                self.loadedPromise.resolve();
            };
            jQuery.getScript(scriptURL).done(function() {
                self.scriptLoaded = true;
            });
            return this.loadedPromise;
        }
    }, Backbone.Events);
});
