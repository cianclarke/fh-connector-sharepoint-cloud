module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      all: ['index.js', 'lib/**/*.js', 'test/**/**/*.js']
    },
    unit: ['mocha -A -u exports --recursive -t 10000 ./test/unit'],
    integrate : ['mocha -A -u exports --recursive -t 10000 ./test/integration ']
  });

  grunt.loadNpmTasks('grunt-fh-build');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('test', ['jshint', 'fh:unit']);
  grunt.registerTask('default', 'test');
};
