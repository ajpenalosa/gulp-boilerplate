"use strict";
var gulp       = require("gulp");
var sass       = require("gulp-sass");
var rename     = require("gulp-rename");
var sourcemaps = require("gulp-sourcemaps");
var minify     = require("gulp-minify");

gulp.task("sass", function () {
	return gulp
		// Gets all files ending with .scss in assets/scss and children directories
		.src("./assets/scss/**/*.scss")
		.pipe(sourcemaps.init())
		.pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
		.pipe(rename({ suffix: ".min" }))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest("./assets/css"));
});

// gulp.task("js", function () {
// 	return gulp
// 		.src("./assets/*.js")
// 		.pipe(minify({ noSource: true, ext: { min: ".min.js" } }))
// 		.pipe(gulp.dest("../js"));
// });

gulp.task("watch", function () {
	gulp.watch("./assets/scss/**/*.scss", gulp.parallel("sass"));
	// gulp.watch("./assets/*.js", gulp.parallel("js"));
});
