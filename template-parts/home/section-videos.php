<section class="padsection">
    <div class="container">
            <div class="row justify-content-center">
               <?php

                    $video_query = new WP_Query(array(
                        'post_type' => 'video',
                        'posts_per_page' => 6,
                    ));

                        if($video_query->have_posts()){
                            $i = 0;
                            while($video_query->have_posts()){
                                $video_query->the_post();

                                echo (0 === $i%5) ? '<div class="col-12 col-md-6 video-col wide">' : '<div class="col-12 col-md-6 col-lg-3 video-col">'


                                ?>

                                
                                    <a href="<?php echo get_field('video',false,false)?>" class="lightbox-toggle video" style="background-image: url(<?php echo get_the_post_thumbnail_url(0, 'video') ?>)">
                                        <?php the_post_thumbnail("video") ?>
                                        <div class="overlay">
                                            <div class="inner">
                                             <span class="play-link"><?php the_title() ?></span>
                                            </div>
                                        </div>
                                     </a>
                                </div>

                <?php
                            }
                            wp_reset_postdata();
                        }
                ?>  
            </div>
    </div>
</section>