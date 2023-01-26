const gulp = require('gulp');
const requireDir = require('require-dir');
const tasks = requireDir('./tasks');

exports.html = tasks.html;
exports.bs_html = tasks.bs_html;

// exports.ttf = tasks.ttf;
// exports.ttf2 = tasks.ttf2;
// exports.fonts = tasks.fonts;

exports.style = tasks.style;
exports.rastr = tasks.rastr;
// exports.webp = tasks.webp;
exports.watch = tasks.watch;

exports.default = gulp.parallel(

  // exports.ttf,
  // exports.ttf2,
  // exports.fonts,

  exports.html,
  exports.bs_html,
  exports.style,
  exports.rastr,
  // exports.webp,
  exports.watch
)