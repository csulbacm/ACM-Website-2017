acm_app.controller("board_controller", function($scope, config){
	
	this.config = config.BOARD;

	this.active = this.config[this.config.length - 1]
	
	this.changeBoard = function(_index){
		console.log(_index);
	}
});