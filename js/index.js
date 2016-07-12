$(document).ready(function() {
  var ho = 'pfp-home';
  $('#content').load('./content/html/' + ho + '.html');
  $('#pfp-home').addClass('active'); //show we're at home

  //handle menu clicks
  $('ul li a').click(function() {
    $('li').removeClass('active');
    var page = $(this).attr('href');
    console.log("this = " + this);
    console.log("page = " + page);
    console.log('./content/html/' + page + '.html');

    $('#content').load('./content/html/' + page + '.html');
    $('#' + page).addClass('active'); //make active the current one 
    $('.navbar-collapse').collapse('toggle');
    return false;
  });
});