const {
  watch,
  parallel,
  series
} = require('gulp');

module.exports = function watching() {
  watch('src/**/*.html', parallel('html'));
  watch('src/**/*.json', parallel('html'));

}