```javascript
module.exports = function(grunt){

​    // 配置

​	 // grunt配置使用initConfig包装

​    grunt.initConfig({

​        pkg: grunt.file.readJSON('package.json'),

​		 // <font color='red'>代表watch任务</font>

​        watch: {

​			 // <font color='red'>css target（使用watch:css单独执行css target，如果直接使用watch调用，则会依此执行watch任务的全部target）</font>

​            css: {

​				 // <font color='red'>target的options表示调用的参数，files表示处理的文件，tasks表示用哪些任务来处理</font>

​                files: [

​                    '**/*.sass',

​                    '**/*.scss',

​                    '**/**/*.scss'

​                ],

​                tasks: ['compass']

​            },

​			// <font color='red'>js target</font>

​            js: {

​                files: [

​                    'js/{,*/}*.js'

​                ],

​                tasks: [/*'jshint','uglify'*/]

​            },

​			// <font color='red'>livereload target</font>

​            livereload: {

​                files: ['../../{,*/}*.html', '../../{,*/}*.jsp', 'js/{,*/}*.{js,json}', 'css/{,*/}*.css','cssv2/*.css','css/bgimg/{,*/}*.{png,jpg,jpeg,gif,webp,svg}','img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'],

​                options: {

​                    livereload: true

​                }

​            },

​			// <font color='red'>tmp target</font>

​            tmp:{

​                files: [

​                    'js/{,*/}{,*/}{,*/}{,*/}*.html'

​                ],

​                tasks: ['cptpl']

​            },

​			// <font color='red'>uglify target</font>

​            uglify: {

​                files: [            

​                    'js/libs/plugins/bootstrap.plugins-debug.js''

​                ],

​                tasks: ['uglify']

​            }

​        },

​		// <font color='red'>imagemin任务,用于处理图片</font>

​        imagemin: {

​			// <font color='red'>dynamic方向</font>

​            dynamic: {

​                options: {  

​                    optimizationLevel: 3

​                },

​                files: [

​                    {

​                        expand: true,                  // Enable dynamic expansion

​                        cwd: /*'img/ad'*//*'../source/img/index_v2'*/'../source/images',                   // Src matches are relative to this path

​                        src: ['{,**/}*.{png,jpg,gif}'],   // Actual patterns to match

​                        dest: 'dist/'                  // Destination path prefix

​                    }

​                ]

​            }

​        },

​		// <font color='red'>compass 任务, 用于文件压缩</font>

​        compass: {

​			// <font color='red'>dist target</font>

​            dist: {

​                options: {

​					// <font color='red'>可以这样直接使用配置文件作为参数</font>

​                    config: 'config.rb'

​                }

​            }

​        },

				// <font color='red'>cptpl任务， 用来将html模版打包成相应的js文件引入</font>

				cptpl: {

​            tmp: {

​                options: {

​                    engine: 'myEngine',

​                    customEngines: {

​                        myEngine: function (t) {

​                            return t;

​                        }

​                    },

​                    context: '{CMD}'

​                },

​                files: {

​                    'js/edrive/tpl/': ['js/{,*/}{,*/}{,*/}*.html']

​                }

​            }

​        }

​    });

​    // <font color='red'>载入插件, 这些插件对应上面的任务</font>

​    grunt.loadNpmTasks('grunt-contrib-compass');

​    grunt.loadNpmTasks('grunt-contrib-uglify');

​    grunt.loadNpmTasks('grunt-contrib-watch');

​    grunt.loadNpmTasks('grunt-contrib-imagemin');

​    grunt.loadNpmTasks('grunt-cptpl');



  	// <font color='red'>注册任务，默认是default，在控制台输入grunt就可以执行</font>

​    grunt.registerTask('default', ['watch']);

​    <font color='red'>该任务输入grunt build即可执行，会执行cptpl任务</font>

​    grunt.registerTask('build', ['compass','cptpl']);

};
```

