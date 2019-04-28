import './sass/style.scss';
import { initPopup } from './js/videos';

$ = jQuery;

window.$ = $;
window.jQuery = jQuery;

initPopup();

console.log("loaded");