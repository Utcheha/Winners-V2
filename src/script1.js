global.$ = require("jquery")
window.jQuery = $;
window.$ = $;
import 'jquery'
import '../node_modules/popper.js/dist/popper.js'

import '../node_modules/bootstrap/dist/js/bootstrap.js'

//import $ from 'jquery';

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import 'owl.carousel/dist/assets/owl.carousel.css';
import "../node_modules/animate.css/animate.css";
import '../node_modules/isotope-layout/dist/isotope.pkgd.min';
import 'owl.carousel';
import counterUp from 'counterup2'
const el = document.querySelector( '.counter' )

// Start counting, do this on DOM ready or with Waypoints.
counterUp( el, {
    duration: 1000,
    delay: 16,
} )

//const WOW = require('wow.js');
import WOW from 'wow.js/dist/wow.js';
new WOW().init();
//import WOW from 'wowjs';

window.wow = new WOW.WOW({
    live: false
});
new WOW.WOW().init()
window.WOW = WOW
new WOW().init();

import "./script.js";



  



//import './jquery.appear.js'
//import './jquery.countTo.js'
//import './bootstrap.js'
//
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import "./css/style.css";
//import "./css/css-ibraim/login.css";

//const fn = () => "Arrow functions're eeeee!"; 
 
//alert(fn());

