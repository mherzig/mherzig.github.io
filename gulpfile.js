var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    babel = require('gulp-babel'),
    sass = require('gulp-sass'),
    template = require('gulp-template');

gulp.task('es6', function () {
  gulp.src('_es6/*.js')
      .pipe(babel())
      .pipe(gulp.dest('js'));
});

gulp.task('scss', function () {
  gulp.src('_scss/main.scss')
      .pipe(autoprefixer({
        browsers: ['> 5%', 'ie >= 9']
      }))
      .pipe(sass())
      .pipe(gulp.dest('css'));
});

gulp.task('html', function () {
  var data = require('./_data/main.json');

  gulp.src('_templates/*.html')
      .pipe(template(data))
      .pipe(gulp.dest('.'));
});

gulp.task('default', ['es6', 'scss', 'html'], function () {
  gulp.watch('_es6/*.js', ['es6']);
  gulp.watch('_scss/*.scss', ['scss']);
  gulp.watch(['_templates/*.html'], ['html']);
});