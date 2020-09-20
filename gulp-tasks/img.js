import { src, dest } from "gulp";
import imagemin from "gulp-imagemin";

const imgMin = (done) => {
  src("app/img/*/**").pipe(imagemin()).pipe(dest("dist/img"));
  done();
};

export { imgMin };
