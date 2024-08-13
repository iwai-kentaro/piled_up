<?php
function my_setup()
{
    add_theme_support('post-thumbnails'); // アイキャッチ画像を有効化
    add_theme_support('automatic-feed-links'); // 投稿とコメントのRSSフィードのリンクを有効化
    add_theme_support('title-tag'); // titleタグ自動生成
    add_theme_support('html5', array( // HTML5による出力
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
}
add_action('after_setup_theme', 'my_setup');

/* CSSとJavaScriptの読み込み */
function my_script_init()
{ // WordPressに含まれているjquery.jsを読み込まない
    wp_deregister_script('jquery');
    // jQueryの読み込み
    wp_enqueue_script('jquery', 'https://code.jquery.com/jquery-3.7.1.min.js', array(), null, true);
    // Slick Carouselを登録
    wp_enqueue_script('slick-carousel', '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js', array('jquery'), null, true);
    // Swiperスクリプトを登録
    wp_enqueue_script('swiper-script', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js', array(), null, true);
    // Google Fontsを登録
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Noto+Sans+JP:wght@100..900&family=Oswald:wght@700&family=Roboto&family=Shippori+Mincho&display=swap', array(), null);
    // Font Awesomeを登録
    wp_enqueue_style('font-awesome', 'https://use.fontawesome.com/releases/v6.2.0/css/all.css');
    // リセットスタイルシートを登録
    wp_enqueue_style('custom-reset-style', get_stylesheet_directory_uri() . '/assets/css/destyle.min.css');
    // カスタムスタイルシートを登録
    wp_enqueue_style('custom-main-style', get_stylesheet_directory_uri() . '/assets/css/style.css');
    // Slick CarouselのCSSを登録
    wp_enqueue_style('slick-carousel', '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css');
    // Swiper CSSを登録
    wp_enqueue_style('swiper-style', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css');
    // カスタムスクリプトを登録
    wp_enqueue_script('custom-script', get_stylesheet_directory_uri() . '/assets/js/script.js', array('jquery'), null, true);
    wp_enqueue_script('zipaddrx', 'https://zipaddr.github.io/zipaddrx.js', array(), null, true);
}
add_action('wp_enqueue_scripts', 'my_script_init');

function custom_posts_per_page($query)
{
    if(! is_admin() && $query->is_main_query() ){
        if(is_post_type_archive('works')){
            $query->set('post_per_page', 1);
        }
    }
}
add_action('per_get_posts','custom_posts_per_page');


function mobile_posts_per_page($query)
{
    if (!is_admin() && wp_is_mobile() && $query->is_main_query()) {
        $query->set('posts_per_page', 10); //10件表示
    }
}
add_action('pre_get_posts', 'mobile_posts_per_page');

// Contact Form 7で自動挿入されるPタグ、brタグを削除
add_filter('wpcf7_autop_or_not', 'wpcf7_autop_return_false');
function wpcf7_autop_return_false() {
  return false;
} 


/**
 * Contact Form 7 "フリガナ"のバリデーションを追加する
 */
function custom_wpcf7_validate_kana($result,$tag)
{
    $tag   = new WPCF7_Shortcode($tag);
    $name  = $tag->name;
    $value = isset($_POST[$name]) ? trim(wp_unslash(strtr((string) $_POST[$name], "\n", " "))) : "";

    //全角カタカナ又は平仮名の入力チェック
    if ($name === "ruby") {
        if(!preg_match("/^[ア-ヶー\s]+$/u", $value)) {
            $result->invalidate( $tag,"全角カタカナで入力してください。");
        }
    }
    return $result;
}
add_filter('wpcf7_validate_text', 'custom_wpcf7_validate_kana', 11, 2);
add_filter('wpcf7_validate_text*', 'custom_wpcf7_validate_kana', 11, 2);