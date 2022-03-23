const gulp = require('gulp');
const concat = require('gulp-concat');
const nodemon = require('gulp-nodemon');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('css', () => (
    gulp.src('./public/styles/*.css')
    .pipe(autoprefixer())
    .pipe(concat('style.min.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('public/dist'))
))

gulp.task('js', async () => {
    gulp.src('./public/scripts/*.js')
    .pipe(concat('script.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/dist'))
})

gulp.task('watch', () => (
    gulp.watch('./public/styles/*.css', gulp.parallel('css')),
    gulp.watch('./public/scripts/*.js', gulp.parallel('js'))
))

gulp.task('start', (done) => (
    nodemon({
        script: 'server.js',
        ext: 'css',
        tasks: ['css'],
        ignore: ['public/dist'],
        done: done
    })
))

gulp.task('default', gulp.parallel('css', 'js', 'start'))