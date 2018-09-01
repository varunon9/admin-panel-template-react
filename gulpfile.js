'use-strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src('./public/sass/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./public/static/css/'));
});

gulp.task('sass:watch', () => {
  gulp.watch('./public/sass/**/*.scss', gulp.series('sass'))
    .on('change', (path, /*stats*/) => {
      console.log('File ' + path + ' was changed');
    });
});
