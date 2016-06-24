var quote = "There's only one thing I hate more than lying: skim milk. Which is water that's lying about being milk.";

function getQuote() {
  $.getJSON("https://ron-swanson-quotes.herokuapp.com/v2/quotes", function(result) {
    $('#quote').html('"' + result + '"');
    quote = result;
  });
}

function tweet() {
  $('#tweet-btn').on('click', function() {
    var url = "https://twitter.com/intent/tweet?&text=\"" + quote + "\" R. Swanson&hashtags=ParksandRec&url=https://bit.ly/rswansqt";
    $(this).attr('href', url);
  });
}

function fbShare() {
  $('#fb-share-btn').on('click', function() {
    FB.ui({
        method: 'share',
        display: 'popup',
        href: 'https://landonwest.github.io/Ron-Swanson-quote-generator',
        quote: '"' + quote + '"'
      }, function(response){
        if (response && !response.error_message) {
          console.log(response);
        } else {
          console.log(error_message);
        }
      });

      // FB.ui({
      //   method: 'share_open_graph',
      //   action_type: 'og.likes',
      //   action_properties: JSON.stringify({
      //     object:'https://landonwest.github.io/Ron-Swanson-quote-generator',
      //   })
      // }, function(response){
      //   // Debug response (optional)
      //   console.log(response);
      // });

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