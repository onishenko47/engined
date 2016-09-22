// Выпадающее меню для моб версии
$('.navbar-toggle').click(function(e) {
  e.preventDefault();
  var menu = $('#menu');
  if(menu.is(':hidden')){
    menu.slideDown(250)
  }
  else{
    menu.slideUp(250)
  }
});

// Открытие закрытие категорий
$('.category-toggle').click(function(e) {
  e.preventDefault();
  var child = $(this).next();
  if(child.is(':hidden')){
  	$(this).addClass('active')
    child.slideDown(250)
  }
  else{
  	$(this).removeClass('active')
    child.slideUp(250)
  }
});

// Выпадающие блоки
$('.button-toggle').click(function(e) {
  e.preventDefault();
  var drop = $(this).next();
  if(drop.is(':hidden')){
    $('.dropdown-item').hide()
    $(this).addClass('active')
    drop.show()
  }
  else{
    $(this).removeClass('active')
    drop.hide()
  }
});

$(document).mouseup(function (e) {
  var container = $(".dropdown-item");
  if (container.has(e.target).length === 0){
    container.hide();
  }
});

// Выпадающее меню подкатегорий для моб версии
function openMenu(){
  $('.menu-toggle').click(function(e) {
    e.preventDefault();
    var menu = $(this).next();
    if(menu.is(':hidden')){
      $(this).addClass('active')
      menu.slideDown(250)
    }
    else{
      $(this).removeClass('active')
      menu.slideUp(250)
    }
  });
}

// Фиксированое верхнее меню при прокрутке страницы
$(document).ready(function() {
  var navPos, winPos;
    
  function refreshVar() {
    navPos = $('.nav').offset().top;
  }

  refreshVar();
  $(window).resize(refreshVar);

  if(window.matchMedia('(min-width: 767px)').matches){
    $(window).scroll(function() {
      winPos = $(window).scrollTop();
      
      if (winPos >= navPos) {
        $('.nav').addClass('fixed'); 
      }  
      else {
        $('.nav').removeClass('fixed');
      }
    });
  }
  if(window.matchMedia('(max-width: 767px)').matches){
    openMenu()
  }
});
// Конец Фиксированое верхнее меню при прокрутке страницы

// MultiSelect
$('.drop-btn').click(function(){
  var dropBlock = $(this).parent().find('.drop');

  if( dropBlock.is(':hidden') ) {
    dropBlock.slideDown(100);

    $(this).addClass('active');
    $(this).parent().parent().find('input').addClass('active')
    $('.drop').find('li').click(function(){
      var selectResult = $(this).html();
      $(this).parent().parent().find('input').val(selectResult);

      dropBlock.slideUp(100);
    });
  
  } else {
    $(this).removeClass('active');
    $(this).parent().parent().find('input').removeClass('active')
    dropBlock.slideUp(100);
  }

  return false;
});

$(document).mouseup(function (e) {
  var container = $(".drop");
  if (container.has(e.target).length === 0){
      container.slideUp(100);
      $('.slct').removeClass('active');
  }
});

// End MultiSelect