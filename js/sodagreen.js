$(document).ready(function(){
// fullpage
    $('#dowebok').fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4','page5'],
        onLeave: function(index, nextIndex, down){
            $('.page2-2').addClass('donghua')
        }
    });
    var index = 0;
    var maximg = 5;
    var index1=0;
    var maximg1=11;
    //自动播放
    setInterval(function() {
        ShowjQueryFlash(index);
        index++;
        if (index == maximg) {
            index = 0;
        }
    },3000);
    setInterval(function() {
        page4(index1);
        index1++;
        if (index1 == maximg1) {
            index1 = 0;
        }
    },8000);
    // 左侧滑动
    $('.shiting').click(function(){
        $(this).animate({left:'40%'},'slow');
        $('.jt').hide();
        $('.zj').animate({left:'40%'},'slow');

     // },function(){
     //         $(this).animate({left:'0'},'slow');
     //         $('.zj').animate({left:'0'},'slow');
        
    });
// 剪头
$('.qwe').click(function(){
    $('.zj').animate({left:'0'},'slow');
    $('.jt').show(750);
    $('.shiting').animate({left:'0'},'slow');
});
// 隐藏显示
$('.fn').click(function(){

    $('.page3lb').hide();
    $('.cd').show();
    $('.cd-b').addClass('jump');
})

$('.fanhui').click(function(){
     $('.page3lb').show();
    $('.cd').hide();
}) 
// 音乐播放
 //点击播入按扭时
    // var mark = 0; // 暂停
    // $("img.playBut").click(function() {

    //     if (mark == 0) {
    //         $(this).attr("src", "../images/pause.png"); //暂停的图片
    //         $("#Music_audio").get(0).play(); //播放音乐
    //         $("img.xxpic").addClass("zq");
    //         mark = 1; //播放
    //     } else {
    //         $(this).attr("src", "../images/play.png"); //播放按扭图片
    //         $("#Music_audio").get(0).pause(); //暂停音乐
    //         $("img.xxpic").removeClass("zq");
    //         mark = 0; //暂停
    //     }

    // });
});
   
function ShowjQueryFlash(i) {
    $(".top-content div").eq(i).animate({
        opacity: 1
    }, 1000).css({
        "z-index": "1"
    }).siblings().animate({
        opacity: 0.1
    }, 3000).css({
        "z-index": "0"
    });
 }
   
function page4(i) {
    $(".page4-lb div").eq(i).animate({
        opacity: 1
    }, 2000).css({
        "z-index": "1"
    }).siblings().animate({
        opacity: 0
    }).css({
        "z-index": "0"
    });
 }