$(function() {
 // id属性がredの要素がクリックされたら
 $('#change-color').on('click', function(){
   // id属性がtargetの要素のcolorプロパティをredにする
   $('#target').css('color', 'red');
 });

  // id属性がredの要素がクリックされたら
 $('#change-text').on('click', function(){
   // id属性がtargetの要素のcolorプロパティをredにする
    $('P').text('Hello!');
 });

  // id属性がredの要素がクリックされたら
 $('#fade-out').on('click', function(){
   // id属性がtargetの要素のcolorプロパティをredにする
    $('P').fadeOut();
});
  // id属性がredの要素がクリックされたら
 $('#fade-in').on('click', function(){
   // id属性がtargetの要素のcolorプロパティをredにする
    $('P').fadeIn();
});

});