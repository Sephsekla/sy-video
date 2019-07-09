<?php


add_action( 'after_setup_theme', 'sy_add_media' );
function sy_add_media() {
	add_image_size( 'banner', 2000, 400, true ); // (cropped)
	add_image_size( 'video', 500, 282, true ); // (cropped)

}
