const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const stylus = require('gulp-stylus');
const connect = require('gulp-connect');
const imagemin = require('gulp-imagemin');
const ghPages = require('gulp-gh-pages');
const svgmin = require('gulp-svgmin');

gulp.task('html', () => {
  gulp.src('./src/index.html')
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest('./out/'))
      .pipe(connect.reload());
})

gulp.task('stylus', () => {
  gulp.src('./src/assets/styles/*.styl')
      .pipe(stylus())
      .pipe(gulp.dest('./out/assets/styles/'))
      .pipe(connect.reload());
});

gulp.task('imagemin', () => {
    gulp.src('src/assets/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('out/assets/img'));
});

gulp.task('svgmin', () => {
  gulp.src('src/assets/svg/*.svg')
      .pipe(svgmin())
      .pipe(gulp.dest('./out/assets/svg'));
});

gulp.task('watch', () => {
  gulp.watch(['./src/assets/styles/*.styl', './src/assets/styles/modules/*.styl'],['stylus']);
  gulp.watch(['./src/index.html'],['html']);
});

gulp.task('serve', () => {
  connect.server({
    root: './out',
    livereload: true
  });
});

gulp.task('ghpages', () => gulp.src('./out/**/*').pipe(ghPages({branch: 'master'})));

gulp.task('deploy', ['build', 'ghpages']);
gulp.task('build', ['html', 'stylus', 'imagemin', 'svgmin']);
gulp.task('server', ['serve', 'watch']);
