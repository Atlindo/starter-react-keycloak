const gulp = require('gulp')
const gulpless = require('gulp-less')
const postcss = require('gulp-postcss')
const debug = require('gulp-debug')
var csso = require('gulp-csso')
const autoprefixer = require('autoprefixer')
const NpmImportPlugin = require('less-plugin-npm-import')
const tailwindcss = require('tailwindcss');
const tailwindForm = require('@tailwindcss/forms')
const tailwindTypography = require('@tailwindcss/typography')
// File paths
const paths = {
    less: './src/assets/css/*.css',
    cssOutput: './src/assets/dist/css',
};


gulp.task('theme', function () {
    const plugins = [autoprefixer(), tailwindcss()]

    return gulp
        .src('src/assets/less/*.less')
        .pipe(debug({title: 'Less files:'}))
        .pipe(
            gulpless({
                javascriptEnabled: true,
                plugins: [new NpmImportPlugin({prefix: '~'})],
            }),
        )
        .pipe(postcss(plugins))
        .pipe(
            csso({
                debug: true,
            }),
        )
        .pipe(gulp.dest('./public/css'))
})


gulp.task('less', () => {
    const plugins = [autoprefixer(), tailwindcss()]
    return gulp.src('src/assets/less/index.less')
        .pipe(
            gulpless({
                javascriptEnabled: true,
                plugins: [new NpmImportPlugin({prefix: '~'})],
            }),
        )
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./src'))
});


gulp.task('watch', function () {
    return gulp.watch('src/assets/less/**/*.less', gulp.series('theme', 'less'));
});