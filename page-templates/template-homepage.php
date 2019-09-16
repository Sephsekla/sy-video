<?php
/**
 * Template Name: Homepage
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package SY_Video
 */

get_header();
?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">

		<?php
		while ( have_posts() ) :
			the_post();

			            
			get_template_part( 'template-parts/shared/banner', 'video' );
			get_template_part( 'template-parts/home/section', 'videos' );
			get_template_part( 'template-parts/home/section', 'services' );
			get_template_part( 'template-parts/shared/section', 'instagram' );





		endwhile; // End of the loop.
		?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();
