<section class="form padsection bg_ow">
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-6"><?php
            
            echo forminator_form(25);
            
            ?></div>
            <div class="col-12 col-lg-6">
                <?php
                
                $contact = get_field('contact_methods');
                
                ?>
                <p class="contact-methods"><strong>E</strong> <a href="mailto:<?php echo $contact['email'] ?>"><?php echo $contact['email'] ?></a><br>
                <strong>T</strong> <a href=tel:<?php echo $contact['phone'] ?>"><?php echo $contact['phone'] ?></a>
                </p>
            </div>
        </div>
    </div>
</section>