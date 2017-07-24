var acm_app = angular.module('acm_app', ['ui.router', 'ngAnimate']);


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

		.state("about-board", {
			url:"/about-board",
			templateUrl: "app/views/about-board.html",
			controller: "about-board_controller",
			controllerAs: "AB"		
		})

		/* Not Used 
		.state("contact", {
			url:"/contact",
			templateUrl: "app/views/contact.html",
			controller: "",
			controllerAs: ""		
		})
		*/

		.state("hub", {
			url:"/hub",
			templateUrl: "app/views/hub.html",
			controller: "hub_controller",
			controllerAs: "HUB"
		})

		.state("board", {
			url:"/board",
			templateUrl: "app/views/board.html",
			controller: "board_controller",
			controllerAs: "BOARD"		
		})

}]);


acm_app.run([function(){

}]);