/* gulp-config.js */
'use strict';

module.exports = {
  basePaths: {
    src: './',
    node_modules: './node_modules/'
  },
  paths: {
    images: {
      src: './test_files/src/img/',
      dest: './test_files/dist/img/'
    },
    scripts: {
      fileName: 'main.js',
      src: './test_files/src/js/',
      dest: './test_files/dist/js/'
    },
    styles: {
      src: './test_files/src/sass/',
      dest: './test_files/dist/css/',
      abstractions: './test_files/src/sass/abstractions/'
    },
    sprite: {
      src: './test_files/src/img/sprite/',
      src2x: './test_files/dist/img/sprite2x/'
    },
  },
  spriteConfig: {
    imgName: 'sprite.png',
    retinaImgName: 'sprite-2x.png',
    cssName: '_sprite.scss',
  }
};
