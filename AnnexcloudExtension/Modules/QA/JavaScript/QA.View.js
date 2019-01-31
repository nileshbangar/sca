define('QA.View', [
    'QA.ScriptLoaderHelper',
    'AnnexServices.Model',
    'QA.Model',

    'jQuery',
    'Backbone',

    'annex_qa.tpl'
], function(
    ScriptLoaderHelper,

    AnnexConfigModel,
    QuestionsModel,

    jQuery,
    Backbone,
    additionalPDPViewTpl
) {

    return Backbone.View.extend({
        template: additionalPDPViewTpl,
        loadQAModule: function() {
            var self = this;
            var pdtl = this.pdp.getItemInfo();

            var productData = {
                siteID: self.annexConfigModel.get('siteId'),
                sa_p_img_url: pdtl.item.keyMapping_thumbnail.url,
                sa_p_url: window.location.protocol + '//' + window.location.hostname + '/' + Backbone.history.fragment,
                sa_p_price: pdtl.item.keyMapping_price,
                sa_p_name: pdtl.item.storedisplayname2,
                sa_p_id: pdtl.item.internalid
            };


            jQuery.when(
                self.model.fetch({
                    data: productData
                }),
                this.s23Promise
            ).done(function() {
                self.model.set('internalid', pdtl.item.internalid);
                self.render();

                S23Obj.init({
                    siteID: self.annexConfigModel.get('siteId'),
                    saGetProdDetails: productData
                });
            });


        },
        initialize: function(options) {
            var self = this;
            this.s23Promise = ScriptLoaderHelper.loadScript();
            this.pdp = options.pdp;


            this.annexConfigModel = new AnnexConfigModel();
            this.model = new QuestionsModel();

            this.annexConfigModel.fetch({
                data: {
                    id: 'pdp'
                }
            }).done(function() {
                self.loadQAModule();
            });
        },
        getContext: function() {
            return {
                loadAnnexIntegration: !this.model.isNew(),
                questionsContent: this.model.get('html')
            };
        }
    })
});
