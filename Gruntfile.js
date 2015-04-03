'use strict';

module.exports = function(grunt) {

  require('jit-grunt')(grunt, {
    cmq: 'grunt-combine-media-queries',
    scsslint: 'grunt-scss-lint',
  });

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    config: {
      source: 'source/<%= pkg.name %>',
      build: 'files/<%= pkg.name %>',
      tmp: '.tmp'
    },

    autoprefixer: {
      options: {
        browsers: ['last 3 versions']
      },
      files: {
        expand: true,
        cwd: '<%= config.source %>/css',
        dest: '<%= config.source %>/css',
        src: '**/*.css'
      }
    },

    clean: {
      dist: ['<%= config.build %>'],
      sass: ['.sass-cache']
    },

    cmq: {
      files: {
        expand: true,
        cwd: '<%= config.source %>/css',
        dest: '<%= config.build %>/css',
        src: '**/*.css'
      }
    },

    concat: {
      options: {
        sourceMap: false
      },
      files: {
        src: [
          '<%= config.source %>/js/script.js'
        ],
        dest: '<%= config.build %>/js/script.js',
      }
    },

    copy: {
      favicons: {
        expand: true,
        cwd: '<%= config.source %>',
        dest: '<%= config.build %>',
        src: '*ico'
      },
      fonts: {
        expand: true,
        cwd: '<%= config.source %>/fonts',
        dest: '<%= config.build %>/fonts',
        src: '**/*.{otf,svg,ttf,woff,woff2}',
      },
    },

    cssmin: {
      files: {
        expand: true,
        cwd: '<%= config.build %>/css',
        dest: '<%= config.build %>/css',
        src: '**/*.css'
      }
    },

    imagemin: {
      files: {
        files: [{
          expand: true,
          cwd: '<%= config.source %>',
          src: '**/*.{gif,jpeg,jpg,png}',
          dest: '<%= config.build %>'
        }]
      }
    },

    jshint: {
      options: {
        jshintrc: true
      },
      files: [
        'gruntfile.js',
        '<%= config.source %>/js/**/*.js',
        '!<%= config.source %>/js/libs/**/*.js'
      ]
    },

    uglify: {
      options: {
        sourceMap: false
      },
      files: {
        expand: true,
        cwd: '<%= config.build %>/js',
        dest: '<%= config.build %>/js',
        src: '**/*.js',
      }
    },

    sass: {
      files: {
        expand: true,
        cwd: '<%= config.source %>/scss',
        dest: '<%= config.source %>/css',
        src: '**/*.scss',
        ext: '.css'
      }
    },

    scsslint: {
      files: ['<%= config.source %>/scss/**/*.scss']
    },

    watch: {
      options: {
        livereload: true
      },

      css: {
        files: ['<%= config.source %>/css/**/*.css'],
        tasks: ['autoprefixer']
      },

      gruntfile: {
        files: ['Gruntfile.js'],
        tasks: ['jshint']
      },

      img: {
        files: ['<%= config.source %>/img/**/*.{gif,jpeg,jpg,png}'],
        tasks: []
      },

      js: {
        files: ['<%= config.source %>/js/**/*.js'],
        tasks: ['jshint']
      },

      sass: {
        files: ['<%= config.source %>/scss/**/*.scss'],
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
    // 'scsslint',

    // CSS
    'sass',
    'autoprefixer',

    // Watch
    'watch'
    ]);

  grunt.registerTask('test', [
    // Linting
    'jshint',
    // 'scsslint'
  ]);

  grunt.registerTask('build', [
    // Linting
    'jshint',
    // 'scsslint',

    // Clean
    'clean:dist',

    // Copy
    'copy',

    // CSS
    'sass',
    'autoprefixer',
    'cmq',
    'cssmin',

    // JavaScript
    'concat',
    'uglify',

    // Images
    'imagemin',

    // Clean
    'clean:sass'
  ]);

};
