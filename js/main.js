//헤더
$(function() {
  let $header = $('.header');
  let headerTop = Math.floor($('.header .menuWrap').offset().top);
  $(window).scroll(function() {
    let i = Math.floor($(this).scrollTop());

    if(i > headerTop) {
      $header.addClass('active')
    } else {
      $header.removeClass('active')
    }
  })

  //퀵메뉴
  //.ticket 버튼
  $('.ticket').on('click', () => {
    alert('로그인 후 이용가능합니다')
    window.location='login.html'
  })
  //서브 페이지 메뉴 이동
  $('.subPage').each(function() {
    let $btnSnb = $('.snb h3')
    $btnSnb.on('mouseenter', function() {
      $('.snb_popup').addClass('active')
    })
    $('.snb_popup').on('mouseleave', function() {
      $(this).removeClass('active')
    })
  })

  /* 검색페이지(프로그램) - 탭 */
  $('.searchWrap').each(function() {
    const $btnTab = $('.tabList > li')
    const $tabBox = $('.tabBox > div')
    $btnTab.on('click', function() {
      const idx = $(this).index()
      $(this).siblings('li').removeClass('active')
      $(this).addClass('active')
      $tabBox.eq(idx).addClass('active')
      $tabBox.eq(idx).siblings('div').removeClass('active')
    })
  })

  /* 모달창 */
  $('#mo_modal').each(function() {
    const $btn_menu = $('.btn_menu')
    const $btnClose = $('.mo_top .btn_close')
    const $modal = $(this)

    //pc
    $btn_menu.on('click', function() {
     $('body').addClass('active')
     $modal.addClass('active')
     $btn_menu.addClass('active')
    })
    $btnClose.on('click', function() {
      $('body').removeClass('active')
      $modal.removeClass('active')
    })

    //mobile(~768)
    const $mo_close = $('.mo_top > .btn_menu')
    $mo_close.on('click', function() {
      $('body').removeClass('active')
      $modal.removeClass('active')
      $btn_menu.removeClass('active')
    })

    //mo_gnb
    const $mo_gnb = $('.mo_gnb > li')
    const $depth2 = $(this).find('.depth2')
    $mo_gnb.on('click', function() {
      $mo_gnb.removeClass('active')
      $depth2.removeClass('active').slideUp(300)
      if($(this).children('.depth2').is(':hidden') == true) {
        $(this).addClass('active')
        $(this).children('.depth2').addClass('active').slideDown(300)
      }else {return}
    })
  })

  //top 버튼 클릭시
  $('.btn_top').on('click', function(e) {
    event.preventDefault()
    $('html, body').animate({scrollTop:0}, 500)
  })
})

//slick
$('.slickList').slick({
    slidesToScroll: 1,
    slidesToShow: 3,
    prevArrow : $('.prevArrow'),
    nextArrow : $('.nextArrow'),
    autoplay: true,
    autoplaySpeed: 4500,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
          variableWidth: true
        }
      }
    ]
});
$('#slick_discover').slick({
  slidesToScroll: 1,
  slidesToShow: 3,
  prevArrow : $('#mov_discover .prevArrow'),
  nextArrow : $('#mov_discover .nextArrow'),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1,
        variableWidth: true
      }
    }
  ]
});
$('#slick_image').slick({
  slidesToScroll: 1,
  slidesToShow: 3,
  prevArrow : $('#mov_image .prevArrow'),
  nextArrow : $('#mov_image .nextArrow'),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1,
        variableWidth: true
      }
    }
  ]
});
$('#ftSlick').slick({
  slidesToShow: 5,
  arrows: false,
  autoplay: true
})