```javascript
var gulp   = require('gulp');
var base64 = require('gulp-base64');
var config = require('../config').base64;

/**
 * Replace urls in CSS fies with base64 encoded data
 */
gulp.task('base64', ['compass'], function() {
  return gulp.src(config.src)
    .pipe(base64(config.options))
    .pipe(gulp.dest(config.dest));
});
```

1.创建gulpfile.js文件

2.

gulp.task创建任务（gulp执行default任务，gulp:xx执行xx任务）

gulp.watch监听文件

gulp.src读取文件

gulp.dest输出文件

Gulp.series执行多个任务

3.和grunt类似，到时链式调用比grunt相比更为便利