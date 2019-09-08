<section class="banner banner-home" style="background-image: url(<?php the_post_thumbnail_url( 'full' ); ?>)">
<div class="embed-responsive embed-responsive-16by9">
    <?php 
    
        $banner = get_field('banner'); 
    
        $iframe = $banner['video'];
    
            // use preg_match to find iframe src
        preg_match('/src="(.+?)"/', $iframe, $matches);
        $src = $matches[1];


        // add extra params to iframe src
        $params = array(
            'background'    => 1,
        );

        $new_src = add_query_arg($params, $src);

        $iframe = str_replace($src, $new_src, $iframe);

        // echo $iframe
        echo $iframe;
    
    
    
    ?>
</div>
<div class="overlay">
    <div class="container">
         <h1>Lorem Ipsum Dolor <span class="color_teal">Sit Amet</span></h1>
    </div>
</div>
</section>
