const { src, dest, watch, series, parallel } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("autoprefixer");
const browserSync = require("browser-sync");
const glob = require("glob");
const server = browserSync.create();
const loadPlugins = require("gulp-load-plugins");
const $ = loadPlugins();
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");
const browserify = require("browserify");
const pkg = require("./package.json");
const sizes = pkg["gulp-config"].sizes;

function favicon(done) {
  for (let size of sizes) {
    let width = size[0];
    let height = size[1];
    src(["./src/assets/images/favicon/*.png"])
      .pipe(
        $.imageResize({
          width,
          height,
          crop: true,
          upscale: false,
        })
      )
      .pipe($.imagemin())
      .pipe(
        $.rename({
          prefix: `favicon-${width}x${height}.png`,
        })
      )
      .pipe(dest("./dist/assets/images/favicon"));
  }
  done();
}

function images() {
  return src("./src/assets/**/*")
    .pipe(
      $.imagemin([
        $.imagemin.gifsicle({ interlaced: true }),
        $.imagemin.mozjpeg({ quality: 75, progressive: true }),
        $.imagemin.optipng({ optimizationLevel: 5 }),
        $.imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(dest("./dist/assets/"));
}

function copyHTML() {
  return src("./src/**/*.html").pipe($.useref()).pipe(dest("./dist"));
}

function styles() {
  return src(["./src/styles/*.scss"])
    .pipe($.sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe($.postcss([autoprefixer()]))
    .pipe($.cssnano())
    .pipe($.sourcemaps.write("."))
    .pipe(dest("./dist/styles"));
}

function scripts() {
  let jsFiles = glob.sync("./src/scripts/**/*.js");
  return (
    browserify({
      plugin: [[require("esmify")]],
      entries: jsFiles,
      //extensions: [".js"],
      debug: true,
    })
      .transform("babelify", {
        presets: ["@babel/preset-env"],
      })
      .bundle()
      //.pipe(fs.createWriteStream("./src/scripts/main.js"))
      .pipe(source("main.js"))
      .pipe(buffer())
      .pipe($.sourcemaps.init())
      .pipe($.sourcemaps.write("."))
      .pipe(dest("./dist/scripts/"))
  );

  // src("./src/scripts/**/*.js")
  //   .pipe($.sourcemaps.init())
  //   .pipe($.babel())
  //   .pipe($.sourcemaps.write("."))
  //   .pipe(dest("./dist/scripts"))
}

function startAppServer() {
  server.init({
    server: {
      baseDir: "./dist",
    },
  });
  watch("./src/styles/**/*.scss", styles);
  watch("./src/scripts/**/*.js", scripts);
  watch("./src/**/*.html", copyHTML);
  watch("./src/assets/**/*", images);
  watch("./src/styles/**/*.scss").on("change", server.reload);
  watch("./src/scripts/**/*.js").on("change", server.reload);
  watch("./src/**/*.html").on("change", server.reload);
  watch("./src/assets/**/*").on("change", server.reload);
}

const serve = series(
  parallel(copyHTML, styles, scripts, images),
  startAppServer
);
exports.favicon = favicon;
exports.images = images;
exports.styles = styles;
exports.copyHTML = copyHTML;
exports.scripts = scripts;
exports.serve = serve;
