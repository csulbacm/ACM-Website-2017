acm_app.controller("about-board_controller", function($scope, config){

	this.about = config.ABOUT;

	this.board = config.BOARD;

	this.active = this.board[this.board.length - 1]

	this.personHolder = "../img/board/person-placeholder.png"

	this.changeBoard = function(_index){
		console.log(_index);
		this.active = this.board[_index];
		console.log(this.active);
	}

	this.getImg = function(_imgUrl){
		if(_imgUrl == null) {
			return this.personHolder;
		} else {
			return _imgUrl;
		}
	}

});
