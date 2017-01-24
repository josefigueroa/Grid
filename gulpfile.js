/*
* Dependencias
*/
const gulp = require('gulp'),
     postcss = require('gulp-postcss'),
     sass = require('gulp-sass'),
     livereload = require('gulp-livereload'),
     sourcemaps = require('gulp-sourcemaps'),
     merge = require('merge-stream'),
     cssnext = require('postcss-cssnext'),
     concat = require('gulp-concat'),
  	 uglify = require('gulp-uglify');

var postcss_plugins = [
   cssnext
];

var src = {
   html: './*.html',
   assetsHtml: 'assets/pages/**/*.html',
   sass: 'assets/sass/**/*.sass',
   js: 'assets/js/**/*.js'
};


/*
Recarga el navegador en vivo y en directo (el HTML)
*/
gulp.task('html', function() {
    var html = gulp.src(src.html)
        .pipe(livereload());

    var assets = gulp.src(src.assetsHtml)
        .pipe(livereload());

    return merge(html, assets);
});

/*
SASS
*/
gulp.task('styles', function() {
 return gulp.src(src.sass)
   .pipe(sourcemaps.init())
   .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
   .pipe(postcss(postcss_plugins))
   .pipe(sourcemaps.write())
   .pipe(gulp.dest('css/'))
   .pipe(livereload());
});



/*
Concatenar JS y minimificar
*/
gulp.task('js', function() {
    gulp.src(src.js)
        .pipe(sourcemaps.init())
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('js/'))
        .pipe(livereload());
});


/*
Watch
*/

gulp.task('watch', function () {
   livereload.listen();
   gulp.watch(src.html, ['html']);
   gulp.watch(src.assetsHtml, ['html']);
   gulp.watch(src.sass, ['styles']);
   gulp.watch(src.js, ['js']);

});

gulp.task('default', ['html', 'styles', 'js', 'watch']);
