$(document).on('turbolinks:load', function(){
  $(function(){
    $("#menu1").on("click", function(){
      $(".app-contents-sss").parent().replaceWith(menu1());
        console.log("kk");
    });

    $("#menu2").on("click", function(){
      $(".app-contents-sss").parent().replaceWith(menu2());
    });

    // $('#play').on('click', function(){
    $(document).on("click", "#play", function () {
      console.log("hh");
      setTimeout(function(){
        $("#sound").get(0).play();
      },1000);
    });
    $(document).on("click", "#play5", function () {
      console.log("hh");
      setTimeout(function(){
        $("#sound5").get(0).play();
      },1000);
    });

    function menu1(){
      let html = `<div class="nnn">
                    <div class="app-contents-sss">
                      <div class="app-contents-sub">
                        <p id="play">韓国人</p>
                        <audio id='sound' preload="auto" src="https://doc-08-04-docs.googleusercontent.com/docs/securesc/jnnmcgpnhovk2h5c1lbs1606b16v3q7l/lu7jmpm1pkslbkn85lgde2l599f7isc2/1569902400000/15778955479322778581/05483003997726360300/133iee8QnSQd5mf5yRL0Y3h0VQ5_hp2uO?e=download" type="audio/mp3"></audio>
                      </div>
                      <div class="app-contents-sub2">
                        <p>d</p>
                      </div>
                    </div>
                    <div class="app-contents-sss">
                      <div class="app-contents-sub">
                        <p>d</p>
                      </div>
                      <div class="app-contents-sub2">
                        <p>d</p>
                      </div>
                    </div>
                  </div>`
                  return html;
    }

    function menu2(){
      let html = `<div class="nnn">
                    <div class="app-contents-sss">
                      <div class="app-contents-sub">
                        <p id="play5">許されねぇぞ</p>
                        <audio id='sound5' preload="auto" src="https://doc-14-04-docs.googleusercontent.com/docs/securesc/jnnmcgpnhovk2h5c1lbs1606b16v3q7l/5asbkdhn43jnifamdt3vh35d2943o9k7/1569902400000/15778955479322778581/05483003997726360300/138uKAXPCo2WNruXGVg14J16H5Tl4fPFb?e=download" type="audio/mp3"></audio>
                      </div>
                      <div class="app-contents-sub2">
                        <p>d</p>
                      </div>
                    </div>
                    <div class="app-contents-sss">
                      <div class="app-contents-sub">
                        <p>d</p>
                      </div>
                      <div class="app-contents-sub2">
                        <p>d</p>
                      </div>
                    </div>
                  </div>`
                  return html;
    }
  });
});