function effigy() {
  $("#myobj").css('height',$(window).height());
}
effigy();
$(window).load(function(){
    showbody();
    setContainerWidth() ;
    copyrightYear();
    showarrows();
});
$(window).resize(function(){
    effigy();
    setContainerWidth();
    arrowhider(); 
    navgrabber();
}); 
$( window ).scroll(function() {
    navgrabber();
});
$(function() {
    $( "#burger_button" ).click(function() {
        $( ".mobile_fix" ).slideToggle(100);
    })

});
function showbody(){
  $("#main_home_page").css('display','block');
}
function showarrows(){
  $(".inthemiddle").css('display','block');
}
function arrowhider() {
  if ( $(window).height() < 570 ){
    $(".inthemiddle").css('display','none');
  }
  else{
    $(".inthemiddle").css('display','block');
  }

}
arrowhider(); 
function navgrabber(){
  if($(window).scrollTop() + $('#home_nav').height() + 40 > $("#main_home_page").offset().top){
   $('#home_nav').fadeIn(180).css('display','block');
  }
  else{
    $('#home_nav').fadeOut(180).css('display','none');
  }
}

function setContainerWidth() {
  if ($(window).width() > 667){
      $('.containers').css('width', 'auto'); //reset
    var windowWidth = $(document).width();
    var blockWidth = $('.block').outerWidth(true);
    var maxBoxPerRow = Math.floor(windowWidth / blockWidth);
    var followWidth = $('.containers').width(maxBoxPerRow * blockWidth); 
  }
}

//Set frame middle
var current_frame, total_frames, path, length, handle, myobj;

myobj = document.getElementById('myobj').cloneNode(true);

var init = function() {
  current_frame = 0;
  total_frames = 900;
  path = new Array();
  length = new Array();
  for(var i=0; i<1;i++){
    path[i] = document.getElementById('i'+i);
    l = path[i].getTotalLength();
    length[i] = l;
    path[i].style.strokeDasharray = l + ' ' + l; 
    path[i].style.strokeDashoffset = l;
  }
  handle = 0;
}
 
 
var draw = function() {
   var progress = current_frame/total_frames;
   if (progress > 1) {
     window.cancelAnimationFrame(handle);
   } else {
     current_frame++;
     for(var j=0; j<path.length;j++){
       path[j].style.strokeDashoffset = Math.floor(length[j] * (1 - progress));
     }
     handle = window.requestAnimationFrame(draw);
   }
};

init();
draw();


/*Get current year for copyright in footer*/
function copyrightYear() {
  var d = new Date();
    document.getElementById("year_copyright").innerHTML = d.getFullYear();
}
/*
function imageFadeIn(){
   $('#myobj')
      .delay(1800)
      .queue( function(next){ 
        $('#myobj').addClass('image_fader');
    
    });
}
*/
/*Splash Screen Scroll*/
$(".inthemiddle").click(function() {
    $('html,body').animate({
        scrollTop: $("#first").offset().top - $('#home_nav').height()},
        '900');
});
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - $('#home_nav').height()
        }, 900);
          return false;
      }
    }
  });
});