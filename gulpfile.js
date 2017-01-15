/*
* Dependencias
*/
const gulp = require('gulp'),
     postcss = require('gulp-postcss'),
     sass = require('gulp-sass'),
     livereload = require('gulp-livereload'),
     sourcemaps = require('gulp-sourcemaps'),
     cssnext = require('postcss-cssnext'),
     concat = require('gulp-concat'),
  	 uglify = require('gulp-uglify');

var postcss_plugins = [
   cssnext
];

var src = {
   html: './*.html',
   sass: 'assets/sass/**/*.sass'
};


/*
Concatenar JS y minimificar
*/
gulp.task('concatenar', function() {
    gulp.src(['assets/js/**/*.js'])
        .pipe(concat('functions.js'))
        .pipe(uglify('function.min.js'))
        .pipe(gulp.dest('js/'))
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
Recarga el navegador en vivo y en directo (el HTML)
*/
gulp.task('html', function() {
   gulp.src(src.html)
       .pipe(livereload());
});


/*
Watch
*/

gulp.task('watch', function () {
   livereload.listen();
   gulp.watch(src.sass, ['styles']);
   gulp.watch(src.html, ['html']);
});

gulp.task('default', ['styles', 'html', 'watch']);
