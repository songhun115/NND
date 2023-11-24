$(function(){
    $('.category_content > div').hide();
    $('.category_list a').click(function () {
      $('.category_content > div').hide().filter(this.hash).fadeIn();
      $('.category_list a').removeClass('active');
      $(this).addClass('active');
      return false;
    }).filter(':eq(0)').click();
});



$(window).scroll(function(){
  let headerHeight = $('.header').innerHeight();
  let scrollHeight = $(document).scrollTop()
  
  if(headerHeight < scrollHeight){
    $('header').addClass('active');
  } else {
    $('header').removeClass('active');
  } 
})

  

$('.logo img').click(function(){
  location.href = '../index.html';
});
$('.homt_btn button').click(function(){
  location.href="index.html"
})
$('.more_project button').click(function(){
  $('.more_project').addClass('show');
  $('.more_project button').css("display", "none")
})

function go_nosugar() {
	location.href = '../detail/nosugar.html';
}
function go_cookie() {
	location.href = '../detail/cookie.html';
}

function go_dstile() {
	location.href = '../detail/dstile.html';
}

function go_kki() {
	location.href = '../detail/kki.html';
}

function go_kkogkko() {
	location.href = '../detail/kkogkko.html';
}
function go_konjac() {
	location.href = '../detail/konjac.html';
}

function go_nightBook() {
	location.href = '../detail/night_book.html';
}

function go_otwo() {
	location.href = '../detail/otwo.html';
}

function go_overTheMoon() {
	location.href = '../detail/overthemoon.html';
}

function go_protein() {
	location.href = '../detail/protein.html';
}

function go_squid() {
	location.href = '../detail/squid.html';
}
function go_tuttiFrutti() {
	location.href = '../detail/tutti-frutti.html';
}
function go_yorihae() {
	location.href = '../detail/yorihae.html';
}
function go_butterum() {
	location.href = '../detail/butterum.html';
}


$('.go_').click(function(){
  $('.over_bg').addClass('show')
  $('.over_page').addClass('show')
  $('body').addClass('active')
})

$('.over_bg').click(function(){
  $('.over_bg').removeClass('show')
  $('.over_page').removeClass('show')
  $('body').removeClass('active')
})

$('.mb_menu').click(function(){
  $('.mb_menu').toggleClass('active');
  if($('.mb_nav').hasClass("active") === true){
    $('.mb_nav').removeClass('active');
  } else{
    setTimeout(function(){
      $('.mb_nav').addClass('active');
    },200)
  }
})
$('.menu_about').click(function(){
  $('.mb_nav ').removeClass('active')
  $('.mb_menu  ').removeClass('active')  
  
})
$('.menu_port').click(function(){
  $('.mb_nav ').removeClass('active')
  $('.mb_menu  ').removeClass('active')  
})





