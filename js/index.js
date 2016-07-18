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

$(document).load(function () {
 // code here
 // window.onload = function()
//{
 document.getElementById("y").textContent = "one third of the time";
 });     
 
 /* var daysDiff = function() {
  //Get 1 day in milliseconds
  var one_day=1000*60*60*24;
  // Convert both dates to milliseconds
  var endDate = new Date(2016, 07, 13, 0, 0, 0, 0);
  console.log("endDate = " + endDate);
  var today = new Date();
console.log("today = " + today);
  // Calculate the difference in milliseconds
  var difference_ms = endDate - today;
   console.log("difference_ms = " + difference_ms); 
  // Convert back to days and return
 var difference_ds = Math.round(difference_ms/one_day); 
    console.log("difference_ds = " + difference_ds); 
  return difference_ds;
}

//date counter for kickstarter
console.log("DOM is super ready");
var daysRemaining = String(daysDiff());
console.log("daysleft now = " + daysRemaining);
//document.getElementById("x").innerHTML = daysRemaining;

  */
  
  


