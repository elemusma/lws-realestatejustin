<?php
echo '<!DOCTYPE html>';
echo '<html ';
language_attributes();
echo '>';
echo '<head>';
echo '<meta charset="UTF-8">';
echo '<meta name="viewport" content="width=device-width, initial-scale=1.0">';

echo codeHeader();

wp_head(); 

echo '</head>';
echo '<body '; 
body_class(); 
echo '>';
echo codeBody();

echo '<div class="blank-space" style="transition:all 1s ease-in-out;"></div>';
echo '<header class="position-relative box-shadow bg-accent-secondary w-100" style="top:0;left:0;z-index:10;">';

echo '<div class="nav">';
echo '<div class="container">';
echo '<div class="row">';

echo '<div class="col-lg-3 col-md-4 col-6 text-center">';

echo '<a href="' . home_url() . '">';
echo '<div class="" id="logo-main" style="width:100%;transition:all 1s ease-in-out;">';
echo '<div style="pointer-events:none;">';
echo logoSVG();
echo '</div>';
echo '</div>';
echo '</a>';
echo '</div>';

echo '<div class="col-1 mobile-hidden"></div>';

echo '<div class="col-lg-6 col-6 text-center mobile-hidden d-flex justify-content-end">';

echo '<a href="' . get_permalink(18) . '" class="text-white h-100 d-block d-flex align-items-center" style="padding:0px 10px;">About</a>';
echo '<a href="' . get_permalink(20) . '" class="text-white h-100 d-block d-flex align-items-center openModalBtn" data-modal-id="servicesMenuModal" style="padding:0px 10px;">Services<br><svg style="width: 15px;
height: 15px;
fill: white;
padding-left: 10px;
margin-top:-5px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg></a>';
echo '<a href="' . get_permalink(22) . '" class="text-white h-100 d-block d-flex align-items-center" style="padding:0px 10px;">Blog</a>';
echo '<a href="' . get_permalink(16) . '" class="text-white h-100 d-block d-flex align-items-center" style="padding:0px 10px;">Contact</a>';

// wp_nav_menu(array(
//     'menu' => 'primary',
//     'menu_class'=>'menu list-unstyled mb-0 d-flex justify-content-end'
// ));

echo '</div>';
echo '<div class="col-lg-2 col-6 text-right text-white d-lg-flex align-items-center">';

// echo '<small>Call Now</small><br>';

echo '<div class="d-flex align-items-center justify-content-end">';
echo '<a href="tel:+1' . globalPhone() . '" class="text-white">' . globalPhone() . '</a>';

echo '<div class="d-inline-block mobile-hidden" style="width:28px;height:28px;padding-left:10px;">';
echo '<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 267 267">
  <defs>
    <style>
      .cls-1.phone {
        fill: #2f2f2f;
      }

      .cls-1, .cls-2 {
        stroke-width: 0px;
      }

      .cls-2 {
        fill: #fff;
      }
    </style>
  </defs>
  <g id="Layer_1-2" data-name="Layer 1">
    <g>
      <rect class="cls-2" x="0" width="267" height="267" rx="30" ry="30"/>
      <path class="cls-1 phone" d="M164.64,54.42c2.63-6.36,9.57-9.74,16.2-7.93l30.08,8.2c5.95,1.64,10.08,7.04,10.08,13.19,0,84.56-68.56,153.12-153.12,153.12-6.15,0-11.55-4.14-13.19-10.08l-8.2-30.08c-1.81-6.63,1.57-13.57,7.93-16.2l32.81-13.67c5.57-2.32,12.03-.72,15.82,3.96l13.81,16.85c24.06-11.38,43.54-30.86,54.92-54.92l-16.85-13.77c-4.68-3.83-6.29-10.25-3.96-15.82l13.67-32.81v-.03Z"/>
    </g>
  </g>
</svg>';
echo '</div>';
echo '</div>';


echo '<div>';
echo '<a id="mobileMenuToggle" class="openModalBtn nav-toggle" data-modal-id="mobileMenu" title="mobile menu nav toggle">';
echo '<div>';
echo '<div class="line-1 bg-accent"></div>';
echo '<div class="line-2 bg-accent"></div>';
echo '<div class="line-3 bg-accent"></div>';
echo '</div>';
echo '</a>';
echo '</div>';

// echo get_search_form();

echo '</div>';

// echo '<div class="col-lg-3 col-md-2 col-3 desktop-hidden">';
// echo '<a id="navToggle" class="nav-toggle">';
// echo '<div>';
// echo '<div class="line-1 bg-accent"></div>';
// echo '<div class="line-2 bg-accent"></div>';
// echo '<div class="line-3 bg-accent"></div>';
// echo '</div>';
// echo '</a>';
// echo '</div>';

// echo '<div id="navMenuOverlay" class="position-fixed z-2"></div>';
// echo '<div class="col-lg-4 col-md-8 col-11 nav-items bg-accent desktop-hidden" id="navItems">';

// echo '<div class="pt-5 pb-5">';
// echo '<div class="close-menu">';
// echo '<div>';
// echo '<span id="navMenuClose" class="close h2 text-white" style="float:right;">X</span>';
// echo '</div>';
// echo '</div>';
// echo '<a href="' . home_url() . '">';
// echo logoSVG();
// echo '</a>';
// echo '</div>';
// wp_nav_menu(array(
// 'menu' => 'primary',
// 'menu_class'=>'menu list-unstyled mb-0'
// )); 
// echo '</div>'; // end of col for navigation


echo '</div>';
echo '</div>';
echo '</div>';

echo '</header>';

// echo '<section class="hero position-relative">';
// $globalPlaceholderImg = get_field('global_placeholder_image','options');
// if(is_page()){
// if(has_post_thumbnail()){
//     the_post_thumbnail('full', array(
//         'class' => 'w-100 h-100 bg-img position-absolute'
//     ));
// } 

// }


// if(is_front_page()) {
// echo '<div class="pt-5 pb-5 text-white text-center">';
// echo '<div class="position-relative">';
// echo '<div class="multiply overlay position-absolute w-100 h-100 bg-img"></div>';
// echo '<div class="position-relative">';
// echo '<div class="container">';
// echo '<div class="row">';
// echo '<div class="col-12">';
// echo '<h1 class="pt-3 pb-3 mb-0">' . get_the_title() . '</h1>';
// echo '</div>';
// echo '</div>';
// echo '</div>';
// echo '</div>';
// echo '</div>';
// echo '</div>';
// }



// if(!is_front_page()) {
// echo '<div class="container pt-5 pb-5 text-white text-center">';
// echo '<div class="row">';
// echo '<div class="col-md-12">';
// if(is_page() || !is_front_page()){
// echo '<h1 class="">' . get_the_title() . '</h1>';
// } elseif(is_single()){
// echo '<h1 class="">' . single_post_title() . '</h1>';
// } elseif(is_author()){
// echo '<h1 class="">Author: ' . get_the_author() . '</h1>';
// } elseif(is_tag()){
// echo '<h1 class="">' . get_single_tag_title() . '</h1>';
// } elseif(is_category()){
// echo '<h1 class="">' . get_single_cat_title() . '</h1>';
// } elseif(is_archive()){
// echo '<h1 class="">' . get_archive_title() . '</h1>';
// }
// elseif(!is_front_page() && is_home()){
// echo '<h1 class="">' . get_the_title(133) . '</h1>';
// }
// echo '</div>';
// echo '</div>';
// echo '</div>';
// }

// echo '</section>';
?>