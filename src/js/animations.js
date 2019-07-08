$ = jQuery;

import ScrollMagic from 'scrollmagic';
//import "imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js";


function initScroll() {

    var controller = new ScrollMagic.Controller({});


    $(".title-animate").each(function () {

        var id = $(this).attr('id');

        var scene = new ScrollMagic.Scene({
                triggerElement: `#${id}`,
                duration: 0,
                triggerHook: 0.66,
                reverse: false
            })

           // .addIndicators()
        .setClassToggle(`#${id}`, 'animated')
            .addTo(controller);
    })

    // build scene


}

export {
    initScroll
};