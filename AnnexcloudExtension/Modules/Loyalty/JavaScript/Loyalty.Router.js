define('Loyalty.Router', [
    'Loyalty.View',
    'Backbone'
], function(
    LoyaltyView,
    Backbone
) {
    'use strict';
    return Backbone.Router.extend({
		
        routes: {
            'loyalty': 'showLoyalty'
        },
        initialize: function(application) {
            this.application = application;
        },
        showLoyalty: function() {
            var view = new LoyaltyView({
                application: this.application
            });
            view.showContent();
        }
    });
});
