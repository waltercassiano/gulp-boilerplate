/* gulp-config.js */
'use strict';

module.exports = {
  basePaths: {
    src: './',
    node_modules: './node_modules/'
  },
  paths: {
    images: {
      src: './images/',
      dest: './images/min/'
    },
    scripts: {
      src: './js/',
      dest: './js/min/'
    },
    styles: {
      src: './sass/',
      css: './css/',
      dest: './css/min/',
      abstractions: './sass/abstractions/'
    },
    sprite: {
      src: './images/**.png',
      src2x: './images/**-2x.png'
    },
  },
  spriteConfig: {
    imgName: './images/sprite.png',
    retinaImgName: './images/sprite-2x.png',
    cssName: '_sprite.scss',
  }

};

/*'use strict';

module.exports = funtion () {
  //BasePath`s
  var basePaths = {
    src: './',
    node_modules: './node_modules'
  };

  //Path`s
  var paths = {
    images: {
      src: './images/',
      dest: './images/min/'
    },
    scripts: {
      src: './js/',
      dest: './js/min/'
    },
    styles: {
      src: './sass/',
      dest: './css/min/',
      abstractions: './abstractions/'
    },
    sprite: {
      src: './images/**.png',
      src2x: './images/**-2x.png'
    }
  };

  //Sprite config
  var spriteConfig = {
      imgName: paths.images.src + 'sprite.png',
      retinaImgName: paths.images.src + 'sprite-2x.png',
      cssName: '_sprite.scss',
      imgPath: paths.images.dest + 'sprite.png'
  };

};*/
