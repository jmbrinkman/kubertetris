var gulp = require('gulp'),
fs = require('fs'),
uglify = require("gulp-uglify"),
concat = require("gulp-concat"),
header = require("gulp-header"),
runSequence = require('run-sequence');
 
var getVersion = function () {
    info = require("./package.json");
    return info.version;
};
var getCopyright = function () {
    return fs.readFileSync('Copyright');
};

gulp.task('js', function () {
    return gulp.src(['./assets/js/blockrain.jquery.libs.js', './assets/js/blockrain.jquery.src.js'])
    .pipe(concat('blockrain.jquery.js'))
    .pipe(header(getCopyright(), {version: getVersion()}))
    .pipe(gulp.dest('./dist/assets/js'))
    .pipe(uglify({preserveComments:'none'}))
    .pipe(concat('blockrain.jquery.min.js'))
    .pipe(header(getCopyright(), {version: getVersion()}))
    .pipe(gulp.dest('./dist/assets/js'));
});

gulp.task('firebase', function () {
    return gulp.src(['./assets/js/firebase.config.js'])
    .pipe(concat('firebase.config.js'))
    .pipe(gulp.dest('./dist/assets/js'))
    .pipe(uglify({preserveComments:'none'}))
    .pipe(concat('firebase.config.min.js'))
    .pipe(gulp.dest('./dist/assets/js'));
});

gulp.task('css', function () {
    return gulp.src(['./assets/css/blockrain.css'])
    .pipe(gulp.dest('./dist/assets/css/'));
});

gulp.task('blocks', function () {
    return gulp.src(['./assets/blocks/custom/*.*'])
    .pipe(gulp.dest('./dist/assets/blocks/custom'));
});

gulp.task('html', function () {
    return gulp.src(['./*.*'])
    .pipe(gulp.dest('./dist'));
});

gulp.task('images', function () {
    return gulp.src(['./assets/images/*.*'])
    .pipe(gulp.dest('./dist/assets/images'));
});

gulp.task('audio', function () {
    return gulp.src(['./assets/audio/*.*'])
    .pipe(gulp.dest('./dist/assets/audio'));
});

gulp.task('readme', function () {
    return gulp.src(['./README.md'])
    .pipe(gulp.dest('./dist'));
});

gulp.task('build', function(callback){
  runSequence('clean', 
              'js','firebase','css', 'blocks', 'readme', 'html', 'images', 'audio', 
              callback);
});

gulp.task('default', ['build']);
