$(function () {

  //ページ内スクロール
  var navHeight = $(".header").outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position, }, 300, "swing");
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0, }, 300);
    return false;
  });

});



//スライドショー用
// jQuery
// $(function() {
//   // 最初の画像をアクティブにする
//   $(".slideshow img:first").addClass("active");

//   // 3秒ごとに画像を切り替える関数を定義する
//   function changeImage() {
//     // アクティブな画像を取得する
//     let active = $(".slideshow img.active");
//     // 次の画像を取得する（なければ最初の画像に戻る）
//     let next = active.next().length ? active.next() : $(".slideshow img:first");
//     // アクティブな画像のクラスを外す
//     active.removeClass("active");
//     // 次の画像にクラスを付ける
//     next.addClass("active");
//   }

//   // 3秒ごとに画像を切り替える関数を呼び出す
//   setInterval(changeImage, 3000);
// });