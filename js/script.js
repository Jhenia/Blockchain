 //Header burger     
      let header__burger = document.querySelector('.burger');
        let header_menu = document.querySelector('.header__menu');
        let back = document.querySelector('body');


        // header__burger.onclick = function(){
        //     header__burger.classList.toggle('active');
        //     header_menu.classList.toggle('active');
        //     back.classList.toggle('locked');
        // }
//Header burger   
$('.button').click(function () {
  var buttonId = $(this).attr('id');
  $('body').addClass('overlock');
  $('#modal-container').removeAttr('class').addClass(buttonId);
  $('#modal-container').removeClass('hide');
  $('.modal-background').addClass('opened');

})

$('.modal-background').click(function () {
  $('#modal-container').addClass('out');
  $('body').removeClass('modal-active');
  $('.modal-background').removeClass('opened');
  $('body').removeClass('overlock');
});
$('.modal-background').on('click', (e) => {
  setTimeout(() => {
      $('#modal-container').addClass('hide');
  }, 500);
});
$('.modal__close').click(function () {
  $('#modal-container').addClass('out');
  $('body').removeClass('modal-active');
  $('.modal-background').removeClass('opened');
  $('body').removeClass('overlock');
});
$('.modal__close').on('click', (e) => {
  setTimeout(() => {
      $('#modal-container').addClass('hide');
  }, 500);
});

$('.button2').click(function () {
  var buttonId = $(this).attr('id');
  $('body').addClass('overlock');
  $('#modal-container2').removeAttr('class').addClass(buttonId);
  $('#modal-container2').removeClass('hide');
  $('.modal-background2').addClass('opened');

})

$('.modal-background2').click(function () {
  $('#modal-container2').addClass('out');
  $('body').removeClass('modal-active');
  $('.modal-background2').removeClass('opened');
  $('body').removeClass('overlock');
});
$('.modal-background2').on('click', (e) => {
  setTimeout(() => {
      $('#modal-container2').addClass('hide');
  }, 500);
});
$('.modal__close').click(function () {
  $('#modal-container2').addClass('out');
  $('body').removeClass('modal-active');
  $('.modal-background2').removeClass('opened');
  $('body').removeClass('overlock');
});
$('.modal__close').on('click', (e) => {
  setTimeout(() => {
      $('#modal-container2').addClass('hide');
  }, 500);
});
$(document).ready(function() {
	let show = document.querySelector(".hover_form");
	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
      alert("2222");
			show.classList.toggle("show_block");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});




         
     
