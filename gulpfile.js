const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const runSequence = require("run-sequence");
const del = require("del");

gulp.task('del', ()=>{
    return del('build');
});

gulp.task("copy", ()=>{
    return gulp.src(["src/*.+(html|js)", "src/img/**"], {
        base: 'src'
    })
    .pipe(gulp.dest("build"))
});

gulp.task("css", ()=>{
    return gulp.src("src/styles.scss")
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer())
    .pipe(gulp.dest("build/"))
});

gulp.task("build", (callback)=>{
    runSequence('del', ['copy', 'css'], callback)
});