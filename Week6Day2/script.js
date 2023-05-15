$(".box").on("click", function(){
    var box = $(this);
  if(box.hasClass("dark")){
    $(box).removeClass("dark")
  } else{
    $(box).addClass("dark")
  }

})