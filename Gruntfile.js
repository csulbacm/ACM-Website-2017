
module.exports = function(grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		connect: {
			serve: {
				port : 2000,
				base: 'src'
			}
		},

		// Test setting
		karma: {
			unit: {
				configFile: 'karma.conf.js',
				singleRun : true
			}
		}
	});

	grunt.loadNpmTasks('grunt-connect');
	grunt.loadNpmTasks('grunt-karma');
	grunt.registerTask('serve', ['connect:serve']);

	grunt.registerTask('test', ['karma']);
};