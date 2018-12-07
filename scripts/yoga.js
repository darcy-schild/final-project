

$(document).ready(() => {



// group of cards in second div

    $('#card1').hide();
    $('#card2').hide();
    $('#card3').hide();
    $('#card4').hide();


    $('#button1').on('click', () => {
      $('.card1').hide();
      $('.card2').hide();
      $('.card3').hide();
      $('.card4').hide();
       $('#card1').toggle();

  });

  $('#button2').on('click', () => {
    $('.card1').hide();
    $('.card2').hide();
    $('.card3').hide();
    $('.card4').hide();
     $('#card2').toggle();

});

$('#button3').on('click', () => {
  $('.card1').hide();
  $('.card2').hide();
  $('.card3').hide();
  $('.card4').hide();
   $('#card3').toggle();

});


$('#button4').on('click', () => {
  $('.card1').hide();
  $('.card2').hide();
  $('.card3').hide();
  $('.card4').hide();
   $('#card4').toggle();

});
});
