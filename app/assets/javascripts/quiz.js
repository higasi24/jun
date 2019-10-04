$(document).on('turbolinks:load', function(){
  $(function(){
    var quizArea = $('.quiz_area'); //クイズを管理するDOMを指定
    var quiz_html = quizArea.html(); //もう一度　を押した時に元に戻すため初期HTMLを変数で保管
    var quiz_cnt = 0; //現在の問題数を管理
    var quiz_fin_cnt = 5; //何問で終了か設定（クイズ数以下であること）
    var quiz_success_cnt = 0; //問題の正解数
    var aryQuiz = [];
    aryQuiz.push(
        {
            question : '加藤純一の出身地はどれ？',
            answer : ['館山', '木更津', '銚子', '市原']
        }
        ,{
            question : '加藤純一の誕生日はいつ？',
            answer : ['8月17日', '8月24日', '8月13日', '8月5日']
        }
        ,{
            question : '加藤純一の母校はどれ？',
            answer : ['千葉県立安房高等学校', '千葉市立稲毛高等学校', '千葉西高等学校', '検見川高等学校']
        }
        ,{
            question : '加藤純一が最後に仕事を辞めた時期は？',
            answer : ['2016年夏', '2016年冬', '2015年冬', '2017年夏']
        }
        ,{
            question : '加藤純一が得意なモノマネは？',
            answer : ['船井', 'スティッチ', 'ジャパネット高田', 'セイキン']
        }
    );
    quizReset();

    //回答を選択した後の処理
    quizArea.on('click', '.quiz_ans_area ul li', function(){
        //画面を暗くするボックスを表示（上から重ねて、結果表示中は選択肢のクリックやタップを封じる
        quizArea.find('.quiz_area_bg').show();
        //選択した回答に色を付ける
        $(this).addClass('selected');
        if($(this).data('true')){
            //正解の処理 〇を表示
            quizArea.find('.quiz_area_icon').addClass('true');
            //正解数をカウント
            quiz_success_cnt++;　 //追加
        }else{
            //不正解の処理
            quizArea.find('.quiz_area_icon').addClass('false');
        }
        setTimeout(function(){
            //表示を元に戻す
            quizArea.find('.quiz_ans_area ul li').removeClass('selected');
            quizArea.find('.quiz_area_icon').removeClass('true false');
            quizArea.find('.quiz_area_bg').hide();
            //問題のカウントを進める
            quiz_cnt++;
            if(quiz_fin_cnt > quiz_cnt){ //追加
                //次の問題を設定する
                quizShow();
            }else{
                //結果表示画面を表示
                quizResult();　 //追加
            }
        }, 1500);
    });

    quizArea.on('click', '.quiz_restart', function(){
      quizReset();
    });
    
    function quizResult(){
      quizArea.find('.quiz_set').hide();
      $text = quiz_fin_cnt + '問中' + quiz_success_cnt + '問正解！';
      if(quiz_fin_cnt === quiz_success_cnt){
          $text += '<br>全問正解おめでとう！';
      }
      $text += '<br><input type="button" value="もう一度挑戦する" class="quiz_restart p-10">';
      quizArea.find('.quiz_result').html($text);
      quizArea.find('.quiz_result').show();
    }

    //リセットを行う関数
    function quizReset(){
      quizArea.html(quiz_html); //表示を元に戻す
      quiz_cnt = 0;
      quiz_success_cnt = 0;
      //aryQuiz = arrShuffle(aryQuiz); //毎回出題の順番をシャッフルしたい場合はここのコメントを消してね
      quizShow();
    }

    //問題を表示する関数
    function quizShow(){
      //何問目かを表示
      quizArea.find('.quiz_no').text((quiz_cnt + 1));
      //問題文を表示
      quizArea.find('.quiz_question').text(aryQuiz[quiz_cnt]['question']);
      //正解の回答を取得する
      var success = aryQuiz[quiz_cnt]['answer'][0];
      //現在の選択肢表示を削除する
      quizArea.find('.quiz_ans_area ul').empty();
      //問題文の選択肢をシャッフルさせる(自作関数) .concat()は参照渡し対策
      var aryHoge = arrShuffle(aryQuiz[quiz_cnt]['answer'].concat());
      //問題文の配列を繰り返し表示する
      $.each(aryHoge, function(key, value){
          var fuga = '<li>' + value + '</li>';
          //正解の場合はdata属性を付与する
          if(success === value){
              fuga = '<li data-true="1">' + value + '</li>';
          }
          quizArea.find('.quiz_ans_area ul').append(fuga);
      });
    }

     //配列をシャッフルする関数
     function arrShuffle(arr){
      for(i = arr.length - 1; i > 0; i--){
          var j = Math.floor(Math.random() * (i + 1));
          var tmp = arr[i];
          arr[i] = arr[j];
          arr[j] = tmp;
      }
      return arr;
    }
  });
});