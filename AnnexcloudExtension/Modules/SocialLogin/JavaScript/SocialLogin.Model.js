define('SocialLogin.Model', [
    'Backbone'
],function(
    Backbone
) {
    return Backbone.Model.extend({
        sync: function(method, collection, options) {
            var beforeSend = options.beforeSend;
            options.beforeSend = function(xhr) {
                if (beforeSend) return beforeSend.apply(this, arguments);
                xhr.setRequestHeader('X-SC-Touchpoint', undefined);
            };
            return Backbone.Model.prototype.sync.apply(this, arguments);
        }
    });
});
