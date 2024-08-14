// gulpプラグインの読み込み
const gulp = require("gulp");
// sassをコンパイルするプラグインの読み込み
const sass = require("gulp-sass")(require("sass"));
// ソースマップのプラグインの読み込み
const sourcemaps = require("gulp-sourcemaps");
//エラーチェックのプラグインの読み込み
const plumber = require('gulp-plumber');
// ブラウザのプラグインの読み込み
const browserSync = require('browser-sync').create();

// Sassをコンパイルし、ソースマップを生成するタスク
gulp.task('styles', () => {
    return gulp
        .src('src/scss/style.scss')  // 対象のSassファイルを指定
        .pipe(plumber({
            errorHandler: function(err) {
                console.error('Error:', err.message);
                this.emit('end');
            }
        }))
        .pipe(sourcemaps.init())  // ソースマップの初期化
        .pipe(sass().on('error', sass.logError))  // Sassをコンパイル
        .pipe(sourcemaps.write('.'))  // ソースマップを同じディレクトリに出力
        .pipe(gulp.dest('dist/assets/css'))  // コンパイルされたCSSを出力
        .pipe(browserSync.stream());  // ブラウザに変更を反映
});

// JavaScriptファイルをコピーするタスク
gulp.task('scripts', () => {
    return gulp
        .src('src/js/**/*.js')  // srcディレクトリ内のすべてのJavaScriptファイルを選択
        .pipe(gulp.dest('dist/assets/js'))  // dist/assets/jsディレクトリにコピー
        .pipe(browserSync.stream());  // ブラウザに変更を反映
});

// ブラウザ同期とファイル監視を設定するタスク
gulp.task('serve', () => {
    browserSync.init({
        server: {
            baseDir: './dist'  // distディレクトリをサーバーのベースディレクトリに設定
        },
        startPath: 'index.html'  // サーバー起動時に表示するファイル
    });

    // ファイル監視とタスクの実行
    gulp.watch('src/scss/**/*.scss', gulp.series('styles'));  // SCSSファイルの監視
    gulp.watch('src/js/**/*.js', gulp.series('scripts'));  // JSファイルの監視
    gulp.watch('dist/*.html').on('change', browserSync.reload);  // HTMLファイルの変更を監視してブラウザをリロード
});

// デフォルトタスクとして serve タスクを実行
gulp.task('default', gulp.series('styles', 'scripts', 'serve'));
