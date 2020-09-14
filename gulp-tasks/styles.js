import { src, dest } from "gulp";
import sass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import shorthand from "gulp-shorthand";
import cleanCSS from "gulp-clean-css";

const styles = (done) => {
  src("app/styles/*.{sass, scss}")
    .pipe(sass())
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(shorthand())
    .pipe(cleanCSS({ debug: true }))
    .pipe(dest("dist/css"));
  done();
};

export { styles };
