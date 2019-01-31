define('RNR.Model', [
    'Backbone'
],function(
    Backbone
) {
    return Backbone.Model.extend({
        urlRoot: 'https://s28.socialannex.com/v2.0/review/getReviews',
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
