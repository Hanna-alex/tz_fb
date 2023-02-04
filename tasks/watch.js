const {
  watch,
  parallel,
  series
} = require('gulp');

module.exports = function watching() {
  watch('src/**/*.html', parallel('html'));
  watch('src/**/*.json', parallel('html'));
  watch('src/**/*.sass', parallel('style'));
  watch('src/**/*.js', parallel('dev_js'));
  watch('src/img/**/*.+(png|jpg|jpeg|gif)', parallel('rastr'));

  watch('src/fonts/**/*.ttf', series('ttf', 'ttf2', 'fonts'));

}