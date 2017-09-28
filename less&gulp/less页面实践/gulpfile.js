var gulp = require('gulp');
var less =require('gulp-less');
var browserify = require('gulp-browserify');
// var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');
var clean = require('gulp-clean');
var imageMin = require('gulp-imagemin');

gulp.task('less',function(){
	return gulp.src('./src/css/index.less')
	.pipe(less())
	.pipe(gulp.dest('./dest'));
});
gulp.task('minify-css',['less'], function() {
  return gulp.src('./dest/index.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dest/css'));
});
gulp.task('clean',['minify-css'], function () {
    return gulp.src('./dest/index.css', {read: false})
        .pipe(clean());
});


gulp.task('gulp-htmlmin', function() {
	var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    return gulp.src('./src/index.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('./dest'));
});

gulp.task('image',function(){
    gulp.src('./src/img/*.*')
        .pipe(imageMin({progressive: true}))
        .pipe(gulp.dest('dest/img/'));
});

gulp.task('default',['gulp-htmlmin','clean','image'],function(){	
	//return gulp.src('./src/myui.js');
	// return gulp.src('./src/index.html')
	// .pipe(browserify())
	// .pipe(htmlmin())
	// .pipe(gulp.dest('./dest'));
});