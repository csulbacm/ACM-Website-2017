var acm_app = angular.module('acm_app', ['ui.router']);


acm_app.config(['$stateProvider', '$urlRouterProvider', '$compileProvider', function($stateProvider, $urlRouterProvider,  $compileProvider ){

	$urlRouterProvider.otherwise("/");

	$stateProvider
	
		.state("home", {
			url:"/",
			templateUrl: "app/views/home.html",
			controller: "home_controller",
			controllerAs: "HOME"		
		})

}]);


acm_app.run([function(){

}]);