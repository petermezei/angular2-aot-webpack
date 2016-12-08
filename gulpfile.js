'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
 
gulp.task('sass', function () {
  return gulp.src('./src/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest("./src/"));
});

gulp.task('pug', function buildHTML() {
  return gulp.src('./src/**/*.pug')
  .pipe(pug())
  .pipe(gulp.dest("./src/"));
});
 
gulp.task('watch', function () {
  gulp.watch('./src/**/*.scss', ['sass']);
  gulp.watch('./src/**/*.pug', ['pug']);
});