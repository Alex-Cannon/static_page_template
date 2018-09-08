var gulp = require('gulp'),
  connect = require('gulp-connect'),
  sass = require('gulp-sass'),
  concat = require('gulp-concat'),
  uglifycss = require('gulp-uglifycss');
 
gulp.task('serve', function() {
  connect.server({
    port: 80,
    livereload: true
  });
});

gulp.task('sass', function () {
  gulp.src('sass/include.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(concat('style.css'))
  .pipe(gulp.dest('./'))
  .pipe(connect.reload());
});

gulp.task('uglify', function () {
  gulp.src('sass/include.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(concat('style.css'))
  .pipe(uglifycss())
  .pipe(gulp.dest('./'))
})

gulp.task('watch', function() {
  gulp.watch('sass/*.scss', ['sass']);
})
 
gulp.task('default', ['sass', 'serve', 'watch']);