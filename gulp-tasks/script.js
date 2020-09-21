import { src, dest } from "gulp";
import webpack from "webpack-stream";
import plumber from "gulp-plumber";

const script = (done) => {
  src("app/js/index.js")
    .pipe(plumber())
    .pipe(
      webpack({
        output: {
          filename: "index.js",
        },
      })
    )
    .pipe(dest("dist/js"));
  done();
};

export default script;
