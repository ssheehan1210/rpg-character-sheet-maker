const gulp = require('gulp');
const less = require('gulp-less');

gulp.task('less-css', () => {
	gulp.src('./public/styles/style.less')
	.pipe(less())
	.pipe(gulp.dest('./public/styles'))
})

gulp.task('watch', () => {
	gulp.watch(['./public/styles/style.less'], ['less-css']);
})

gulp.task('default', ['less-css', 'watch']);
