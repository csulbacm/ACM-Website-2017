var acm_mod = angular.module('acm-website', ['ui.router']);


acm_mod.config(['$stateProvider', '$urlRouterProvider', '$compileProvider', function($stateProvider, $urlRouterProvider,  $compileProvider){

	$urlRouterProvider.otherwise("/");
}]);
