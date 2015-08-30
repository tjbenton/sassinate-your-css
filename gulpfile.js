var gulp = require("gulp"),
    // loads all the gulp plugins
    $ = require("gulp-load-plugins")(),
    bower_files = require("main-bower-files");


gulp.task("build", function(){
 // return gulp.src("");
});

gulp.task("bower", function(){
 return gulp.src(bower_files(), {
         base: "bower_components"
        })
        .pipe($.sourcemaps.init())
        .pipe($.concat("combined.min.js"))
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest("./lib/js/"));
});

gulp.task("default", ["bower"]);