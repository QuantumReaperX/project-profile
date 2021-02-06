// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "12px";
  } else {
    document.getElementById("header").style.fontSize = "15px";
  }
}

$(document).ready(function(){
  var header = $('body');

  var backgrounds = new Array(
      'url(background.jpg)'
  , 'url(images/b1.jpg)'
  , 'url(images/b2.jpg)'
  , 'url(images/b3.jpg)'
  , 'url(images/b4.jpg)'
  );

  var current = 0;

  function nextBackground() {
      current++;
      current = current % backgrounds.length;
      header.css('background-image', backgrounds[current]);
  }
  setInterval(nextBackground, 5000);

  header.css('background-image', backgrounds[0]);
  });


