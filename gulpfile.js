const gulp = require('gulp');
const concat = require('gulp-concat');
const nodemon = require('gulp-nodemon');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('css', async () => {
  gulp
    .src('./src/styles/*.css')
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
    .pipe(concat('style.min.css'))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('public/dist'));
});

gulp.task('js', async () => {
  gulp
    .src('./src/scripts/*.js')
    .pipe(concat('script.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/dist'));
});

/* eslint no-sequences: 0 */
gulp.task(
  'watch',
  async () => (
    gulp.watch('./src/styles/*.css', gulp.parallel('css')),
    gulp.watch('./src/scripts/*.js', gulp.parallel('js'))
  )
);

gulp.task('start', (done) =>
  nodemon({
    script: 'index.js',
    ext: 'css, js',
    tasks: ['css'],
    ignore: ['public/dist'],
    done: done,
  })
);

gulp.task('default', gulp.parallel('css', 'js', 'start', 'watch'));
