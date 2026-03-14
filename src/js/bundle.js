AOS.init();
(function ($) {
  $(document).ready(function () {


    const logos = new Swiper('.logos', {
      speed: 800,
      duration: 2000,
      centeredSlides: false,
      centerInsufficientSlides: true,
      slidesPerView: 5,
      mode: 'horizontal',
      grabCursor: true,
      loop: true,
      autoplay: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
        },
        // // when window width is >= 480px
        720: {
          slidesPerView: 4,
        },
        // // when window width is >= 640px
        // 1024: {
        //   slidesPerView: 4,
        // },

        // 1280: {
        //   slidesPerView: 4,
        // },

      },
    });

    const slider = new Swiper('.slider', {
      speed: 800,
      duration: 2000,
      centeredSlides: false,
      centerInsufficientSlides: true,
      slidesPerView: 2,
      mode: 'horizontal',
      grabCursor: true,
      loop: true,
      autoplay: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next-about',
        prevEl: '.swiper-button-prev-about',
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
        }
      },
    });

    //top bar
    const topBar = new Swiper('.top-bar', {
      speed: 800,
      centeredSlides: false,
      slidesPerView: 2,
      grabCursor: true,
      loop: true,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
      },
    });

    const blogSwiper = new Swiper('.blog-swiper01', {
      speed: 800,
      slidesPerView: 2,
      grabCursor: true,
      loop: true,
      watchOverflow: true,

      autoplay: {
        delay: 4000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      breakpoints: {
        320: { slidesPerView: 1 },
        768: { slidesPerView: 2 }
      }
    });

    // Mobile menu enable
    // Multilevel menu functionality
    $('.mobile-icon-wrapper, .close-menu').click(function () {
      $('.menu-wrap').toggleClass('open');
      $('.mobile-icon').toggleClass('active');
      $('.mobile-menu-wrap').toggleClass('show');
      $('body').toggleClass('mobile-menu-opened');
      $('html').toggleClass('mobile-menu-opened');



      $('.icon-dropdown').click(function () {
        $(this).next('ul').toggleClass('slide cm-overflow-y-scroll cm-overflow-x-hidden');
        $('.nav').toggleClass('slide-back')
        $('.btn-contact-mobile').removeClass('block')
        $('.btn-contact-mobile').addClass('hidden')
      })
      $('.submenu-wrapper').click(function () {
        $('.nav').toggleClass('slide-back')
        $('.drop-menu').removeClass('slide cm-overflow-x-hidden');
        $('.btn-contact-mobile').removeClass('hidden')
        $('.btn-contact-mobile').addClass('block')
      })

      $('.icontwo').click(function () {
        $(this).next('ul').toggleClass('slide');
        $('.drop-menu').addClass('slide-left');
        $('.drop-menu').removeClass('cm-overflow-y-scroll cm-overflow-x-hidden');

      })

      $('.submenu-wrapper2').click(function () {
        $('.drop-menu2').removeClass('slide');
        $('.drop-menu').removeClass('slide-left');
        $('.drop-menu').addClass('cm-overflow-y-scroll cm-overflow-x-hidden');

      })
    });

    // FAQ animated
    // let sliderOpen = $('.openSlide');
    // sliderOpen.hide();
    // $('.questions').on('click', function () {

    //   if($(this).hasClass('active')){
    //     $(this).removeClass('active');
    //     $(this).find('.icon').removeClass('rotate-180');
    //     $(this).parent().removeClass("article-active");
    //     $(this).removeClass("questions-active");
    //     $(this).nextAll().hide();
    //     return false;
    //   }

    //   let questions = $('.questions');
    //   questions.nextAll().hide();
    //   questions.parent().removeClass("article-active");
    //   $('hr').remove();
    //   questions.removeClass("questions-active");
    //   questions.find('.icon').removeClass("rotate-180");
    //   questions.removeClass('active');
    //   let dataNo = $(this).attr('data-no');
    //   console.log($(this));
    //   let xy = $(this);
    //   $('.content').each(function() {
    //     let eachdatano = $(this).attr('data-no');
    //     console.log(eachdatano);
    //     if (dataNo == eachdatano) {
    //       xy.parent().addClass("article-active"); 
    //       xy.addClass("questions-active"); 
    //       xy.nextAll().slideToggle();
    //       xy.addClass('active');
    //       xy.find('.icon').addClass("rotate-180");
    //     }
    //   })
    // })


    $('.firstclass-faq .openSlide').hide();

    $(document)
      .off('click.faq')
      .on('click.faq', '.firstclass-faq .questions', function (e) {

        e.preventDefault();
        e.stopImmediatePropagation();

        var $question = $(this);
        var $article = $question.closest('article');
        var $content = $article.children('.openSlide');

        if (!$content.length) return;

        if ($question.hasClass('active')) {

          $question
            .removeClass('active questions-active')
            .find('.icon').removeClass('rotate-180');

          $article.removeClass('article-active');
          $content.stop(true, true).slideUp();

        } else {

          $question
            .addClass('active questions-active')
            .find('.icon').addClass('rotate-180');

          $article.addClass('article-active');
          $content.stop(true, true).slideDown();
        }

      });
  });


  const convertImages = (query, callback) => {
    const images = document.querySelectorAll(query);

    images.forEach(image => {
      fetch(image.src)
        .then(res => res.text())
        .then(data => {
          const parser = new DOMParser();
          const svg = parser.parseFromString(data, 'image/svg+xml').querySelector('svg');

          if (image.id) svg.id = image.id;
          if (image.className) svg.classList = image.classList;

          image.parentNode.replaceChild(svg, image);
        })
        .then(callback)
        .catch(error => console.error(error))
    });
  }

  convertImages('img.injectable');
})(jQuery);