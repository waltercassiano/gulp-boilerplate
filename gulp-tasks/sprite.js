'use strict';

module.exports = function (gulp, $) {
  return function() {
    // Generate our spritesheet
    var spriteData = gulp.src('./images/**.png').pipe($.spritesmith({
     imgName: './generated/sprite.png',
     retinaSrcFilter: './images/**-2x.png',
     retinaImgName: './generated/sprite-2x.png',
     cssName: 'sprite.scss'
    }));

    // Pipe image stream through image optimizer and onto disk
    spriteData.img
     .pipe(gulp.dest('./generated/'));

    // Pipe CSS stream through CSS optimizer and onto disk
    spriteData.css
     .pipe(gulp.dest('./sass/abstractions/'));
  };
};
