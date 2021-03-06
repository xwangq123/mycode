﻿var app = angular.module('app', [ 'ngRoute' ]);

app.run([ function() {
	document.title = "Test";
	// window.location = "views/login.html";
} ]);

app.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/security/security', {
		templateUrl : '/views/security/security.html',
		controller : 'SecurityController'
	}).otherwise({
		redirectTo : '/'
	});
} ]);

function getQueryStringByName(name) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex
			.exec(location.search ? location.search : location.hash);
	return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g,
			" "));
}