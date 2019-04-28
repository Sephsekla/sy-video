<section class="padsection">
    <div class="container">
            <div class="row justify-content-center">
               <?php

                    $video_query = new WP_Query(array(
                        'post_type' => 'video',
                        'posts_per_page' => 1,
                    ));

                        if($video_query->have_posts()){
                            while($video_query->have_posts()){
                                $video_query->the_post();

                                ?>

                                <div class="col-12 col-md-6 col-lg-4">
                                     <?php the_post_thumbnail("video") ?>
                                </div>

                <?php
                            }
                        }
                ?>  
            </div>
    </div>
</section>