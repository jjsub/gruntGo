"use strict";

module.exports = function(grunt) {
  require('load-grunt-task')(grunt);

  // Project configuration.
  
  grunt.initConfig({
    copy: {
      main: {
        file:[
          {expand: true, cwd: 'app/', src: ['**', '!**/*.jade', '!**/*.{sass, scss}'], dest: 'public/', filter: 'isFile'}
        ]
      }
    },

     jade: {
      compile: {
        file:[{expand: true, cwd: 'app/', src: ['**/_*.jade', '!**/_*.jade'], dest: 'public/', ext: '.html'}]
      }
     },
     sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'public/css/main.css': 'app/css/main.scss'
            }
        }
    },

    watch:{
      other:{
        files: ['app/**', '!app/**/*.jade', '!app/**/*.{sass,scss}'],
        tasks: ['copy']
      },
      jade: {
        files:['app/**/*.jade']
        task:['jade']
      },
       sass: {
        files:['app/**/*.{sass,scss}']
        task:['sass']
      }
    }
  });


  // Default task(s).
  grunt.registerTask('default', []);
  grunt.registerTask('build', ['clean','copy', 'jade', 'sass']);
  grunt.registerTask('save', ['build]', 'watch']);

};
