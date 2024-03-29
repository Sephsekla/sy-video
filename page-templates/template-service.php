<?php
/**
 * Template Name: Service
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
			
			get_template_part( 'template-parts/content', get_post_type() );

			get_template_part( 'template-parts/shared/section', 'videos' );


		endwhile; // End of the loop.
		?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();
