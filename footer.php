<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package SY_Video
 */

?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer">
		<div class="site-info container">
			<div class="row justify-space-between">
				<div class="col-12 col-lg-6 footer-left">
				<p>
				&copy; Shaun Young <?php echo date( 'Y' ); ?>
</p>
<p class="footer-contact"><strong>E</strong> example@example.com<br>
<strong>T</strong> 01234 567890</p>

				</div>
				<div class="col-12 col-lg-6 right">

<?php
		wp_nav_menu(
			array(
				'theme_location' => 'footer',
			)
		);
		?>
				</div>
			</div>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
