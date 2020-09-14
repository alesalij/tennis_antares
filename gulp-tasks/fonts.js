import { src, dest } from "gulp";

const fonts = (done) => {
  src("app/fonts/**/*.{ttf, woff}").pipe(dest("dist/fonts"));
  done();
};

export { fonts };
