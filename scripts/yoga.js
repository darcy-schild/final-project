

$(document).ready(() => {


    $('#card1').hide();
    $('#card2').hide();
    $('#card3').hide();
    $('#card4').hide();

    $('#button1').on('click', () => {
      $('.card1').hide();
      $('.card2').hide();
      $('.card3').hide();
      $('.card4').hide();
       $('#card1').show();

  });

  $('#button2').on('click', () => {
    $('.card1').hide();
    $('.card2').hide();
    $('.card3').hide();
    $('.card4').hide();
     $('#card2').show();

});

$('#button3').on('click', () => {
  $('.card1').hide();
  $('.card2').hide();
  $('.card3').hide();
  $('.card4').hide();
   $('#card3').show();

});


$('#button4').on('click', () => {
  $('.card1').hide();
  $('.card2').hide();
  $('.card3').hide();
  $('.card4').hide();
   $('#card4').show();

});
});
