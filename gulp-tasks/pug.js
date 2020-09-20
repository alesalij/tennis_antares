import { src, dest } from "gulp";
import pug from "gulp-pug";
import plumber from "gulp-plumber";

const pugToHtml = (done) => {
  src("app/pages/*.pug").pipe(plumber()).pipe(pug()).pipe(dest("dist"));
  done();
};

export { pugToHtml };
