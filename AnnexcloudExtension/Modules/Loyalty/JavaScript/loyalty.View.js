define('Loyalty.View', [
    'Loyalty.ScriptLoaderHelper',
    'AnnexServices.Model',
	'Profile.Model',
    'jQuery',
    'Backbone',
    'loyalty.tpl'
], function(
    ScriptLoaderHelper,

    AnnexConfigModel,
	ProfileModel,
    jQuery,
    Backbone,
    LoyaltyViewTpl
) {
    return Backbone.View.extend({
        template: LoyaltyViewTpl,
        loadLoyaltyModule: function() {
             var self = this;
			 var siteId=parseInt(self.annexConfigModel.get('siteId'));
			 var accesstoken=self.annexConfigModel.get('accesstoken');
			 var profile= ProfileModel.getInstance();
			 var emailId=profile.get('email');
			 var fname=profile.get('firstname');
			 var lname=profile.get('lastname');
			 window.sa_access_token =accesstoken;
			 window.sa_emailid =emailId;
			 window.sa_page = 5;
			 //------------------call ajax request-----------//
			 var xhr = new XMLHttpRequest();
			xhr.addEventListener("readystatechange", function () {
			  if (this.readyState === 4) {
				console.log("loyalty success");
			  }
			});
		    var data = "user_email="+emailId+"&fname="+fname+"&lname="+lname;
			xhr.open("POST", "https://s15.socialannex.net/apiv2/user/"+siteId+"/"+emailId+"?access_token="+accesstoken);
			xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
			xhr.send(data);
			//------------------send----------------------
			this.s15Promise = ScriptLoaderHelper.loadScript(siteId);			

        },
        initialize: function() {
			var self = this;
            this.annexConfigModel = new AnnexConfigModel();
            this.annexConfigModel.fetch().done(function() {
                self.loadLoyaltyModule();
            });
        }
    })
});
