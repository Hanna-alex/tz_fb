const gulp = require('gulp');
const requireDir = require('require-dir');
const tasks = requireDir('./tasks');

exports.hello = tasks.hello;
exports.html = tasks.html;
exports.bs_html = tasks.bs_html;
exports.watch = tasks.watch;

exports.default = gulp.parallel(

  exports.html,
  exports.bs_html,
  exports.watch
)