define('Rewardcode.Model', [
    'Backbone'
],function(
    Backbone
) {
    return Backbone.Model.extend({
        urlRoot:'https://s15.socialannex.com/v2_api/sa_apiv2_redeem_points.php',
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