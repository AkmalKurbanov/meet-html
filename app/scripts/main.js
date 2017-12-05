$(document).ready(function(){





// копка довавить фото начало
$('#upfile1').click(function () {
    $('#file1').trigger('click');
});
// копка довавить фото конец

	// active смены языка начало
	$('.change-language li a').click(function(){
		$('.change-language li a').removeClass('active');
		$(this).addClass('active');
	});


		$('.new-page__like-button').click(function(){
		$('.new-page__like-button').removeClass('active');
		$(this).addClass('active');
	});
	// active смены языка конец







// select начало
$('select').each(function(){
	var $this = $(this), numberOfOptions = $(this).children('option').length;
	
	$this.addClass('select-hidden'); 
	$this.wrap('<div class="select"></div>');
	$this.after('<div class="select-styled"></div>');

	var $styledSelect = $this.next('div.select-styled');
	$styledSelect.text($this.children('option').eq(0).text());
	
	var $list = $('<ul />', {
		'class': 'select-options'
	}).insertAfter($styledSelect);
	
	for (var i = 0; i < numberOfOptions; i++) {
		$('<li />', {
			text: $this.children('option').eq(i).text(),
			rel: $this.children('option').eq(i).val()
		}).appendTo($list);
	}
	
	var $listItems = $list.children('li');
	
	$styledSelect.click(function(e) {
		e.stopPropagation();
		$('div.select-styled.active').not(this).each(function(){
			$(this).removeClass('active').next('ul.select-options').hide();
		});
		$(this).toggleClass('active').next('ul.select-options').toggle();
	});
	
	$listItems.click(function(e) {
		e.stopPropagation();
		$styledSelect.text($(this).text()).removeClass('active');
		$this.val($(this).attr('rel'));
		$list.hide();
        //console.log($this.val());
      });
	
	$(document).click(function() {
		$styledSelect.removeClass('active');
		$list.hide();
	});

});
// select конец


// маска телефона начало 
$('.js-phone').mask('+7 (999) 999-99-99');
// маска телефона конец

$('.js-date').mask('99/99/9999');


// popup  начало
$('.popup-content').magnificPopup({
	type: 'inline'
});
// popup  конец






// menu toggle начало
$('.js-toggle-menu').click(function(e){
  e.preventDefault();
  $('.mobile-header-nav').slideToggle();
  $(this).toggleClass('open');
});
// menu toggle конец























});