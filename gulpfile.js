'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');
var gulpCssGlobbing = require("gulp-css-globbing");
var imagemin = require('gulp-imagemin');
var spritesmith = require('gulp.spritesmith');

gulp.task('sass:prod', function () {
  gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
       browsers: ['last 2 version']
    }))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:dev', function () {
  gulp.src('./sass/*.scss')
    .pipe(gulpCssGlobbing({
      extensions: ['.scss']
    }))
    .pipe(sourcemaps.init())
    .pipe(sass({includePaths: [
      'node_modules/breakpoint-sass/stylesheets/'
     ] }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 version']
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./css'));
});

gulp.task('sprite', function () {
 // Generate our spritesheet
 var spriteData = gulp.src('images/**/*.png').pipe(spritesmith({
   imgName: '../generated/sprite.png',
   retinaSrcFilter: 'images/**/*-2x.png',
   retinaImgName: '../generated/sprite-2x.png',
   cssName: 'sprite.scss'
 }));

 // Pipe image stream through image optimizer and onto disk
 spriteData.img
   .pipe(imagemin())
   .pipe(gulp.dest('./generated/'));

 // Pipe CSS stream through CSS optimizer and onto disk
 spriteData.css
   .pipe(gulp.dest('./sass/abstractions/'));

});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass:dev']);

  // Create LiveReload server
  livereload.listen();

  // Watch any files in dist/, reload on change
  gulp.watch(['./css/**/*']).on('change', livereload.changed);
});

gulp.task('default', ['sass:dev', 'sass:watch', 'sprite']);
