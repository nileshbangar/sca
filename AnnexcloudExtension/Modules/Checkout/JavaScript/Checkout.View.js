define('Checkout.View', [
    'AnnexServices.Model',
    'Checkout.Model',
	'Rewardcode.Model',
    'Profile.Model',
    'jQuery',
    'Backbone',

    'checkout.tpl'
], function(

    AnnexConfigModel,
    CheckoutModel,
	RewardcodeModel,
    ProfileModel,
    jQuery,
    Backbone,
    CheckoutViewTpl
) {

    return Backbone.View.extend({
        template: CheckoutViewTpl,
		events: {
            'change [data-action="loyaltyclaimreward"]': 'applyloyaltyclaimreward'
        },
		applyloyaltyclaimreward: function loyaltyclaimreward(e) {
			var self = this;
			var rewardId = parseInt(jQuery(e.currentTarget).val());
			var siteId=parseInt(self.annexConfigModel.get('siteId'));
			var accesstoken=self.annexConfigModel.get('accesstoken');
			var profile= ProfileModel.getInstance();
			var emailId=profile.get('email');
			var data = "reward_id="+rewardId+"&reason=claim";
			var xhr = new XMLHttpRequest();
			xhr.addEventListener("readystatechange", function () {
			  if (this.readyState === 4) {
			  var rewardCodeobj = JSON.parse(this.responseText);
				jQuery('input[name="code"]').val(rewardCodeobj['reward_code']);
				$(".order-wizard-paymentmethod-giftcertificates-module-form-submit").click();
			  }
			});
			xhr.open("PUT", "https://s15.socialannex.net/apiv2/points/"+siteId+"/"+emailId+"?access_token="+accesstoken,true);
			xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
			xhr.send(data);
        },
        loadCheckoutModule: function() {
            var self = this;
			var siteId=parseInt(self.annexConfigModel.get('siteId'));
			var accesstoken=self.annexConfigModel.get('accesstoken');
			var profile= ProfileModel.getInstance();
			var emailId=profile.get('email');
			 var fname=profile.get('firstname');
			 var lname=profile.get('lastname');
            jQuery.when(
                self.model.fetch({
					siteId:siteId,emailId:emailId,accesstoken:accesstoken
				}),
            ).done(function() {
                self.render();
            });

        },
        initialize: function(options) {
            var self = this;
            this.annexConfigModel = new AnnexConfigModel();
            this.model = new CheckoutModel();
            this.annexConfigModel.fetch({
            }).done(function() {
                self.loadCheckoutModule();
            });
        },
        getContext: function() {
            return {
                loadAnnexIntegration: !this.model.isNew(),
                copounList:this.model.attributes.data
            };
        }
    });
});
