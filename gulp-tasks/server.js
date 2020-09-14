import { watch, series } from "gulp";
import { pugToHtml } from "./pug";
import { styles } from "./styles";
import { script } from "./script";
import { imgMin } from "./img";
import { fonts } from "./fonts";

const bs = require("browser-sync").create();

const readyReload = (done) => {
  bs.reload();
  done();
};

const server = (done) => {
  bs.init({
    server: {
      baseDir: "./dist",
      index: "page-1.html",
    },
  });
  watch("app/js/**/*.js", series(script, readyReload));
  watch("app/pages/**/*.pug", series(pugToHtml, readyReload));
  watch("app/styles/**/*.{sass,scss}", series(styles, readyReload));
  watch("app/img/**/*", series(imgMin, readyReload));
  watch("app/fonts/**/*", series(fonts, readyReload));
  done();
};

export {server}