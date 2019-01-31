define('AnnexServices.Model'
,	[
		'Backbone.CachedModel'
	,	'Utils'
	,	'underscore'
	]
,	function (
		CachedModel
	,	Utils
	,	_
	)
{
	'use strict';

	return CachedModel.extend({
		//urlRoot: Utils.getAbsoluteUrl(getExtensionAssetsPath('services/QuestionsAndAnswersModule.Service.ss'))
		urlRoot: Utils.getAbsoluteUrl('extensions/AnnexCloud/AnnexServicesExtension/2.0.5/services/AnnexServicesModule.Service.ss')
	,	validation: {
			title: {
				required: true
			,	msg: _('Valid task name is required').translate()
			}
		}

	,	defaults: {
			'title': ''
		,	'completed': false
		}

	,	initialize: function (options) {}
	});
});
