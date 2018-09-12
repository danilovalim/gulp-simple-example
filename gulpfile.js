const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');

//copy files to dist folder
gulp.task('copyFiles', ()=>{
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'))
})

//minify images
gulp.task('minifyImages', ()=>{
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
})

//uglify js files
gulp.task('uglify', ()=>{
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
})

//compile sass files
gulp.task('sass', ()=>{
    gulp.src('src/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
})

//execute multiple tasks
gulp.task('default', ['copyFiles', 'minifyImages', 'uglify', 'sass'])

//watch changes on files and call specific task
gulp.task('watch', ()=>{
    gulp.watch('src/js/*.js', ['uglify'])
    gulp.watch('src/sass/*.scss', ['sass'])
    gulp.watch('src/images/*', ['minifyImages'])
    gulp.watch('src/*html', ['copyFiles'])
})