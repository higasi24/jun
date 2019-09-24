$(function(){

  $(".show-wrapper").css({"opacity":"1","transition":"all 3s"});

  $(".rank1").on("click", function(e){
    e.preventDefault();
    $(".yutube-video-comment").css({"opacity":"1","transition":"all 3s"});
  });

  $(".close-btn").on("click", function(e){
    e.preventDefault();
    $(".yutube-video-comment").css("opacity","0");
  })

  $(".rank2").on("click", function(e){
    e.preventDefault();
    $(".sub2").toggle();
  })
});
