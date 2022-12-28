$(document).ready(function(){
    $(window).scroll(function(){
      if($(this).scrollTop() > 200){
        $(".main-header").css({"opacity" : "0.7"})
      }
      else {
        $(".mainheader").css({"opacity" : "1"})
      }
    })
  })