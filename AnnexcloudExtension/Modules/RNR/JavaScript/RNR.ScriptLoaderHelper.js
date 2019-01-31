define('RNR.ScriptLoaderHelper', [
    'Backbone',
    'jQuery',
    'underscore'
], function(
    Backbone,
    jQuery,
    _
) {

    var scriptURL = 'https://cdn.socialannex.com/partner/{siteId}/s28-main.js';

    return _.extend({
        scriptLoaded: false,
        loadedPromise: jQuery.Deferred(),
        loadScript: function loadScript(siteId) {
            var self = this;

            if (self.scriptLoaded) return;

            // TODO: Review define.amd = false / true
            define.amd = false;
            jQuery.getScript(scriptURL.replace('{siteId}',siteId)).done(function() {
                define.amd = true;
                self.scriptLoaded = true;
                self.loadedPromise.resolve();
            });
            return this.loadedPromise;
        }
    }, Backbone.Events);
});
