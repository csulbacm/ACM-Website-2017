acm_app.controller("main_controller", function($scope){

	this.tab1 = {
		EVENT: {
			name: "Event",
			url: "event"
		},
		ABOUT: {
			name: "About & Board",
			url: "about-board"
		}
	};


	this.home = {
			name: "Home",
			url: "home"
	}

	this.tab2 = {
		CONTACT: {
			name: "Contact",
			url: "contact"
		},
		BOARD: {
			name: "Board",
			url: "board"
		}
	};
});