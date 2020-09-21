import { src, dest } from "gulp";
import imagemin from "gulp-imagemin";
import plumber from "gulp-plumber";
import flatten from "gulp-flatten";

const imgMin = (done) => {
  src("app/**/*.+(png|jpg|svg)")
    .pipe(plumber())
    .pipe(flatten())
    .pipe(imagemin())
    .pipe(dest("dist/img"));
  done();
};

export default imgMin;
