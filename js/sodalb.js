$(window).ready(function() {
    var imgLen = $("#pic>img").length;
    var lastIndex = Math.floor(imgLen / 2); //初始中间图片序列号
    var imgLeft = [];
    //为每个img添加初始命名
    for (var i = 0; i < imgLen; i++) {
        if (i < lastIndex) {
            $("#pic>img").eq(i).addClass("front");
        } else if (i > lastIndex) {
            $("#pic>img").eq(i).addClass("back");
        } else {
            $("#pic>img").eq(i).addClass("now");
        };
    };

    //当前图片页面居中左右排开函数
    function mid() {
        var oWid = $(window).width(); //窗口宽度
        var oimg=$('#pic>img').width();
        var mIndex = $(".now").index(); //当前图片序列号
        $(".now").css("left", oWid / 2 - oimg/2 + 'px'); //当前图片位置居中
        //左右图片排开，再获取每个图片的left数值
        for (var i = 0; i < imgLen; i++) {
            $("#pic>img").eq(i).css("left", oWid / 2 - oimg/2 - 100 * (mIndex - i) + 'px');
            imgLeft[i] = parseInt($("#pic>img").eq(i).css("left"));
        }

    };
    mid(); //执行
    $(window).resize(function() {
        mid()
    }); //调整窗口时再执行

    //点击事件
$("#pic>img").click(function() {
        var nowIndex = $(this).index();
        //所有图片位置移动
        for (var i = 0; i < imgLen; i++) {
            imgLeft[i] -= 100 * (nowIndex - lastIndex);
            $("#pic>img").eq(i).css("left", imgLeft[i]);
        };

        for (var i = 0; i < imgLen; i++) {
            if (i < nowIndex) {
                $("#pic>img").eq(i).removeClass().addClass("front");
            } else if (i > nowIndex) {
                $("#pic>img").eq(i).removeClass().addClass("back");
            };
        };

        lastIndex = nowIndex; //替换当前图片序列号
        //当前图片添加类名now
        $(this).removeClass().addClass("now").siblings().removeClass("now");
    });
});
