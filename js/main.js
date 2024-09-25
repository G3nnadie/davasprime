$(document).ready(function () {

  // Header height
  function headerHieght() {
    var headerHieght = $('.header').outerHeight(true);
    $('.wrapper').css('padding-top', headerHieght);
  }
  headerHieght();

  $(window).resize(function() {
    headerHieght();
  });

  // Menu mobail
  $('.navbar-toggle').on('click', function() {
    $(this).toggleClass('active');
    $('.nav').slideToggle( 200, function() {});
  });

  // Modal
  $('.open-modal-card').on('click', function(e) {
    e.preventDefault();
    let thisProduct = $(this).parents('.products__item');

    let cardImg = thisProduct.find('img').attr('src');
    let cardName = thisProduct.find('.products__name').text();
    let cardText = thisProduct.find('.products__text').text();

    $('.card__img img').attr('src', cardImg)
    $('.card__name').text(cardName)
    $('.card__text').text(cardText)

    $('.modal--card').fadeIn(200);
  });

  $('.modal__close').on('click', function() {
    $('.modal').fadeOut(200);
    cardClear();
  });

  $('.modal').mouseup(function (e) {
    let modalContent = $(".modal__box");
    if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
      $(this).fadeOut(200);
      cardClear();
    }
  });

  // Card clear
  function cardClear() {
    setTimeout(function() { 
      $('.card__img img').attr('src', '');
      $('.card__name').text('');
      $('.card__text').text('');
    }, 300);
  }
 
  // Scroll spee
  // $('.address').on('click','a', function (event) {
  //   event.preventDefault();
  //   var id  = $(this).attr('href'),
  //     top = $(id).offset().top;
  //     $('body,html').animate({scrollTop: top}, 800);
  // });

  // Show menu mobail
  // $('.navbar-toggle').click(function () {
  //   $(this).toggleClass('active');
  //   $('.nav').toggleClass('open');
  // });

  // Header add class
  // $(window).scroll(function() { 
  //   var top = $(document).scrollTop();
  //   if (top > 0) {
  //     $('.header').addClass('scroll-page');
  //   }
  //   else {
  //     $('.header').removeClass('scroll-page');
  //   }
  // });

  // Hidden nav
  // $(document).click(function(event) {
  //   if ($(event.target).closest('.navbar-toggle').length 
  //     || $(event.target).closest('.nav').length ) return;
  //     $('.nav').removeClass('open');
  //     $('.navbar-toggle').removeClass('active');
  //     event.stopPropagation();
  // });

  // Maskedinput
  // $(function($){
  //   $('.phone-mask').mask(('+7 ') + '(999) 999-99-99');
  // });

  // Accardion
  // var accordion = function() {
  //   var data = $('.accordion').attr('data-accordion')
  //   $('.accordion-header').on('click', function(){
  //     $(this).next('.accordion-body').not(':animated').slideToggle()
  //   })
  //   $('.accordion-header').click(function () {
  //     $(this).parent('.accordion li').toggleClass('active');
  //   });
  // }
  // accordion();

  // Products sl
  var swiper = new Swiper(".products__sl", {
    spaceBetween: 0,
    slidesPerView: 1,
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next-products",
      prevEl: ".swiper-button-prev-products",
    },
    breakpoints: {
      480: {
        spaceBetween: 20,
        slidesPerView: 2,
      },
      650: {
        spaceBetween: 20,
        slidesPerView: 3,
      },
      768: {
        spaceBetween: 50,
        slidesPerView: 3,
      },
      992: {
        spaceBetween: 50,
        slidesPerView: 3,
      },
      1480: {
        spaceBetween: 120,
        slidesPerView: 4,
      },
    },
  });

});

// Map
// ymaps.ready(init);
// var myMap, 
//     myPlacemark;

// function init(){ 
//   myMap = new ymaps.Map("map", {
//     center: [55.77511086, 37.61463844],
//     zoom: 16,
//     controls: ['zoomControl']
//   });
  
//   myPlacemark = new ymaps.Placemark([55.77511086, 37.61463844], {});
  
//   myMap.geoObjects.add(myPlacemark);
//   myMap.behaviors.disable([
//     'drag',
//     'scrollZoom'
//   ]);

// }