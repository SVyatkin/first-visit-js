/*
 * First Visit Js jQuery Plugin version 0.1
 * Roman Pushkin - roman.pushkin@gmail.com
 */
;(function($){

	'use strict';
	
	$.fn.firstVisit = function(options) {

		if (!window.localStorage) {
			console.warn('localStorage is not defined, add Modernizr referece: https://github.com/Modernizr/Modernizr');
			return;
		}

		var VISIT_KEY_NAME = 'first_visit_key';
		var visitKey = false;
		var $elements = $(this);

		var settings = {
			classToAdd: '',
			currentPathOnly: false
		};

		$.extend(settings, options);

		var getVisitKeyName = function() {
			return settings.currentPathOnly ? VISIT_KEY_NAME + '_' + window.location.pathname : VISIT_KEY_NAME;
		}

		var setVisitKey = function() {
			var date = new Date();
			window.localStorage.setItem(getVisitKeyName(), date);
		}

		var getVisitKey = function() {
			return window.localStorage.getItem(getVisitKeyName());
		}

		// get last visit variable
		if(!visitKey) {
			visitKey = getVisitKey();
		}

		if(!visitKey) {
			setVisitKey();
			
			// show
			$elements.show();

			// add class if any
			if(settings.classToAdd) { $elements.addClass(settings.classToAdd); }
		}
	}
})(jQuery);