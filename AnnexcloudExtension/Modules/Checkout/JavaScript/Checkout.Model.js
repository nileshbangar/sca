define('Checkout.Model', [
    'Backbone'
],function(
    Backbone
) {
    return Backbone.Model.extend({
        urlRoot:'https://s15.socialannex.net/apiv2/reward',
        sync: function(method, collection, options) {
			options = options || {};
            if (options.url === undefined) {
                options.url = this.urlRoot+"/"+options.siteId+"/"+options.emailId+"?access_token="+options.accesstoken;
            }
           var beforeSend = options.beforeSend;
            options.beforeSend = function(xhr) {
                if (beforeSend) return beforeSend.apply(this, arguments);
                xhr.setRequestHeader('X-SC-Touchpoint', undefined);
            };
            return Backbone.Model.prototype.sync.apply(this, arguments);
        }

});
});