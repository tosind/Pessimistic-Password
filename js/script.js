$('input').on('keyup',addEventListener(blur,onpause), function() {
  var count = $(this).val().length;
  var sentences = [

'Aww, Its so cute you think that\'s a password! ',
'You\'re kidding me right?',
'I said password, not this monstrosity!',
'My Grandma could make better passwords than that!',
'You. Need. Help.',
'Who was your English Professor?',
'Don\'t tell me you just wrote "Password"',
'*Virtual Eye Roll*',
'Worst Password ever!',
'My Onion could write a password Better',
    'Take a hike you password Newb!',
    'This is so so very Sad',
    'Hello!, 911? Yea, we\'ve got a password Emergency over here!',
    'Write an actual Password, Please!',
    'I laugh at your futile password attempts',
    'You call this a Password? I\'ll hack this ASAP'
  ]

var rand = sentences[Math.floor(Math.random() * sentences.length)];

  if (count == 0) {
    $('.bar').css('width', '0%');
    $('.tooltip').fadeOut();
  } else {
    if (count <= 4) {
      $('.bar').css('width', '25%');
      $('.tooltip').fadeIn();
      $('.tooltip').text(rand);
    }

    if (count <= 8 && count >= 5) {
      $('.bar').css('width', '50%');
      $('.tooltip').text(rand);
    }
    
    if (count <= 12 && count >= 9) {
      $('.bar').css('width', '75%');
      $('.tooltip').text(rand);
    }
  
    if (count <= 16 && count >= 13) {
      $('.bar').css('width', '100%');
      $('.tooltip').text(rand);
    }

     if (count <= 20 && count >= 17) {
      $('.bar').css('width', '100%');
      $('.tooltip').text(rand);
    }

     if (count <= 40 && count >= 21) {
      $('.bar').css('width', '100%');
      $('.tooltip').text('Too long password!, remember you\'ve got a goldfish memory!');
    }
  }
});





