var quote = "There's only one thing I hate more than lying: skim milk. Which is water that's lying about being milk.";

function getQuote() {
  $.getJSON('http://ron-swanson-quotes.herokuapp.com/v2/quotes', function(result) {
    $('#quote').html('"' + result + '"');
    quote = result;
  });
}

function tweet() {
  $('#tweet-btn').on('click', function() {
    var url = "https://twitter.com/intent/tweet?&text=\"" + quote + "\" R. Swanson&hashtags=ParksandRec&url=http://bit.ly/rswansqt";
    $(this).attr('href', url);
    window.open(url);
  });
}

function fbShare() {
  $('#fb-share-btn').on('click', function() {
    FB.ui({
        method: 'share',
        display: 'popup',
        href: 'http://codepen.io/Lando726/full/rLMxmd/',
      }, function(response){
        if (response && !response.error_message) {
          alert('Posting completed.');
        }
      });
  });
}

$(document).ready(function() {
  // populate html with api quote on button click
  $('#quote-btn').on('click', function() {
     getQuote();
  });

  tweet();
  fbShare();
});
