

$(document).ready(() => {


  $('#stat1').hide();
  $('#statcap1').hide();
  $('#stat2').hide();
  $('#statcap2').hide();


  $('#buttonA').on('click',() => {
      $('#stat1').toggle();
      $('#statcap1').toggle();
  });

  $('#buttonB').on('click',() => {
      $('#stat2').toggle();
      $('#statcap2').toggle();
  });

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
