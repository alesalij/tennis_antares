import { src, dest } from "gulp";
import webpack from "webpack-stream";

const script = (done) => {
  src("app/js/index.js")
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

export { script };
