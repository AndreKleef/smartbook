//search
let search = $('.search__triger div');
search.on('click', function(){
   if($('.search_input').val() != ''){
      $('.search_input').addClass('search_input__active');
      $('.page-header__search')[0].submit();
      $('.search_input').val('');
   }else{
      $('.search_input').toggleClass('search_input__active');
   }
});

//sliders
$(document).ready(function () {

  $('.promo-slider').owlCarousel({
    animateOut: 'slideOutDown',
    animateIn: 'pulse',
    loop:true,
    nav:true,
    dots: true,
    // autoplay:true,
    // autoplayTimeout:8000,
    responsive:{
        0:{
            items:1
        }
    }
  });

  $('.about__slider').owlCarousel({
    nav:true,
    dots: true,
    margin: 30,
    responsive:{
        0:{
            items:1
        },
        574:{
            items:2
        },
        992:{
            items:3
        },
        1199:{
            items:4
        }
    }
  });

  $('.reviews__slider').owlCarousel({
    nav:true,
    dots: false,
    margin: 30,

    responsive:{
      0:{
        items:1,
        margin: 30,
        stagePadding: 0,
        loop: true
      },
      374:{
        items:1,
        margin: 30,
        stagePadding: 30,
        loop: true
      },
      574:{
        items:1,
        margin: 30,
        stagePadding: 100,
        loop: true
      },
      768:{
          items:2
      },
      1199:{
          items:3
      }
    }
  });



  if(window.innerWidth < 769) {
    $('.main-category__block').owlCarousel({
      nav:false,
      margin: 20,
      dots: false,
      stagePadding: 30,
      responsive:{
          0:{
              items:1
          },
          574:{
              items:2
          }
      }
    });
  }

  $('.detail__slider').owlCarousel({
    loop:true,
    nav:true,
    dots: false,

    responsive:{
      0:{
          items:1
      }
    }
  });

  if($("#map").length>0) {
    ymaps.ready(function() {
        var myMap = new ymaps.Map("map",{
            center: [53.23699207119478,63.57197599999994],
            zoom: 14.5,

            "multiTouch": true,
            controls: []
        });
        var myPlacemark = new ymaps.Placemark([53.23699207119478,63.57197599999994],{
            hintContent: 'Россия, 410028, Энгельс, ул. Улица, д.9'
        },{
            iconLayout: ymaps.templateLayoutFactory.createClass('<div class="point"><img src="img/icon.svg"></div>'),
            iconPane: 'overlaps',
            iconSize: [32, 32],
            iconOffset: [-16, -32]
        });
        myMap.geoObjects.add(myPlacemark);
        myMap.behaviors.disable('scrollZoom')
    });
  }

  $(".star label").click(function(){
    $(this).parent().find("label").css({"color": "#9e9e9e"});
    $(this).css({"color": "#FF8400"});
    $(this).nextAll().css({"color": "#FF8400"});
    $(this).css({"background-color": "transparent"});
    $(this).nextAll().css({"background-color": "transparent"});
  });

  $("#slider-range1").slider({
    range: true,
    min: 0,
    max: 100000,
    values: [15000, 65000],
    slide: function(event, ui) {
      $("#min1").val(ui.values[0] + " руб");
      $("#max1").val(ui.values[1] + " руб");
    }
   });
   $("#min1").val($("#slider-range1").slider("values", 0) + " руб");
   $("#max1").val($("#slider-range1").slider("values", 1) + " руб");

});

(function($, window, document, undefined) {

  'use strict';

  var $html = $('html');

  $html.on('click.ui.dropdown', '.js-dropdown', function(e) {
    e.preventDefault();
    $(this).toggleClass('is-open');
  });

  $html.on('click.ui.dropdown', '.js-dropdown [data-dropdown-value]', function(e) {
    e.preventDefault();
    var $item = $(this);
    var $dropdown = $item.parents('.js-dropdown');
    $dropdown.find('.js-dropdown__input').val($item.data('dropdown-value'));
    $dropdown.find('.js-dropdown__current').text($item.text());
  });

  $html.on('click.ui.dropdown', function(e) {
    var $target = $(e.target);
    if (!$target.parents().hasClass('js-dropdown')) {
     $('.js-dropdown').removeClass('is-open');
    }
  });

 })(jQuery, window, document);

let menuBurger = document.querySelector('.burger'),
    navMenu = document.querySelector('.page-header__container_bottom'),

    background = document.querySelector('.modal__background'),
    modalCancel = document.querySelectorAll('.modal-window-cancel'),
    buttonLiner = document.querySelectorAll('.cruises__table-button'),
    modalWindow = document.querySelector('.modal-window'),

    buttonCruise = document.querySelectorAll('.cabins__content-button'),
    modalCruise = document.querySelector('.modal-cruise');


menuBurger.addEventListener('click', function() {
  menuBurger.classList.toggle('activeburger');
  navMenu.classList.toggle('openmenu');
});

buttonCruise.forEach(el => {
  el.addEventListener('click', function() {
    background.classList.toggle('visible');
    modalCruise.classList.toggle('open-cruise');
  });
});

buttonLiner.forEach(el => {
  el.addEventListener('click', function() {
    background.classList.toggle('visible');
    modalWindow.classList.toggle('open-window');
  });
});


if (!background) {
  background = null;
} else {
    background.addEventListener('click', function() {
    background.classList.remove('visible');
    modalWindow.classList.remove('open-window');
    modalCruise.classList.remove('open-cruise');
  });
};

if (!modalCancel) {
  modalCancel = null;
} else {
  modalCancel.forEach(el => {
    el.addEventListener('click', function() {
      background.classList.remove('visible');
      modalWindow.classList.remove('open-window');
      modalCruise.classList.remove('open-cruise');
    });
  });
};

// let clickButton = document.querySelectorAll('.button-feedback'),
//     modalCancel = document.querySelector('.modal-window-cancel'),
//     modalWindow = document.querySelector('.modal-window'),
//     background = document.querySelector('.modal__background');

// clickButton.forEach(el => {
//   el.addEventListener('click', function() {
//     background.classList.toggle('visible');
//     modalWindow.classList.toggle('open-window');
//   });
// });

// background.addEventListener('click', function() {
//   background.classList.remove('visible');
//   modalWindow.classList.remove('open-window');
// });
// modalCancel.addEventListener('click', function() {
//   background.classList.remove('visible');
//   modalWindow.classList.remove('open-window');
// });


// let coll = document.getElementsByClassName("collapsible");
// let i;
// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     let content = this.nextElementSibling;
//     if (content.style.maxHeight){
//       content.style.maxHeight = null;
//     } else {
//       content.style.maxHeight = content.scrollHeight + "px";
//     }
//   });
// };


var dateSelect = $('.flight-datepicker');

dateSelect.datepicker({
  autoclose: true,
  language: "ru",
  maxViewMode: 0,
  startDate: "now"
}).on('change', function() {
  var start = $.format.date(dateSelect.find('.start-date').datepicker('getDate'));
  var end = $.format.date(dateSelect.find('.end-date').datepicker('getDate'));
});




