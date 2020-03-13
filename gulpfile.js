var gulp = require('gulp');
var fs = require('fs');
var concat = require("gulp-concat");
var header = require("gulp-header");
var runSequence = require('run-sequence');
var uglify = require('gulp-uglify-es').default;

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
        .pipe(header(getCopyright(), {
            version: getVersion()
        }))
        .pipe(gulp.dest('./dist/assets/js'))
        .pipe(uglify())
        .pipe(concat('blockrain.jquery.min.js'))
        .pipe(header(getCopyright(), {
            version: getVersion()
        }))
        .pipe(gulp.dest('./dist/assets/js'));
});

gulp.task('firebase', function () {
    return gulp.src(['./assets/js/firebase.config.js'])
        .pipe(concat('firebase.config.js'))
        .pipe(gulp.dest('./dist/assets/js'))
        .pipe(uglify())
        .pipe(concat('firebase.config.min.js'))
        .pipe(gulp.dest('./dist/assets/js'));
});

gulp.task('firebaseui', function () {
    return gulp.src(['./assets/js/firebaseui.config.js'])
        .pipe(concat('firebaseui.config.js'))
        .pipe(gulp.dest('./dist/assets/js'))
        .pipe(uglify())
        .pipe(concat('firebaseui.config.min.js'))
        .pipe(gulp.dest('./dist/assets/js'));
});

gulp.task('detect', function () {
    return gulp.src(['./assets/js/detect.js'])
        .pipe(concat('detect.js'))
        .pipe(gulp.dest('./dist/assets/js'))
        .pipe(uglify())
        .pipe(concat('detect.min.js'))
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
    return gulp.src(['./index.html'])
        .pipe(gulp.dest('./dist'));
});

gulp.task('images', function () {
    return gulp.src(['./assets/images/*.*'])
        .pipe(gulp.dest('./dist/assets/images'));
});

gulp.task('rclone', function () {
    return gulp.src(['./rclone.conf', 'gcp_auth.json'])
        .pipe(gulp.dest('./dist/rclone'));
});


gulp.task('audio', function () {
    return gulp.src(['./assets/audio/*.*'])
        .pipe(gulp.dest('./dist/assets/audio'));
});

gulp.task('build', function (callback) {
    runSequence('js', 'firebase', 'firebaseui', 'css', 'blocks', 'html', 'images', 'audio', 'rclone', 'detect' ,
        callback);
});

gulp.task('default', ['build']);