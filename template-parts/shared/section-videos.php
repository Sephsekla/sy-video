<section class="padsection bg_ow">
	<div class="container">
			<div class="row justify-content-center">
			   <?php

					$video_query = new WP_Query(
						array(
							'post_type'      => 'video',
							'posts_per_page' => 3,
						)
					);

					if ( $video_query->have_posts() ) {
						while ( $video_query->have_posts() ) {
							$video_query->the_post();

							?>

								<div class="col-12 col-md-6 col-lg-4">
									<a href="<?php echo get_field( 'video', false, false ); ?>" class="lightbox-toggle video">
									<?php the_post_thumbnail( 'video' ); ?>
										<div class="overlay">
											 <span class="play-link">Play</span>
										</div>
									 </a>
								</div>

							<?php
						}
					}
					?>
				  
			</div>
	</div>
</section>
