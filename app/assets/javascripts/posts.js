$(document).on('turbolinks:load', function(){
  $(function(){
    setInterval(function(){
      var count = 0;
      count++;
      if (count > 1) clearInterval(this);
      $(".show-wrapper").css({"opacity":"1","transition":"all 3s"});

      $(".rank1").on("click", function(e){
        e.preventDefault();
        $(".yutube-video-comment").css({"opacity":"1","transition":"all 3s"});
      });

      $(".close-btn").on("click", function(e){
        e.preventDefault();
        $(".yutube-video-comment").css("opacity","0");
      });
    },1);

    $(".rank2").on("click", function(){
      $(".sub2").slideToggle(500, function(){
      });
    });

    var flg = "default";
    $(".show-table>a").on("click", function(){
      $(".show-hide").toggle(function(){
        if (flg == "default"){
          $(".show-table>a").text("hide");
          flg = "changed";
        }else {
          $(".show-table>a").text("show");
          flg = "default";
        }
        $('a[href^="#"]').on("click", function(){
          console.log("gg");
          var speed = 500;
          var href= $(this).attr("href");
          var target = $(href == "#" || href == "" ? 'html' : href);
          var position = target.offset().top;
          $("html, body").animate({scrollTop:position}, speed, "swing");
          return false;
        });
      })
    });
  });
});