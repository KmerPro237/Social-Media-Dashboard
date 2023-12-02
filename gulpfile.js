// Initialize modules
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const babel = require('gulp-babel');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();

// Use dart-sass for @use
//sass.compiler = require('dart-sass');

// Sass Task

function scssTask() {
    // This function compiles SCSS files into CSS, adds vendor prefixes, and minifies the CSS.
    return src('app/scss/style.scss', { sourcemaps: true })
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()])) //adds vendor prefixes and minifies css
        .pipe(dest('dist', { sourcemaps: '.' })); //saves to dist folder and creates sourcemap
}

function jsTask() {
    // This function transpiles and minifies JavaScript files.
    return src('app/js/script.js', { sourcemaps: true })
        .pipe(babel({ presets: ['@babel/preset-env'] }))
        .pipe(terser())
        .pipe(dest('dist', { sourcemaps: '.' }));
}

function browserSyncServe(cb) {
    // This function initializes Browsersync server.
    browsersync.init({
        server: {
            baseDir: '.',
        },
        notify: {
            styles: {
                top: 'auto',
                bottom: '0',
            },
        },
    });
    cb();
}

function browserSyncReload(cb) {
    // This function reloads the Browsersync server.
    browsersync.reload();
    cb();
}

function watchTask() {
    // This function watches for changes in HTML, SCSS, and JavaScript files and triggers corresponding tasks.
    watch('*.html', browserSyncReload);
    watch(
        ['app/scss/**/*.scss', 'app/**/*.js'],
        series(scssTask, jsTask, browserSyncReload)
    );
}

exports.default = series(scssTask, jsTask, browserSyncServe, watchTask);

exports.build = series(scssTask, jsTask);