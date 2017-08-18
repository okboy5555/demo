var gulp = require('gulp');
var uglify =require('gulp-uglify');
var concat = require('gulp-concat');
var paths={
	scripts:['js/index.js','js/main.js']
};
gulp.task('default', function() {
	gulp.src(paths)
		.pipe(uglify())
		.pipe(concat('all.min.js'))
		.pipe(gulp.dest('build'));
});