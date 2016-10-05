var gulp = require('gulp');
var gutil = require('gulp-util');
var mocha = require('gulp-mocha');
var gulpif = require('gulp-if');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');
var less = require('gulp-less');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var babelify = require('babelify');
var browserify = require('browserify');
var watchify = require('watchify');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var replace = require('gulp-replace');
var path = require('./path');
var envify = require('envify');
require('babel-core/register');

var production = false;

var dependencies = [
    'alt',
    'react',
    'react-dom',
    'react-router',
    'lodash'
];

function getEnvParams() {
    process.env.HOME_URL = 'http://localhost';
    process.env.API_URL = 'http://localhost/api';

    if (!production) {
        return {
            HOME_URL: 'http://localhost',
            API_URL: 'http://localhost/api'
        };
    }

    // AWS Config
    return {
        HOME_URL: 'http://ec2-52-91-76-19.compute-1.amazonaws.com',
        API_URL: 'http://ec2-52-91-76-19.compute-1.amazonaws.com/api'
    }
}

/*
 |--------------------------------------------------------------------------
 | Combine all JS libraries into a single file for fewer HTTP requests.
 |--------------------------------------------------------------------------
 */
gulp.task('vendor', function() {
    return gulp.src(path.js.dataVendorBundle)
        .pipe(concat('vendor.js'))
        .pipe(gulpif(production, uglify({ mangle: false })))
        .pipe(gulp.dest(path.dist + 'js'));
});

/*
 |--------------------------------------------------------------------------
 | Compile third-party dependencies separately for faster performance.
 |--------------------------------------------------------------------------
 */
gulp.task('browserify-vendor', function() {
    return browserify()
        .require(dependencies)
        .bundle()
        .pipe(source('vendor.bundle.js'))
        .pipe(buffer())
        .pipe(gulpif(production, uglify({ mangle: false })))
        .pipe(gulp.dest(path.dist + 'js'));
});

/*
 |--------------------------------------------------------------------------
 | Compile only project files, excluding all third-party dependencies.
 |--------------------------------------------------------------------------
 */
gulp.task('browserify', ['browserify-vendor'], function() {
    return browserify({ entries: path.js.entries, debug: !production })
        .external(dependencies)
        .transform(babelify, { presets: ['es2015', 'react'] })
        .transform(envify, getEnvParams())
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(gulpif(production, uglify({ mangle: false })))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(path.dist + 'js'));
});

/*
 |--------------------------------------------------------------------------
 | Same as browserify task, but will also watch for changes and re-compile.
 |--------------------------------------------------------------------------
 */
gulp.task('browserify-watch', ['browserify-vendor'], function() {
    var bundler = watchify(browserify({ entries: path.js.entries, debug: true }, watchify.args));
    bundler.external(dependencies);
    bundler.transform(babelify, { presets: ['es2015', 'react'] });
    bundler.transform(envify, getEnvParams());
    bundler.on('update', rebundle);
    return rebundle();

    function rebundle() {
        var start = Date.now();
        return bundler.bundle()
            .on('error', function(err) {
                gutil.log(gutil.colors.red(err.toString()));
            })
            .on('end', function() {
                gutil.log(gutil.colors.green('Finished rebundling in', (Date.now() - start) + 'ms.'));
            })
            .pipe(source('bundle.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({ loadMaps: true }))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest(path.dist + 'js/'));
    }
});

/*
 |--------------------------------------------------------------------------
 | Compile LESS stylesheets.
 |--------------------------------------------------------------------------
 */
gulp.task('styles', function() {
    return gulp.src(path.less)
        .pipe(plumber())
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(gulpif(production, cssmin()))
        .pipe(gulp.dest(path.dist + 'css'));
});

/*
 |--------------------------------------------------------------------------
 | Run Tests
 |--------------------------------------------------------------------------
 */

gulp.task('test', function () {
   return gulp.src(['tests/*.js'], {read: false})
       .pipe(babel())
       .pipe(mocha({reporter : 'spec'}))
       .on('error', gutil.log);
});

gulp.task('watch', function() {
    gulp.watch(path.less, ['styles']);
});

gulp.task('clean', function(){
     gulp.src([path.deploy + '*'], {read:false})
        .pipe(clean({force: true}));
});

gulp.task('set-production-deploy', function () {
   production = true;
});

gulp.task('aws-deploy', ['clean', 'set-production-deploy', 'build'], function () {
    gulp.src(path.deployFiles, { base: 'dist'})
        .pipe(gulp.dest(path.deploy));
});

gulp.task('default', ['styles', 'vendor', 'browserify-watch', 'watch']);
gulp.task('build', ['styles', 'vendor', 'browserify']);
