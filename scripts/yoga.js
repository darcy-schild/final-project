

$(document).ready(() => {

// toggle numbers about yoga population in first div

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

// group of cards in second 'find your flow' div

    $('#card1').hide();
    $('#card2').hide();
    $('#card3').hide();
    $('#card4').hide();


    $('#button1').on('click', () => {
       $('#card1').toggle();

  });

  $('#button2').on('click', () => {
     $('#card2').toggle();

});

$('#button3').on('click', () => {
   $('#card3').toggle();

});


$('#button4').on('click', () => {
   $('#card4').toggle();

});
});
