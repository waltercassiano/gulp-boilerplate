'use strict';

module.exports = function (gulp, plugins, config) {
  return function() {
    // Generate our spritesheet
    // The plan is to use the same folder for both types of images
    // And filter by the name with 2x or not
    var spriteData = gulp.src(config.paths.sprite.src + '**.png').pipe(plugins.spritesmith({
        imgName: config.spriteConfig.imgName,
        retinaSrcFilter: config.paths.sprite.src + '**-2x.png',
        retinaImgName: config.paths.sprite.dist + config.spriteConfig.retinaImgName,
        cssName: config.paths.styles.src + config.spriteConfig.cssName
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
