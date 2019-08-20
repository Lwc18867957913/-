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
    $(window).width() <= 990 ? $('.nei').css({ "padding-left": '0px' }) : $('.nei').css({ "padding-left": '240px' })
    $(window).width() <= 990 ? $('.nei-yi-yi').css({ "width": '100%' }) : $('.nei-yi-yi').css({ "width": '49.9%' })
    $(window).width() <= 990 ? $('.nei-yi-yii').css({ "width": '100%' }) : $('.nei-yi').css({ "width": '49.9%' })
    $(window).width() <= 990 ? $('.nei-yi').css({ "width": '100%' }) : $('.nei-yi').css({ "width": '65%' })
    $(window).width() <= 990 ? $('.nei-er').css({ "width": '100%' }) : $('.nei-er').css({ "width": '35%' })
    $(window).width() <= 990 ? $('.nei-er').css({ "margin-top": '390px' }) : $('.nei-er').css({ "margin-top": '45px' })
})
$(window).width() <= 990 ? $('.right-column').width('0px') : $('.right-column').width('240px')
$(window).width() <= 990 ? $('.head').css({ "padding-left": '0px' }) : $('.head').css({ "padding-left": '240px' })
$(window).width() <= 990 ? $('.nei').css({ "padding-left": '0px' }) : $('.nei').css({ "padding-left": '240px' })
$(window).width() <= 990 ? $('.nei-yi').css({ "width": '100%' }) : $('.nei-yi').css({ "width": '65%' })
$(window).width() <= 990 ? $('.nei-er').css({ "width": '100%' }) : $('.nei-er').css({ "width": '35%' })
$(window).width() <= 990 ? $('.nei-er').css({ "margin-top": '390px' }) : $('.nei-er').css({ "margin-top": '45px' })
$(window).width() <= 990 ? $('#container').css({ "max-width": '1015px' }) : $('#container').css({ "max-width": '1015px' })
$(window).width() <= 990 ? $('#containerr').css({ "max-width": '1015px' }) : $('#containerr').css({ "max-width": '1015px' })
$(window).width() <= 990 ? $('.canvas').css({ "width": '100%' }) : $('.canvas').css({ "width": '1014.61px' })










$('.nei-qie').hover(function () {
    $('.nei-yi-yie').css({ 'left': '0' })
    $('.nei-yi-yiei').css({ 'left': '100%' })
    $('.nei-qiee').css({ 'background': '#e2e2e2' })
    $('.nei-qie').css({ 'background': '#999' })
})
$('.nei-qiee').hover(function () {
    $('.nei-yi-yie').css({ 'left': '-100%' })
    $('.nei-yi-yiei').css({ 'left': '0' })
    $('.nei-qie').css({ 'background': '#e2e2e2' })
    $('.nei-qiee').css({ 'background': '#999' })
})

$('.nei-qiek').hover(function () {
    $('.nei-yi-yiee').css({ 'left': '0' })
    $('.nei-yi-yieey').css({ 'left': '100%' })
    $('.nei-qieet').css({ 'background': '#e2e2e2' })
    $('.nei-qiek').css({ 'background': '#999' })
})
$('.nei-qieet').hover(function () {
    $('.nei-yi-yiee').css({ 'left': '-100%' })
    $('.nei-yi-yieey').css({ 'left': '0' })
    $('.nei-qiek').css({ 'background': '#e2e2e2' })
    $('.nei-qieet').css({ 'background': '#999' })
})

$('.nei-qien').hover(function () {
    $('#container').css({ 'left': '0' })
    $('#containerr').css({ 'left': '100%' })
    $('.nei-qieem').css({ 'background': '#e2e2e2' })
    $('.nei-qien').css({ 'background': '#999' })
})
$('.nei-qieem').hover(function () {
    $('#container').css({ 'left': '-100%' })
    $('#containerr').css({ 'left': '0' })
    $('.nei-qien').css({ 'background': '#e2e2e2' })
    $('.nei-qieem').css({ 'background': '#999' })
})
var rgb = document.getElementById('nei-bianse');
var color = ['#009688', '#1E9FFF', '#ff5722'];
var b = 0
setInterval(function () {
    if (b < 3) {
        rgb.style.background = color[b];
        b++;
    } else {
        b = 0;
    }
}, 2000);