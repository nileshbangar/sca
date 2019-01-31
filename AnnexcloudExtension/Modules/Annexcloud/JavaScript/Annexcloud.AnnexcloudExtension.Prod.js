define('Annexcloud.AnnexcloudExtension.Prod', [
    'QA.View',
	'RNR.View',
	'Checkout.View',
	'SocialLogin.View',
	'Loyalty.Router'
], function (
   QAView,
   RNRView,
   CheckoutView,
   SocialLoginView,
   LoyaltyRouter
) {
    'use strict';
    return {
        //THIS IS FOR THE MYACCOUNT MENU ITEM
        MenuItems: [
            function (application) {
                //this can be application or just a plain object
                return 	{
                    id: 'loyalty',
                    name: _('Loyalty').translate(),
                    url: 'loyalty',
                    index: 999
                };
            }
        ],
        //end MYACCOUNT

        mountToApp: function mountToApp(container) {
			
          
            //myacount router registration for new page
            if (container.name === 'MyAccount') {
				return new LoyaltyRouter(container);
            }

            /** This is for PDP */
            var pdp = container.getComponent('PDP');

            /*
            if (pdp) {
                pdp.addChildViews(
                    'ProductDetails.Full.View', {
                        'Product.Information': {
                            'AdditionalPDP.View':
                                {
                                    childViewIndex: 5,
                                    childViewConstructor: function () {
                                        return new AdditionalPDPView({
                                            pdp: pdp
                                        });
                                    }
                                }
                        }
                    }
                );
            }*/

            if (pdp) {
                pdp.addChildViews(
                    'ProductDetails.Full.View', {
                        'Product.Information': {
                            'QA.View':
                                {
                                    childViewIndex: 5,
                                    childViewConstructor: function () {
                                        return new QAView({
                                            pdp: pdp
                                        });
                                    }
                                }
                        }
                    }
                );
            }

			if (pdp) {
                pdp.addChildViews(
                    'ProductDetails.Full.View', {
                        'Product.Information': {
                            'RNR.View':
                                {
                                    childViewIndex: 6,
                                    childViewConstructor: function () {
                                        return new RNRView({
                                            pdp: pdp
                                        });
                                    }
                                }
                        }
                    }
                );
            }
			
            //This is for login
            var layout = container.getComponent('Layout');
			if (container.name === 'Checkout') {
                layout.addChildViews(
                    'LoginRegister.View', {
                        'Login': {
                            'SocialLogin.View':
                                {
                                    childViewIndex:2,
                                    childViewConstructor: function () {
										return new SocialLoginView({});
                                    }
                                }
                        }
                    }
                );
            }
         //var layout = container.getComponent('Layout');
		/*
		 if (container.name === 'Checkout') {
                layout.addChildViews(
                    'Wizard.View', {
                        'CartPromocodeListView': {
                            'Checkout.View':
                                {
                                    childViewIndex: 10,
                                    childViewConstructor: function () {
                                        return new CheckoutView({});
                                    }
                                }
                        }
                    }
                );
            }
			*/
			var layout = container.getComponent('Checkout');
				if(layout)
				{
				  layout.addChildView('Items.Collection', function childViewConstructor()
				  {
					return new CheckoutView();
				  });
				}
        }
    };
});
