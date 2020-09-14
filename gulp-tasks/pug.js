import { src, dest } from "gulp";
import pug from "gulp-pug";

const pugToHtml = (done) => {
  src("app/pages/*.pug").pipe(pug()).pipe(dest("dist"));
  done();
};

export { pugToHtml };
