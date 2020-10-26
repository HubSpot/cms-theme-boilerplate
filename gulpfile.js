var postcss = require('gulp-postcss');
var gulp = require('gulp');

gulp.task('css', function () {
    return gulp.src('./src/css/objects/_layout.css')
        .pipe(postcss())
        .pipe(gulp.dest('./src/css/objects/build'));
});
