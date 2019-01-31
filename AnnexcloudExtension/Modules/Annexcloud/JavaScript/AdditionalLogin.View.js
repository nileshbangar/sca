define('AdditionalLogin.View', [
    //'Profile.Model',
    'Backbone',
    'QuestionsAndAnswersModule.Model',
    'additional_login_view.tpl'
], function(
   // ProfileModel,
    Backbone,
    QuestionsAndAnswersModuleModel,
    additionalLoginViewTpl
) {
    return Backbone.View.extend({
        template: additionalLoginViewTpl,
        initialize: function(options) {
            var self = this;
          /*  this.pdp = options.pdp;
            this.listenTo(this.pdp, 'afterOptionSelection', function() { //PDP Component -
                self.render();
            });*/
            //this.profileModel = ProfileModel.getInstance();
            //profile is a singleton. NOTE: this is an SCA API, not officially supported by SuiteCommerce (Standard)
            //Future SC versions most likely will bring a Profile component.
            this.model = new QuestionsAndAnswersModuleModel();
        this.model.fetch({
           data:{
            "id": 'login'
          }
        }).done($.proxy(function(data){
        },this));
          this.model.on('change', this.render, this);
        //}
        },
        getContext: function() {
            //var profile = this.profileModel;
            //var pdtl = this.pdp.getItemInfo();
            return {
                siteId: this.model.attributes.siteId,
                handleloginURL: this.model.attributes.handleloginurl,
               /* templateId: this.model.attributes.templateId,  
                pageId: this.model.attributes.pageId,
                profileLight: JSON.stringify({name: profile.get('firstname'), lastname: profile.get('lastname'), email: profile.get('email')}),
                profileFull: JSON.stringify(profile.attributes),
                parentInfo: JSON.stringify(this.pdp.getItemInfo()),
                childInfo: JSON.stringify(this.pdp.getSelectedMatrixChilds()),
                AcProdName: pdtl['item']['itemid'],
                AcProdImg: pdtl['item']['itemimages_detail']['urls'][0]['url'],
                AcProdPrice: pdtl['item']['keyMapping_price'],
                AcProdId: pdtl['item']['internalid'], */

            };
        }
    })
});
