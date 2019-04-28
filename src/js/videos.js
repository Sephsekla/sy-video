import { magnificPopup } from 'magnific-popup';

function initPopup() {
    $('.lightbox-toggle').magnificPopup({
        type: 'iframe'
        // other options
      })
      .extend(true, $.magnificPopup.defaults, {  
        iframe: {
            patterns: {
               youtube: {
                  index: 'youtube.com/', 
                  id: 'v=', 
                  src: 'https://www.youtube.com/embed/%id%?autoplay=1' 
              },
              vimeo: {
                index: 'vimeo.com/',
                id: '/',
                src: '//player.vimeo.com/video/%id%?autoplay=1'
              },
            }
        }
    });
}

export { initPopup };