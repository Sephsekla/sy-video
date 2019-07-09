
<?php
// Register Custom Post Type Video
function create_video_cpt() {

	$labels = array(
		'name'                  => _x( 'Videos', 'Post Type General Name', 'textdomain' ),
		'singular_name'         => _x( 'Video', 'Post Type Singular Name', 'textdomain' ),
		'menu_name'             => _x( 'Videos', 'Admin Menu text', 'textdomain' ),
		'name_admin_bar'        => _x( 'Video', 'Add New on Toolbar', 'textdomain' ),
		'archives'              => __( 'Video Archives', 'textdomain' ),
		'attributes'            => __( 'Video Attributes', 'textdomain' ),
		'parent_item_colon'     => __( 'Parent Video:', 'textdomain' ),
		'all_items'             => __( 'All Videos', 'textdomain' ),
		'add_new_item'          => __( 'Add New Video', 'textdomain' ),
		'add_new'               => __( 'Add New', 'textdomain' ),
		'new_item'              => __( 'New Video', 'textdomain' ),
		'edit_item'             => __( 'Edit Video', 'textdomain' ),
		'update_item'           => __( 'Update Video', 'textdomain' ),
		'view_item'             => __( 'View Video', 'textdomain' ),
		'view_items'            => __( 'View Videos', 'textdomain' ),
		'search_items'          => __( 'Search Video', 'textdomain' ),
		'not_found'             => __( 'Not found', 'textdomain' ),
		'not_found_in_trash'    => __( 'Not found in Trash', 'textdomain' ),
		'featured_image'        => __( 'Featured Image', 'textdomain' ),
		'set_featured_image'    => __( 'Set featured image', 'textdomain' ),
		'remove_featured_image' => __( 'Remove featured image', 'textdomain' ),
		'use_featured_image'    => __( 'Use as featured image', 'textdomain' ),
		'insert_into_item'      => __( 'Insert into Video', 'textdomain' ),
		'uploaded_to_this_item' => __( 'Uploaded to this Video', 'textdomain' ),
		'items_list'            => __( 'Videos list', 'textdomain' ),
		'items_list_navigation' => __( 'Videos list navigation', 'textdomain' ),
		'filter_items_list'     => __( 'Filter Videos list', 'textdomain' ),
	);
	$args   = array(
		'label'               => __( 'Video', 'textdomain' ),
		'description'         => __( '', 'textdomain' ),
		'labels'              => $labels,
		'menu_icon'           => '',
		'supports'            => array( 'title', 'thumbnail' ),
		'taxonomies'          => array(),
		'public'              => false,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'menu_position'       => 5,
		'show_in_admin_bar'   => true,
		'show_in_nav_menus'   => false,
		'can_export'          => true,
		'has_archive'         => false,
		'hierarchical'        => false,
		'exclude_from_search' => true,
		'show_in_rest'        => true,
		'publicly_queryable'  => true,
		'capability_type'     => 'post',
	);
	register_post_type( 'video', $args );

}
add_action( 'init', 'create_video_cpt', 0 );
