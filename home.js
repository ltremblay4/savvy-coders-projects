$('li').on('mouseover', function(){
  $(this).addClass('highlighted')
})
$('li').on('mouseleave', function(){
  $(this).removeClass('highlighted')
})

$('.centerpic').click(function(){
  $('#hidden-blurb').slideDown();
})

$('.myname').hover(function(){
  $(this).slideUp()
})

$('.myname').on('mouseleave', function(){
  $(this).slideDown()
})

var contactArray = [
  "Lauren Tremblay",
  "ltremblay4@gmail.com",
  "Chattanooga, TN"
]

var i = 0;

while (i < contactArray.length) {
    console.log(contactArray[i]);
    i++;
}
