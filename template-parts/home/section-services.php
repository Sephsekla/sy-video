<?php $section = get_field('section_2'); 


?>

<section class="padsection bg_ow">
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-6"><h2 class="title-animate" id="about"><?php echo $section['title'] ?></h2></div>
            <div class="col-12 col-lg-6">

            <?php echo $section['content'];
            
            
            if($section['cta']){

                ?>
                           

                <p><a href="<?php echo $section['cta']['url'] ?>" target="<?php echo $section['cta']['target'] ?>"><?php echo $section['cta']['title'] ?></a></p>

                <?php

            }

            ?>
            
            
           
             
            </div>
        </div>
        
    </div>
</section>