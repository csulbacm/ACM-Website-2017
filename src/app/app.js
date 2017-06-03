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

		.state("event", {
			url:"/event",
			templateUrl: "app/views/events.html",
			controller: "",
			controllerAs: ""		
		})

		.state("about", {
			url:"/about",
			templateUrl: "app/views/about.html",
			controller: "about_controller",
			controllerAs: "ABOUT"		
		})

		.state("contact", {
			url:"/contact",
			templateUrl: "app/views/contact.html",
			controller: "",
			controllerAs: ""		
		})

		.state("board", {
			url:"/board",
			templateUrl: "app/views/board.html",
			controller: "",
			controllerAs: ""		
		})

}]);


acm_app.run([function(){

}]);