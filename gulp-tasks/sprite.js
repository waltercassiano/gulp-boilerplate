'use strict';

module.exports = function (gulp, plugins, config) {
  return function() {
    // Generate our spritesheet
    var spriteData = gulp.src(config.paths.sprite.src).pipe(plugins.spritesmith({
        imgName: config.spriteConfig.imgName,
        retinaSrcFilter: config.paths.sprite.src2x,
        retinaImgName: config.spriteConfig.retinaImgName,
        cssName: config.spriteConfig.cssName
    }));

    // Pipe image stream through image optimizer and onto disk
    spriteData.img
     .pipe(plugins.imagemin())
     .pipe(gulp.dest(config.paths.images.dest));

    // Pipe CSS stream through CSS optimizer and onto disk
    spriteData.css
     .pipe(gulp.dest(config.paths.styles.abstractions));
  }
}
