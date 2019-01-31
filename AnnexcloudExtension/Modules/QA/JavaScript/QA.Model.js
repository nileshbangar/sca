define('QA.Model', [
    'Backbone'
],function(
    Backbone
) {
    return Backbone.Model.extend({
        urlRoot: 'https://s23.socialannex.com/v4/process/get_data_curl.php',
        sync: function(method, collection, options) {
            options.dataType = 'html';
            var beforeSend = options.beforeSend;
            options.beforeSend = function(xhr) {
                if (beforeSend) return beforeSend.apply(this, arguments);
                xhr.setRequestHeader('X-SC-Touchpoint', undefined);
            };
            return Backbone.Model.prototype.sync.apply(this, arguments);
        },
        parse: function parse(data) {
            return { html: data };
        }
    });
});
