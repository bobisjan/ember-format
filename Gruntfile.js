'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    clean: {
      locales: 'blueprints/locale/data'
    },

    extract_cldr_data: {
      options: {
        fields : ['second', 'minute', 'hour', 'day', 'month', 'year'],
        plurals: true
      },

      all: {
        dest: 'blueprints/locale/data',
        options: {
          prelude: '\'use strict;\'\n',
          wrapEntry: function (entry) {
            return 'module.exports = ' + entry + ';';
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-extract-cldr-data');

  grunt.registerTask('cldr', [
    'extract_cldr_data'
  ]);

  grunt.registerTask('default', [
    'clean',
    'cldr'
  ]);
};
