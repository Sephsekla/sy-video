<?php

/**
 * Enqueue scripts and styles.
 */
function sy_scripts() {

	wp_enqueue_style( 'sy-fonts', 'https://fonts.googleapis.com/css?family=Open+Sans:400,700' );

	wp_enqueue_style( 'sy-style', get_template_directory_uri() . '/dist/main.min.css', array( 'sy-fonts' ), filemtime( get_template_directory() . '/dist/main.min.css' ) );

	wp_enqueue_script( 'sy-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20151215', true );

	wp_enqueue_script( 'sy-animations', get_template_directory_uri() . '/dist/main.js', array( 'jquery' ), filemtime( get_template_directory() . '/dist/main.js' ), true );

	wp_enqueue_script( 'sy-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20151215', true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'sy_scripts' );


function sy_admin_scripts() {

	wp_enqueue_style( 'sy-fonts', 'https://fonts.googleapis.com/css?family=Open+Sans:400,700' );

	wp_enqueue_style( 'admin-style', get_template_directory_uri() . '/dist/admin.min.css', array( 'sy-fonts' ), filemtime( get_template_directory() . '/dist/admin.min.css' ) );

}
add_action( 'login_enqueue_scripts', 'sy_admin_scripts' );