import { magnificPopup } from 'magnific-popup';

window.$ = $;
window.jQuery = jQuery;

function initPopup() {
    $('.lightbox-toggle').magnificPopup({
        type: 'iframe'
        // other options
      });
}

export { initPopup };