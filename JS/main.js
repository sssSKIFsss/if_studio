// JavaScript Document
/* скроллинг navbar и main-slider */
$(window).scroll(function () {
	var scrl = $(document).scrollTop();
	var top = 30;//var top = $('.navbar').attr('top');	
	$('.carousel-inner .item').css('background-position', '0px '+(scrl/3).toFixed(2)+'px');
	$('.navbar').css('top', top-(scrl/10).toFixed(2)+'px');
});


	
/* Дополнительный сценарий на языке JavaScript, предназначенный для инициализации компонента Bootstrap "Popovers"  */
$(function () {
	$('[data-toggle="popover"]').popover()
});
