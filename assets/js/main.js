$(document).ready( function () {
  
  //localize datepicker to Russian
  $('input[id="date"]').daterangepicker({
    "singleDatePicker": true,
    locale: {
            format: 'DD-MM-YYYY',
            invalidDateLabel: 'Выберите дату',
            daysOfWeek: ['Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс', 'Пн'],
            monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            firstDay: 1
    }
  });

  //slider  
  var slideCount = $('#slider ul li').length;
  var slideWidth = $('#slider ul li').width();
  var slideHeight = $('#slider ul li').height();
  var sliderUlWidth = slideCount * slideWidth;
    
  $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
  $('#slider ul li:last-child').prependTo('#slider ul');

  function moveLeft() {
    $('#slider ul').animate({
      left: + slideWidth
    }, 1500, function () {
              $('#slider ul li:last-child').prependTo('#slider ul').css('transition','.3s');
              $('#slider ul').css('left', '');
    });
  };

  function moveRight() {
    $('#slider ul').animate({
      left: - slideWidth
      }, 1500, function () {
        $('#slider ul li:first-child').appendTo('#slider ul');
        $('#slider ul').css('left', '');
    });
  };

  $('.js-left').click(function () {
    moveLeft();
  });

  $('.js-right').click(function () {
    moveRight();
  });

  //switch months
  $('footer').on('click', 'li', function() {
    $(this).parent().find('li').removeClass('active');
    $(this).addClass('active');
    moveRight();
  });

});  