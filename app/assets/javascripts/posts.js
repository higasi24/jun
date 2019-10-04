$(document).on('turbolinks:load', function(){
  $(function(){

    $(document).on("ajax:success", ".fav", function(e) {
      console.log("Fff");
      if ($('#' + e.detail[0]).hasClass('fa-heart')) {
        $('#' + e.detail[0]).removeClass('fa-heart').addClass('fa-heart-o');
      } else {
    $('#' + e.detail[0]).removeClass('fa-heart-o').addClass('fa-heart');
      }
    });

    $(document).on("click", ".a", function () {
      console.log("hh");
      setTimeout(function(){
        $("#sound").get(0).play();
      },1000);
    });

    $(".a").on("click", function(e){
      $(".left-chara").show(12000, function(){
        $(this).animate({'top':'200px','right':'680px','height':'100px'},4000, function(){
          $(this).animate({zIndex:1},{
            duration:1000,
            step:function(now){
              $(this).css({transform:'rotate(' + (now * 1080) + 'deg)'});
            },
            complete:function(){
              $('.left-chara').css('zIndex', 0);
            }
          });
        });
      });
    });

    $(".a").on("click", function(e){
      setTimeout(function() {
        console.log("fg");
        $('html, body').animate({ scrollTop: 720 }, 'slow');
      }, 12000);
    });

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

    $(document).on("click", ".mmm", function () {
      $('.cooo').show(2000);
    });
  });
});