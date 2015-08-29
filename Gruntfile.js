'use strict';

module.exports = function(grunt) {

  require('jit-grunt')(grunt, {
    cmq: 'grunt-combine-media-queries',
    scsslint: 'grunt-scss-lint',
  });

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    config: {
      files: 'files/<%= pkg.name %>'
    },

    autoprefixer: {
      options: {
        browsers: ['last 3 versions']
      },
      files: {
        expand: true,
        cwd: '<%= config.files %>/css',
        dest: '<%= config.files %>/css',
        src: '**/*.css'
      }
    },

    cmq: {
      files: {
        expand: true,
        cwd: '<%= config.files %>/css',
        dest: '<%= config.files %>/css',
        src: '**/*.css'
      }
    },

    concat: {
      options: {
        sourceMap: false
      },
      files: {
        src: [
          '<%= config.files %>/js/script.js'
        ],
        dest: '<%= config.files %>/js/main.js',
      }
    },

    cssmin: {
      files: {
        expand: true,
        cwd: '<%= config.files %>/css',
        dest: '<%= config.files %>/css',
        src: '**/*.css'
      }
    },

    imagemin: {
      files: {
        files: [{
          expand: true,
          cwd: 'files',
          src: '**/*.{gif,jpeg,jpg,png}',
          dest: 'files'
        }]
      }
    },

    jshint: {
      options: {
        jshintrc: true
      },
      files: [
        'gruntfile.js',
        '<%= config.files %>/js/**/*.js',
        '!<%= config.files %>/js/libs/**/*.js'
      ]
    },

    uglify: {
      files: {
        src: [
          '<%= config.files %>/js/main.js'
        ],
        dest: '<%= config.files %>/js/main.js',
      }
    },

    sass: {
      files: {
        expand: true,
        cwd: '<%= config.files %>/scss',
        dest: '<%= config.files %>/css',
        src: '**/*.scss',
        ext: '.css'
      }
    },

    scsslint: {
      files: ['<%= config.files %>/scss/**/*.scss']
    },

    watch: {
      options: {
        livereload: true
      },

      css: {
        files: ['<%= config.files %>/css/**/*.css'],
        tasks: ['autoprefixer']
      },

      gruntfile: {
        files: ['Gruntfile.js'],
        tasks: ['jshint']
      },

      img: {
        files: ['<%= config.files %>/img/**/*.{gif,jpeg,jpg,png}'],
        tasks: []
      },

      js: {
        files: ['<%= config.files %>/js/**/*.js'],
        tasks: ['jshint']
      },

      sass: {
        files: ['<%= config.files %>/scss/**/*.scss'],
        tasks: ['scsslint', 'sass']
      },

      templates: {
        files: ['templates/**/*.html5'],
        tasks: []
      }

    }

  });

  grunt.registerTask('default', [
    // Linting
    'jshint',
    'scsslint',

    // CSS
    'sass',
    'autoprefixer',

    // Watch
    'watch'
    ]);

  grunt.registerTask('test', [
    // Linting
    'jshint',
    'scsslint'
  ]);

  grunt.registerTask('build', [
    // Linting
    'jshint',
    'scsslint',

    // CSS
    'sass',
    'autoprefixer',
    'cmq',
    'cssmin',

    // JavaScript
    'concat',
    'uglify',

    // Images
    'imagemin'
  ]);

};
