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
                        <audio id='sound' preload="auto" src="https://manual.haik-cms.jp/swfu/d/irishnokaze.mp3" type="audio/mp3"></audio>
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
                        <audio id='sound5' preload="auto" src="https://webref.eomec.com/demo/html/audio-1.mp3" type="audio/mp3"></audio>
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