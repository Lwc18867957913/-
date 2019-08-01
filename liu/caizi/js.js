$('.icon-quanping').click(function () {
    var docElm = document.documentElement;
    if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen();
        $('.icon-liebiaoshouqi').css('transform', 'rotate(0deg)')
    }
    if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
    }
})



/* var ss=document.getElementsByClassName('shuo');
console.log(ss) */
$(".list_dt").click(function () {
    $('.list_dd').stop();
    $(this).siblings("dt").removeAttr("id");
    if ($(this).attr("id") == "open") {
        $(this).removeAttr("id").siblings("dd").slideUp();
    } else {
        $(this).attr("id", "open").next().slideDown().siblings("dd").slideUp();
    }
});


$(".list_dtt").click(function () {
    $('.list_dd').stop();
    $(this).siblings("dt").removeAttr("id");
    if ($(this).attr("id") == "open") {
        $(this).removeAttr("id").siblings("dd").slideUp();
    } else {
        $(this).attr("id", "open").next().slideDown().siblings("dd").slideUp();
    }
});

$('.icon-liebiaoshouqi').click(() => {
    if (Math.round($('.right-column').width()) <= 60) {
        $('.right-column').width('240px')
        $('.shuo').css({ "opacity": '1' })
        $('.head').css("padding-left", '240px')
        $('.nei').css("padding-left", '240px')
        $('.icon-liebiaoshouqi').css('transform', 'rotate(0deg)')
        $('.logo').css("left", '0px')

    } else {
        $('.right-column').width('60px')
        $('.head').css({ "padding-left": '60px' })
        $('.shuo').css({ "opacity": '0' })
        $('.nei').css({ "padding-left": '60px' })
        $('.icon-liebiaoshouqi').css('transform', 'rotate(180deg)')
        $('.logo').css("left", '-180px')
    }
})



$(".icon-liebiaoshouqi").click(function () {
    $('.list_dd').stop();
    $('dd').siblings("dt").removeAttr("id");
    if ($("dd").attr("id") == "open") {
        $("dd").removeAttr("id").siblings("dd").slideUp();
    } else {
        $("dd").attr("id", "open").next().slideDown().siblings("dd").slideUp();

    }
});


$('.list_dt').click(() => {
    if (Math.round($('.right-column').width()) <= 60) {
        $('.right-column').width('240px')
        $('.shuo').css({ "opacity": '1' })
        $('.head').css("padding-left", '240px')
        $('.nei').css("padding-left", '240px')
        $('.logo').css("left", "0")
        $('.icon-liebiaoshouqi').css('transform', 'rotate(0deg)')
    }
})


$(window).resize(() => {
    $(window).width() <= 990 ? $('.right-column').width('0px') : $('.right-column').width('240px')
    $(window).width() <= 990 ? $('.shuo').css({ "opacity": '0' }) : $('.shuo').css({ "opacity": '1' })
    $(window).width() <= 990 ? $('.head').css({ "padding-left": '0px' }) : $('.head').css({ "padding-left": '240px' })
    $(window).width() <= 990 ? $('.logo').css({ "left": '-240px' }) : $('.logo').css({ "left": '0px' })
   
})
$(window).width() <= 990 ? $('.right-column').width('0px') : $('.right-column').width('240px')
$(window).width() <= 990 ? $('.head').css({ "padding-left": '0px' }) : $('.head').css({ "padding-left": '240px' })





