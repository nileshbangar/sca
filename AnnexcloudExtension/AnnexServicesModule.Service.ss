
function service(request, response)
{
	'use strict';
	try 
	{
		require('AnnexCloud.AnnexServicesExtension.AnnexServicesModule.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('AnnexCloud.AnnexServicesExtension.AnnexServicesModule.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}