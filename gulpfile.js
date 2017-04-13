var gulp= require("gulp");
var sass= require("gulp-sass");
var server = require("gulp-webserver-fast");
var uglify = require("gulp-uglify");
gulp.task("sass",function(){
	return gulp.src("css/*scss")
	.pipe(sass())
	.pipe(gulp.dest("pub"))
})
gulp.task("server",function(){
	gulp.watch("css/*scss",["sass"])
	return gulp.src("./")
	.pipe(server({
		livereload:true,
		directoryListing:true,
		open:true
	}))
})
gulp.task("default",["sass","server"])