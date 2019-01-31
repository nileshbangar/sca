define('AdditionalMyAccount.View', [
    'Backbone',
    'QuestionsAndAnswersModule.Model',
    'Profile.Model',
    'additional_myaccount_view.tpl'
], function(
    Backbone,
    QuestionsAndAnswersModuleModel,
    ProfileModel,
    additionalMyAccountViewTpl
) {
    return Backbone.View.extend({
        template: additionalMyAccountViewTpl,
        initialize: function(options) {
            var self = this;
            this.profileModel = ProfileModel.getInstance();
            this.model = new QuestionsAndAnswersModuleModel();
        this.model.fetch({
           data:{
            "id": 'myaccount'
          }
        }).done($.proxy(function(data){
        },this));
          this.model.on('change', this.render, this);
        //}
        },
        getContext: function() {
            var profile = this.profileModel;
            //var pdtl = this.pdp.getItemInfo();
            return {
                siteId: this.model.attributes.siteId,
               email: profile.get('email'),
               accesstoken: this.model.attributes.accesstoken, 
               // profileLight: JSON.stringify({name: profile.get('firstname'), lastname: profile.get('lastname'), email: profile.get('email')}),

               // pageId: this.model.attributes.pageId,
               /* templateId: this.model.attributes.templateId,  
                pageId: this.model.attributes.pageId,
                profileLight: JSON.stringify({name: profile.get('firstname'), lastname: profile.get('lastname'), 
                email: profile.get('email')}),
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
