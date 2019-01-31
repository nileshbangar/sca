define('RNR.View', [
    'RNR.ScriptLoaderHelper',
    'AnnexServices.Model',
    'RNR.Model',

    'jQuery',
    'Backbone',

    'annex_rnr.tpl'
], function(
    ScriptLoaderHelper,

    AnnexConfigModel,
    RNRModel,

    jQuery,
    Backbone,
    additionalPDPViewTpl
) {

    return Backbone.View.extend({
        template: additionalPDPViewTpl,

        loadRNRModule: function() {
            var self = this;
            var pdtl = this.pdp.getItemInfo();
            this.s28Promise = ScriptLoaderHelper.loadScript(self.annexConfigModel.get('siteId'));
            //window.sa_s28_product_image_url=pdtl.item.keyMapping_thumbnail.url;
            var productData = {
                siteID: self.annexConfigModel.get('siteId'),
                templateId: self.annexConfigModel.get('templateId'),
                sa_p_img_url: pdtl.item.keyMapping_thumbnail.url,
                sa_p_url: window.location.protocol + '//' + window.location.hostname + '/' + Backbone.history.fragment,
                sa_p_price: pdtl.item.keyMapping_price,
                sa_p_name: pdtl.item.storedisplayname2,
                sa_p_id: pdtl.item.internalid
            };
            var parameter={"config":{"siteId":self.annexConfigModel.get('siteId'),"templateId":self.annexConfigModel.get('templateId'),"currentPageUrl":encodeURIComponent(window.location.protocol + '//' + window.location.hostname + '/' + Backbone.history.fragment)},"productId":pdtl.item.internalid};

            window.sa_s28_product_id = pdtl.item.internalid;
            window.sa_s28_product_name = pdtl.item.storedisplayname2;
            window.sa_s28_product_image_url = pdtl.item.keyMapping_thumbnail.url;
            window.sa_s28_product_price = pdtl.item.keyMapping_price;

            jQuery.when(
                self.model.fetch({
                    data: "parameter="+JSON.stringify(parameter)
                }),
                this.s28Promise
            ).done(function() {
                self.model.set('internalid', pdtl.item.internalid);
                self.render();

            });


        },
        initialize: function(options) {
            var self = this;

            this.pdp = options.pdp;

            this.annexConfigModel = new AnnexConfigModel();
            this.model = new RNRModel();

            this.annexConfigModel.fetch({
                data: {
                    id: 'pdp'
                }
            }).done(function() {
                self.loadRNRModule();
            });
        },
        getContext: function() {
            return {
                loadAnnexIntegration: !this.model.isNew(),
                topContent:this.model.attributes.topContent,
                bottomContent:this.model.attributes.bottomContent
            };
        }
    });
});
