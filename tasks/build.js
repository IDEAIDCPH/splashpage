module.exports = function(grunt) {
    grunt.registerTask('build', [
        'clean:dist', 
        'process',
        'clean:tmp'
    ]);
}