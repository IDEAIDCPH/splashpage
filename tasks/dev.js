module.exports = function(grunt) {
    grunt.registerTask('dev', [
        'clean:dist', 
        'process', 
        'watch',
        'clean:tmp' //Not sure if called on exit
    ]);
} 