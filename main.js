var quote = "There's only one thing I hate more than lying: skim milk. Which is water that's lying about being milk.";

function getQuote() {
  $.getJSON('http://ron-swanson-quotes.herokuapp.com/v2/quotes', function(result) {
    $('#quote').html('"' + result + '"');
    quote = result;
  });
}

$(document).ready(function() {
  // populate html with api quote on button click
  $('#quote-btn').on('click', function() {
     getQuote();
  });
});
