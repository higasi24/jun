$(document).on('turbolinks:load', function(){
  $(function(){
    $(".location-sign").animate({
      'top': '40px',
      'right': '230px'
    },{
        'duration': 1500,
        'complete': function(){
          $(".location-navi").show(500);
        }
      }
    );
  });
});