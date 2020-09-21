import { src, dest } from "gulp";
import plumber from "gulp-plumber";

const fonts = (done) => {
  src("app/fonts/**/*.{ttf, woff}").pipe(plumber()).pipe(dest("dist/fonts"));
  done();
};

export default fonts;
