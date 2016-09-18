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

