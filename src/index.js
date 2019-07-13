import './sass/style.scss';
import './sass/admin.scss';

import { initPopup } from './js/videos';
import { initScroll } from './js/animations';

$ = jQuery;

window.$ = $;
window.jQuery = jQuery;

initPopup();

initScroll();