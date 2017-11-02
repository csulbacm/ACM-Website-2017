acm_app.controller("board_controller", function($scope, config){
	this.config = config.BOARD;

	this.active = this.config[this.config.length - 1]

	this.personHolder = "https://raw.githubusercontent.com/csulbacm/ACM-Website-2017/master/src/img/board/person-placeholder.jpg"
	
	this.changeBoard = function(_index){
		console.log(_index);
		this.active = this.config[_index];
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