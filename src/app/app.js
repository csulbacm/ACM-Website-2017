var acm_app = angular.module('acm_app', ['ui.router']);


acm_app.config(['$stateProvider', '$urlRouterProvider', '$compileProvider', function($stateProvider, $urlRouterProvider,  $compileProvider ){

	$urlRouterProvider.otherwise("/");
}]);


acm_app.run([function(){

}]);