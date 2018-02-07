const gulp = require('gulp'),
      sass = require('gulp-sass'),
      connect = require('gulp-connect'),
      plumber = require('gulp-plumber'),
      babel = require('gulp-babel');

gulp.task('css',() => {
    gulp.src('./public/sass/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('./static/css/'))
})

gulp.task('js',() => {
  gulp.src('./public/js/**/*.js')
  .pipe(babel())
  .pipe(gulp.dest('/static/js'))
})

gulp.task('connect',() => {
    connect.server({
      root : './src/views',
      livereload : true
    })
})

gulp.task('html',() => {
    gulp.src('./src/views/**/*/html')
    .pipe(connect.reload())
})

gulp.task('watch',() => {
  gulp.watch('./public/sass/**/*.scss',['css'])
  gulp.watch('./src/views/**/*.html',['html'])
  gulp.watch('./public/js/**/*.js',['js'])
})
