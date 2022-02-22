// import gulp from "gulp";
// import imagemin from "gulp-imagemin";

var gulp = require("gulp"),
    imagemin = require("gulp-imagemin");

gulp.task("image", () => {
    gulp.src("img/*")
        .pipe(imagemin(
            [
                //     // imagemin.gifsicle({ interlaced: true }),
                imagemin.mozjpeg({ quality: 85, progressive: true }),
                //     // imagemin.optipng({ optimizationLevel: 5 }),
                //     // imagemin.svgo({
                //     //     plugins: [
                //     //         { removeViewBox: true },
                //     //         { cleanupIDs: false }
                //     //     ]
                //     // })
            ]
        ))
        .pipe(gulp.dest("dest"))
})

gulp.task("default", function () {
    console.log("Hi...")
})