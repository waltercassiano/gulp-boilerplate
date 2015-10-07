'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('sass:prod', function () {
  gulp.src('./sass/*.scss')
    .pipe(plugins.sass().on('error', plugins.sass.logError))
    .pipe(plugins.autoprefixer({
       browsers: ['last 2 version']
    }))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:dev', function () {
  gulp.src('./sass/*.scss')
    .pipe(plugins.cssGlobbing({
      extensions: ['.scss']
    }))
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass({includePaths: [
      'node_modules/breakpoint-sass/stylesheets/'
     ] }).on('error', plugins.sass.logError))
    .pipe(plugins.autoprefixer({
      browsers: ['last 2 version']
    }))
    .pipe(plugins.sourcemaps.write('.'))
    .pipe(gulp.dest('./css'));
});

gulp.task('sprite', function () {
 // Generate our spritesheet
 var spriteData = gulp.src('images/**/*.png').pipe(plugins.spritesmith({
   imgName: '../generated/sprite.png',
   retinaSrcFilter: 'images/**/*-2x.png',
   retinaImgName: '../generated/sprite-2x.png',
   cssName: 'sprite.scss'
 }));

 // Pipe image stream through image optimizer and onto disk
 spriteData.img
   .pipe(plugins.imagemin())
   .pipe(gulp.dest('./generated/'));

 // Pipe CSS stream through CSS optimizer and onto disk
 spriteData.css
   .pipe(gulp.dest('./sass/abstractions/'));

});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass:dev']);

  // Create LiveReload server
  plugins.livereload.listen();

  // Watch any files in dist/, reload on change
  gulp.watch(['./css/**/*']).on('change', plugins.livereload.changed);
});

gulp.task('default', ['sass:dev', 'sass:watch', 'sprite']);
