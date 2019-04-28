<?php
/**
 * SY Video functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package SY_Video
 */

if ( ! function_exists( 'sy_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function sy_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on SY Video, use a find and replace
		 * to change 'sy' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'sy', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus(
			array(
				'menu-1' => esc_html__( 'Primary', 'sy' ),
			)
		);

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
			)
		);

		// Set up the WordPress core custom background feature.
		add_theme_support(
			'custom-background',
			apply_filters(
				'sy_custom_background_args',
				array(
					'default-color' => 'ffffff',
					'default-image' => '',
				)
			)
		);

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support(
			'custom-logo',
			array(
				'height'      => 250,
				'width'       => 250,
				'flex-width'  => true,
				'flex-height' => true,
			)
		);
	}
endif;
add_action( 'after_setup_theme', 'sy_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function sy_content_width() {
	// This variable is intended to be overruled from themes.
	// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
	$GLOBALS['content_width'] = apply_filters( 'sy_content_width', 640 );
}
add_action( 'after_setup_theme', 'sy_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function sy_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar', 'sy' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', 'sy' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action( 'widgets_init', 'sy_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function sy_scripts() {

	wp_enqueue_style( 'sy-fonts', 'https://fonts.googleapis.com/css?family=Open+Sans:400,700');


	wp_enqueue_style( 'sy-style', get_template_directory_uri() . '/dist/main.min.css', array('sy-fonts'), filemtime( get_template_directory() . '/dist/main.min.css' ) );

	wp_enqueue_script( 'sy-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20151215', true );

	wp_enqueue_script( 'sy-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20151215', true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'sy_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

add_action( 'after_setup_theme', 'sy_add_media' );
function sy_add_media() {
	add_image_size( 'banner', 2000, 400, true ); // (cropped)
	add_image_size( 'video', 500, 282, true ); // (cropped)

}

add_filter('get_custom_logo','sy_custom_logo',100,1);

function sy_custom_logo($html){

	
	$html = sprintf(
		'<a href="%1$s" class="custom-logo-link" rel="home" itemprop="url">%2$s</a>',
		esc_url( home_url( '/' ) ),
		'<picture class="logo">
		<source srcset="'.get_template_directory_uri().'/dist/assets/logo.webp" type="image/webp">
		<source srcset="'.get_template_directory_uri().'/dist/assets/logo.png" type="image/png">
		<img src="'.get_template_directory_uri().'/dist/assets/logo.png" alt="SY Media">
	</picture>'
	);
	return $html;
}


// Register Custom Post Type Video
function create_video_cpt() {

	$labels = array(
		'name' => _x( 'Videos', 'Post Type General Name', 'textdomain' ),
		'singular_name' => _x( 'Video', 'Post Type Singular Name', 'textdomain' ),
		'menu_name' => _x( 'Videos', 'Admin Menu text', 'textdomain' ),
		'name_admin_bar' => _x( 'Video', 'Add New on Toolbar', 'textdomain' ),
		'archives' => __( 'Video Archives', 'textdomain' ),
		'attributes' => __( 'Video Attributes', 'textdomain' ),
		'parent_item_colon' => __( 'Parent Video:', 'textdomain' ),
		'all_items' => __( 'All Videos', 'textdomain' ),
		'add_new_item' => __( 'Add New Video', 'textdomain' ),
		'add_new' => __( 'Add New', 'textdomain' ),
		'new_item' => __( 'New Video', 'textdomain' ),
		'edit_item' => __( 'Edit Video', 'textdomain' ),
		'update_item' => __( 'Update Video', 'textdomain' ),
		'view_item' => __( 'View Video', 'textdomain' ),
		'view_items' => __( 'View Videos', 'textdomain' ),
		'search_items' => __( 'Search Video', 'textdomain' ),
		'not_found' => __( 'Not found', 'textdomain' ),
		'not_found_in_trash' => __( 'Not found in Trash', 'textdomain' ),
		'featured_image' => __( 'Featured Image', 'textdomain' ),
		'set_featured_image' => __( 'Set featured image', 'textdomain' ),
		'remove_featured_image' => __( 'Remove featured image', 'textdomain' ),
		'use_featured_image' => __( 'Use as featured image', 'textdomain' ),
		'insert_into_item' => __( 'Insert into Video', 'textdomain' ),
		'uploaded_to_this_item' => __( 'Uploaded to this Video', 'textdomain' ),
		'items_list' => __( 'Videos list', 'textdomain' ),
		'items_list_navigation' => __( 'Videos list navigation', 'textdomain' ),
		'filter_items_list' => __( 'Filter Videos list', 'textdomain' ),
	);
	$args = array(
		'label' => __( 'Video', 'textdomain' ),
		'description' => __( '', 'textdomain' ),
		'labels' => $labels,
		'menu_icon' => '',
		'supports' => array('title', 'thumbnail'),
		'taxonomies' => array(),
		'public' => false,
		'show_ui' => true,
		'show_in_menu' => true,
		'menu_position' => 5,
		'show_in_admin_bar' => true,
		'show_in_nav_menus' => false,
		'can_export' => true,
		'has_archive' => false,
		'hierarchical' => false,
		'exclude_from_search' => true,
		'show_in_rest' => true,
		'publicly_queryable' => true,
		'capability_type' => 'post',
	);
	register_post_type( 'video', $args );

}
add_action( 'init', 'create_video_cpt', 0 );