<?php
 // Register a new block.
      $banner = array(
        'name'            => 'banner',
        'title'           => __( 'Banner', 'firstclass' ),
        'description'     => __( 'A custom banner.', 'rotatedigital.com' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'firstclass-blocks',
        'icon'            => 'money',
        'keywords'        => array( 'banner' ),
      );
      $blog = array(
        'name'            => 'blog',
        'title'           => __( 'Blog', 'firstclass' ),
        'description'     => __( 'Blog section.', 'rotatedigital.com' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'firstclass-blocks',
        'icon'            => 'welcome-write-blog',
        'keywords'        => array( 'map' ),
      );
      $counter = array(
        'name'            => 'counter',
        'title'           => __( 'Counter', 'firstclass' ),
        'description'     => __( 'Basic Counter Section.', 'rotatedigital.com' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'firstclass-blocks',
        'icon'            => 'backup',
        'keywords'        => array( 'counter' ),
      );
      $cta = array(
        'name'            => 'cta',
        'title'           => __( 'Cta', 'firstclass' ),
        'description'     => __( 'A custom call to action section.', 'rotatedigital.com' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'firstclass-blocks',
        'icon'            => 'table-row-before',
        'keywords'        => array( 'Cta' ),
      );
      $faq = array(
        'name'            => 'faq',
        'title'           => __( 'Faq', 'firstclass' ),
        'description'     => __( 'A custom faq section.', 'rotatedigital.com' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'firstclass-blocks',
        'icon'            => 'editor-ul',
        'keywords'        => array( 'faq' ),
      );
      $html = array(
        'name'            => 'html',
        'title'           => __( 'Html', 'firstclass' ),
        'description'     => __( 'Custom HTML section.', 'rotatedigital.com' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'firstclass-blocks',
        'icon'            => 'html',
        'keywords'        => array( 'html code' ),
      );
      $iconboxaside = array(
        'name'            => 'iconboxaside',
        'title'           => __( 'Icon Box Aside', 'firstclass' ),
        'description'     => __( 'A grid section with icon boxes.', 'rotatedigital.com' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'firstclass-blocks',
        'icon'            => 'align-left',
        'keywords'        => array( 'icon box aside' ),
      );
      $iconbox = array(
        'name'            => 'iconbox',
        'title'           => __( 'Icon Box Grid', 'firstclass' ),
        'description'     => __( 'A grid section with icon boxes.', 'rotatedigital.com' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'firstclass-blocks',
        'icon'            => 'grid-view',
        'keywords'        => array( 'icon box' ),
      );
      $iconlist = array(
        'name'            => 'iconlist',
        'title'           => __( 'Icon List', 'firstclass' ),
        'description'     => __( 'Icon List section.', 'rotatedigital.com' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'firstclass-blocks',
        'icon'            => 'editor-ul',
        'keywords'        => array( 'icon list' ),
      );
      $imagebox = array(
        'name'            => 'imagebox',
        'title'           => __( 'Image Box Grid', 'firstclass' ),
        'description'     => __( 'A grid section with icon boxes.', 'rotatedigital.com' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'firstclass-blocks',
        'icon'            => 'format-image',
        'keywords'        => array( 'image box' ),
      );
      $imagegridtext = array(
        'name'            => 'imagegridtext',
        'title'           => __( 'Image Grid Text', 'firstclass' ),
        'description'     => __( 'An icon grid section with text.', 'rotatedigital.com' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'firstclass-blocks',
        'icon'            => 'editor-table',
        'keywords'        => array( 'image grid text' ),
      );
      $imageiconlist = array(
        'name'            => 'imageiconlist',
        'title'           => __( 'Image Icon List', 'firstclass' ),
        'description'     => __( 'Icon List with Image section.', 'rotatedigital.com' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'firstclass-blocks',
        'icon'            => 'table-col-before',
        'keywords'        => array( 'icon list' ),
      );
      $imageprogress = array(
        'name'            => 'imageprogress',
        'title'           => __( 'Image Progress Steps', 'firstclass' ),
        'description'     => __( 'Image Progress Steps Section.', 'rotatedigital.com' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'firstclass-blocks',
        'icon'            => 'backup',
        'keywords'        => array( 'progress' ),
      );
      $logos = array(
        'name'            => 'Logos',
        'title'           => __( 'Logos', 'firstclass' ),
        'description'     => __( 'A custom logos section.', 'rotatedigital.com' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'firstclass-blocks',
        'icon'            => 'podio',
        'keywords'        => array( 'logos' ),
      );
      $mainform = array(
        'name'            => 'mainform',
        'title'           => __( 'Mainform', 'firstclass' ),
        'description'     => __( 'Main form custom section.', 'rotatedigital.com' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'firstclass-blocks',
        'icon'            => 'email',
        'keywords'        => array( 'form' ),
      );
      $mapaside = array(
        'name'            => 'mapaside',
        'title'           => __( 'Map Aside', 'firstclass' ),
        'description'     => __( 'Map with Content section.', 'rotatedigital.com' ),
        'render_callback' => 'my_acf_block_render_callback',
        'category'        => 'firstclass-blocks',
        'icon'            => 'location-alt',
        'keywords'        => array( 'map' ),
    );
    $map = array(
      'name'            => 'map',
      'title'           => __( 'Map', 'firstclass' ),
      'description'     => __( 'Map section.', 'rotatedigital.com' ),
      'render_callback' => 'my_acf_block_render_callback',
      'category'        => 'firstclass-blocks',
      'icon'            => 'location',
      'keywords'        => array( 'map' ),
    );
    $progress = array(
      'name'            => 'progress',
      'title'           => __( 'Progress Steps', 'firstclass' ),
      'description'     => __( 'Progress Steps Section.', 'rotatedigital.com' ),
      'render_callback' => 'my_acf_block_render_callback',
      'category'        => 'firstclass-blocks',
      'icon'            => 'clock',
      'keywords'        => array( 'progress' ),
    );
    $sidebaraside = array(
      'name'            => 'sidebaraside',
      'title'           => __( 'Sidebaraside', 'firstclass' ),
      'description'     => __( 'A custom section with sidebar.', 'rotatedigital.com' ),
      'render_callback' => 'my_acf_block_render_callback',
      'category'        => 'firstclass-blocks',
      'icon'            => 'align-left',
      'keywords'        => array( 'sidebar aside' ),
    );
    $simplecontent = array(
      'name'            => 'simplecontent',
      'title'           => __( 'Simplecontent', 'firstclass' ),
      'description'     => __( 'A custom simple content section.', 'rotatedigital.com' ),
      'render_callback' => 'my_acf_block_render_callback',
      'category'        => 'firstclass-blocks',
      'icon'            => 'editor-alignleft', 
      'keywords'        => array( 'Simple Content' ),
    );
    $slider = array(
      'name'            => 'slider',
      'title'           => __( 'Slider', 'firstclass' ),
      'description'     => __( 'A custom slider section.', 'rotatedigital.com' ),
      'render_callback' => 'my_acf_block_render_callback',
      'category'        => 'firstclass-blocks',
      'icon'            => 'leftright',
      'keywords'        => array( 'slider' ),
    );
    $testimonials = array(
      'name'            => 'testomonials',
      'title'           => __( 'Testimonials Slider', 'firstclass' ),
      'description'     => __( 'A custom testimonial section.', 'rotatedigital.com' ),
      'render_callback' => 'my_acf_block_render_callback',
      'category'        => 'firstclass-blocks',
      'icon'            => 'list-view',
      'keywords'        => array( 'testimonials' ),
    );
    $textimage = array(
      'name'            => 'textimage',
      'title'           => __( 'Text with image', 'firstclass' ),
      'description'     => __( 'A custom text with image.', 'rotatedigital.com' ),
    'render_callback' => 'my_acf_block_render_callback',
      'category'        => 'firstclass-blocks',
      'icon'            => 'table-col-before',
      'keywords'        => array( 'text image' ),
    );
    $columntext = array(
      'name'            => 'columntext',
      'title'           => __( 'Two Column Text', 'firstclass' ),
      'description'     => __( 'A text on two columns layouts.', 'rotatedigital.com' ),
    'render_callback' => 'my_acf_block_render_callback',
      'category'        => 'firstclass-blocks',
      'icon'            => 'columns',
      'keywords'        => array( 'Column text' ),
    );
    $privacypolicy = array(
      'name'            => 'privacypolicy',
      'title'           => __( 'Privacy Policy', 'firstclass' ),
      'description'     => __( 'A preformated Privacy policy block', 'rotatedigital.com' ),
    'render_callback' => 'my_acf_block_render_callback',
      'category'        => 'firstclass-blocks',
      'icon'            => 'list-view',
      'keywords'        => array( 'Column text' ),
    );
    $terms = array(
      'name'            => 'terms',
      'title'           => __( 'Terms', 'firstclass' ),
      'description'     => __( 'A preformated Terms block', 'rotatedigital.com' ),
    'render_callback' => 'my_acf_block_render_callback',
      'category'        => 'firstclass-blocks',
      'icon'            => 'list-view',
      'keywords'        => array( 'Column text' ),
    );
    $customsitemap = array(
      'name'            => 'sitemap_custom',
      'title'           => __( 'Custom Sitemap', 'firstclass' ),
      'description'     => __( 'A preformated Sitemap', 'rotatedigital.com' ),
    'render_callback' => 'my_acf_block_render_callback',
      'category'        => 'firstclass-blocks',
      'icon'            => 'list-view',
      'keywords'        => array( 'Column text' ),
    );
    $accessibility = array(
      'name'            => 'accessibility',
      'title'           => __( 'Accessibility', 'firstclass' ),
      'description'     => __( 'A preformated Accessibility Block', 'rotatedigital.com' ),
    'render_callback' => 'my_acf_block_render_callback',
      'category'        => 'firstclass-blocks',
      'icon'            => 'list-view',
      'keywords'        => array( 'Column text' ),
    );
    $disclaimer = array(
      'name'            => 'disclaimer',
      'title'           => __( 'Disclaimer', 'firstclass' ),
      'description'     => __( 'A preformated Disclaimer Block', 'rotatedigital.com' ),
    'render_callback' => 'my_acf_block_render_callback',
      'category'        => 'firstclass-blocks',
      'icon'            => 'list-view',
      'keywords'        => array( 'Column text' ),
    );
    $video = array(
      'name'            => 'Video',
      'title'           => __( 'Video', 'firstclass' ),
      'description'     => __( 'A custom video section.', 'rotatedigital.com' ),
      'render_callback' => 'my_acf_block_render_callback',
      'category'        => 'firstclass-blocks',
      'icon'            => 'video-alt',
      'keywords'        => array( 'video' ),
    );
    $gallery = array(
      'name'            => 'Gallery',
      'title'           => __( 'Gallery', 'firstclass' ),
      'description'     => __( 'A custom gallery section.', 'rotatedigital.com' ),
      'render_callback' => 'my_acf_block_render_callback',
      'category'        => 'firstclass-blocks',
      'icon'            => 'list-alt',
      'keywords'        => array( 'gallery' ),
    );

    $tab = array(
      'name'            => 'tab',
      'title'           => __( 'Tab', 'firstclass' ),
      'description'     => __( 'Tab Section.', 'rotatedigital.com' ),
      'render_callback' => 'my_acf_block_render_callback',
      'category'        => 'firstclass-blocks',
      'icon'            => 'clock',
      'keywords'        => array( 'tab' ),
    );

  
  $blocks = [
    $banner,
    $accessibility,
    $blog,
    $counter,
    $customsitemap,
    $cta,
    $disclaimer,
    $faq,
    $html,
    $iconboxaside,
    $iconbox,
    $iconlist,
    $imagebox,
    $imagegridtext,
    $imageiconlist,
    $imageprogress,
    $logos,
    $mainform,
    $mapaside,
    $map,
    $progress,
    $privacypolicy,
    $sidebaraside,
    $simplecontent,
    $slider,
    $terms,
    $testimonials,
    $textimage,
    $columntext,
    $video,
    $gallery,
    $tab,
  ];
  
  return $blocks;