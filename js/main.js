function openMenu(){$(".menu-toggle").click(function(e){e.preventDefault();var i=$(this).next();i.is(":hidden")?($(this).addClass("active"),i.slideDown(250)):($(this).removeClass("active"),i.slideUp(250))})}$(".navbar-toggle").click(function(e){e.preventDefault();var i=$("#menu");i.is(":hidden")?i.slideDown(250):i.slideUp(250)}),$(".category-toggle").click(function(e){e.preventDefault();var i=$(this).next();i.is(":hidden")?($(this).addClass("active"),i.slideDown(250)):($(this).removeClass("active"),i.slideUp(250))}),$(".button-toggle").click(function(e){e.preventDefault();var i=$(this).next();i.is(":hidden")?($(".dropdown-item").hide(),$(this).addClass("active"),i.show()):($(this).removeClass("active"),i.hide())}),$(document).mouseup(function(e){var i=$(".dropdown-item");0===i.has(e.target).length&&i.hide()}),$(document).ready(function(){function e(){i=$(".nav").offset().top}var i,t;e(),$(window).resize(e),window.matchMedia("(min-width: 767px)").matches&&$(window).scroll(function(){t=$(window).scrollTop(),t>=i?$(".nav").addClass("fixed"):$(".nav").removeClass("fixed")}),window.matchMedia("(max-width: 767px)").matches&&openMenu()}),$(".drop-btn").click(function(){var e=$(this).parent().find(".drop");return e.is(":hidden")?(e.slideDown(100),$(this).addClass("active"),$(this).parent().parent().find("input").addClass("active"),$(".drop").find("li").click(function(){var i=$(this).html();$(this).parent().parent().find("input").val(i),e.slideUp(100)})):($(this).removeClass("active"),$(this).parent().parent().find("input").removeClass("active"),e.slideUp(100)),!1}),$(document).mouseup(function(e){var i=$(".drop");0===i.has(e.target).length&&(i.slideUp(100),$(".slct").removeClass("active"))});