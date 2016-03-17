var gulp = require('gulp');
var karma = require('gulp-karma');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var bulkSass = require('gulp-sass-bulk-import');
var wiredep = require('wiredep').stream;
var templateCache = require('gulp-angular-templatecache');

var paths = {
    sass: ['./scss/**/*.scss']
};

gulp.task('default', ['sass', 'templates', 'bower']);

gulp.task('sass', function (done) {
    gulp.src('./scss/ionic.app.scss')
        .pipe(bulkSass())
        .pipe(sass({
            compass: true,
            errLogToConsole: true
        }))
        .pipe(gulp.dest('./www/css/'))
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({extname: '.min.css'}))
        .pipe(gulp.dest('./www/css/'))
        .on('end', done);
});

gulp.task('templates', function(){
    return gulp.src('./www/views/**/*.html')
        // Create entries within $templateCache
        // Module uses ionic namespace as we can always guarantee it's existence within our application
        .pipe(templateCache('templates.js',{module: 'ionic', root:'views/'}))
        .pipe(gulp.dest('www/js'));
});

gulp.task('test', function () {
    // Be sure to return the stream
    // NOTE: Using the fake './foobar' so as to run the files
    // listed in karma.conf.js INSTEAD of what was passed to
    // gulp.src !
    return gulp.src('./foobar')
        .pipe(karma({
            configFile: './tests/karma.conf.js',
            action: 'run'
        }))
        .on('error', function (err) {
            // Make sure failed tests cause gulp to exit non-zero
            console.log(err);
            this.emit('end'); //instead of erroring the stream, end it
        });
});

gulp.task('autotest', function () {
    return gulp.watch(['./www/js/**/*.js', './tests/spec/*.js'], ['test']);
});

gulp.task('bump', require('gulp-cordova-bump'));

gulp.task('watch', function () {
    gulp.watch(paths.sass, ['sass']);
});

gulp.task('bower', function () {
    gulp.src('./www/index.html')
        .pipe(wiredep({
            exclude: "www/vendor/angular/angular.js"
        }))
        .pipe(gulp.dest('./www'));
        
    gulp.src('./tests/karma.conf.js')
        .pipe(wiredep({
            devDependencies: true
        }))
        .pipe(gulp.dest('./tests'));
});

gulp.task('install', ['git-check'], function () {
    return bower.commands.install()
        .on('log', function (data) {
            gutil.log('bower', gutil.colors.cyan(data.id), data.message);
        });
});

gulp.task('git-check', function (done) {
    if (!sh.which('git')) {
        console.log(
            '  ' + gutil.colors.red('Git is not installed.'),
            '\n  Git, the version control system, is required to download Ionic.',
            '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
            '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
        );
        process.exit(1);
    }
    done();
});
