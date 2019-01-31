define('SocialLogin.View', [
    'SocialLogin.ScriptLoaderHelper',
    'AnnexServices.Model',
    'SocialLogin.Model',

    'jQuery',
    'Backbone',

    'sociallogin.tpl'
], function(
    ScriptLoaderHelper,

    AnnexConfigModel,
    SocialLoginModel,

    jQuery,
    Backbone,
    SocialLoginViewTpl
) {

    return Backbone.View.extend({
        template: SocialLoginViewTpl,

        loadSocialLoginModule: function() {
             var self = this;
			 var siteId=parseInt(self.annexConfigModel.get('siteId'));
			 var handleloginurl=self.annexConfigModel.get('handleloginurl');
			 this.s13Promise = ScriptLoaderHelper.loadScript(siteId);			
			window.S13AsyncInit = function()
			{
             SAS13Obj.init({
             siteid:siteId,
             buttonType:["regular","small"]},handleloginurl);
            };

        },
        initialize: function() {
			var self = this;
            this.annexConfigModel = new AnnexConfigModel();
            this.model = new SocialLoginModel();

            this.annexConfigModel.fetch().done(function() {
                self.loadSocialLoginModule();
            });
        }
    });
});
