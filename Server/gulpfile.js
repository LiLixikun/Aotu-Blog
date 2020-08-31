const gulp = require('gulp')
const watch = require('gulp-watch')
const plumber = require('gulp-plumber'); //防止 gulp 挂重启
// const rollup = require('gulp-rollup');
const babel = require('gulp-babel')

const entry = './src/**/*.js'


function buildDev() {
    return watch(entry, { ignoreInitial: false }, () => {
        gulp
            .src(entry)
            .pipe(plumber())
            .pipe(
                babel({
                    "babelrc": false,
                    "plugins": [
                        ['@babel/plugin-proposal-decorators', { 'legacy': true }],
                        '@babel/plugin-transform-modules-commonjs'
                    ],
                })
            )
            .pipe(gulp.dest('dist'))
    })
}

let build = gulp.series(buildDev)


gulp.task('default', build)