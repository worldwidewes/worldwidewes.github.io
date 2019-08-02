jQuery('[data-analytics-link-component-name]').on('mousedown',function(){
	console.log('Component name = ' + jQuery(this).data('analytics-link-component-name'));
	console.log('Link type = ' + jQuery(this).data('analytics-link-type'));
	console.log('Link description = ' + jQuery(this).data('analytics-link-description'))
})