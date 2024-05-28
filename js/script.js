
    
$(function(){
    // じゃんけんの場合分け
    $('.form-control').on('click', function() {
        const janken = parseInt($(this).data('jan'));
        const randomNumber = Math.ceil(Math.random() * 3);
        
        // CPの手
        if(randomNumber === 1) {
            $('#cp').html('<img src="img/janken_gu.png" class="cp_result" alt="">');
        }else if(randomNumber === 2) {
            $('#cp').html('<img src="img/janken_choki.png" class="cp_result" alt="">');
        }else{
            $('#cp').html('<img src="img/janken_pa.png" class="cp_result" alt="">');
        }
        
        // 結果計算
        if(janken === randomNumber) {
            $('#result').html('あいこ');
        }else if(janken === 1 && randomNumber === 2) {
            $('#result').html('勝ち!');
        }else if(janken === 2 && randomNumber === 3) {
            $('#result').html('勝ち!');
        }else if(janken === 3 && randomNumber === 1) {
            $('#result').html('勝ち!');
        }else{
            $('#result').html('負け');
        }
        
        /*
        //クリックしたら色が変わる
        const button = document.getElementById('.form-control');
        function changeColor(){
        button.classList.toggle("orange");
        }
        //一回だけしかクリックできない
        */
        
    });
    // リセットをする（再読み込みを実施）
    $('#reset').click(function() {
        location.reload(); 
    });
});
