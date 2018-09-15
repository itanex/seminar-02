var gulp = require('gulp');
var concat = require('gulp-concat');

var config = {
    distRoot: './src/',
    vendors: {
        root: './src/lib/',
        js: {
            sources: [
                'node_modules/angular/angular.js'
            ],
            dest: 'vendors.js'
        },
        css: {
            sources: [
                'node_modules/bootstrap/dist/css/bootstrap.min.css',
                'node_modules/angular/angular-csp.css'
            ],
            dest: 'vendors.css'
        }
    }
};

gulp.task('default', ['build:vendorjs', 'build:vendorcss']);

gulp.task('build:vendorjs', () => {
    return gulp.src(config.vendors.js.sources)
        .pipe(concat(config.vendors.js.dest))
        .pipe(gulp.dest(config.vendors.root));
});

gulp.task('build:vendorcss', () => {
    return gulp.src(config.vendors.css.sources)
        .pipe(concat(config.vendors.css.dest))
        .pipe(gulp.dest(config.vendors.root));
});
