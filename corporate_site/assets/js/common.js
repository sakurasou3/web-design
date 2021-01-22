// JavaScript Document
// HTML、CSS、JSファイル全て読み込んだ後に走る処理：$(function())
// この外に書くとファイル読み込み前に処理が走って落ちることがある
$(function () {
    let topBtn = $("#scroll-top");
    // スクロールしたらボタン表示させるようにするため、初めは消しておく
    topBtn.hide();

    // windowオブジェクトがスクロールされたときのイベント
    $(window).scroll(function(){
        // this = 今回はwindowに当たる
        // console.log($(this).scrollTop());   // スクロールバーの先頭位置
        // console.log($(this).height());      // 見えている画面の高さ(スクロールしても変わらない値)
        if ($(this).scrollTop() > 1000) {
            // 表示
            topBtn.fadeIn();
        } else {
            // 非表示
            topBtn.fadeOut();
        }

        // ボタンのクリック動作をaタグの挙動から上書きする
        topBtn.on("click", function(event) {
            // console.log(event);
            event.preventDefault(); // ページ内リンクの挙動をキャンセル

            // スクロールさせるアニメーション設定
            $("body,html").animate({
                scrollTop: 0
            }, 500);
        });
    });
});
