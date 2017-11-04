// by: George Olaru https://dribbble.com/shots/1560982-Rosa-Restaurant-Website/attachments/239212

$('button').on('click', function() {
  if($(this).hasClass('nav-button')) {
    $('nav div').addClass('show');
  } else if($(this).hasClass('exit-menu')) {
    $('nav div').removeClass('show');
  } else if($(this).hasClass('to-top')) {
    $('body').animate({scrollTop:0}, 'slow');
  }
});

AOS.init({      
      duration: 1800,
  easing: 'ease'
    });