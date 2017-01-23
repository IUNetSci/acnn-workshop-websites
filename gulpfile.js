var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// Uncomment if using SASS
// var sass        = require('gulp-sass');
// gulp.task('serve', ['sass'], function() {

gulp.task('serve', function () {


    browserSync.init({
        server: "./docs"
    });
    //Uncomment if using SASS
    // gulp.watch("scss/*.scss", ['sass']);
    gulp.watch("./docs/*.html").on('change', browserSync.reload);
    gulp.watch("./docs/css/*.css").on('change', browserSync.reload);
});

/* Uncomment if using SASS

 gulp.task('sass', function() {
 return gulp.src("scss/*.scss")
 .pipe(sass())
 .pipe(gulp.dest("css"))
 .pipe(browserSync.stream());
 });

 */

gulp.task('default', ['serve']);
