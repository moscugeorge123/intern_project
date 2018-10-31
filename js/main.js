var ww = document.body.clientWidth;
var data;

var wh = document.body.clientHeight;


var options = {
  useEasing : false, 
  useGrouping : true, 
  separator : '', 
  decimal : '', 
  prefix : '', 
  suffix : '' 
};
if ($("#c1").length) {
    var numAnim = new CountUp("c1", 0, 5, 0, 5, options);
    numAnim.start();
}
if ($("#c2").length) {
    var numAnim = new CountUp("c2", 0, 10, 0, 5, options);
    numAnim.start();
}
if ($("#c3").length) {
    var numAnim = new CountUp("c3", 0, 18, 0, 4, options);
    numAnim.start();
}
 


$(window).on('scroll', function () {
    var offset = $('.b-ayshe-headphones__sliding-block').offset();
    if($(offset).length){
     if($(window).scrollTop() > offset.top - (wh/2)) {
        $('.b-ayshe-headphones__sliding-block').addClass('sliding-headphones');
       } 
    } 
    var redBorder1 = $('.b-ayshe__programme--pic__container.first-pic').offset();
     if($(redBorder1).length){
        if ($(window).scrollTop() > redBorder1.top - (wh/2)) {
            $('.b-ayshe__programme--pic__container.first-pic').css('display','block');
            }
        }
    var redBorder2 = $('.b-ayshe__programme--pic__container.second-pic').offset();
     if($(redBorder2).length){
        if ($(window).scrollTop() > (redBorder2.top) - (wh/2)) {
            $('.b-ayshe__programme--pic__container.second-pic').css('display','block');
            };
        }
        
    var redBorder3 = $('.b-ayshe__programme--pic__container.third-pic').offset();
       if($(redBorder3).length){
        if ($(window).scrollTop() > (redBorder3.top) - (wh/2)) {
            $('.b-ayshe__programme--pic__container.third-pic').css('display','block');
            };   
        }
    var doubts = $('.b-ayshe__red-inner p').offset();
        if($(doubts).length){
            if ($(window).scrollTop() > (doubts.top) - wh) {
                $('.b-ayshe__red-inner p').addClass('fadeInRight');
                $('.b-ayshe__red-inner a').addClass('fadeInLeft');

                };   
            }
            

    });

$(window).on("scroll", function() {
    if(ww > 768){
        $('.b-ayshe-header__main-nav').toggleClass("bg", $(this).scrollTop() > 50);
        $('.b-header-container-fluid').toggleClass("margin", $(this).scrollTop() > 50);
        $('.img-brand').toggleClass("brand", $(this).scrollTop() > 50);
        $('.b-header-navbar').toggleClass("bg", $(this).scrollTop() > 50);
        $('.b-header-navbar-toggle.navbar-toggle').toggleClass("ham", $(this).scrollTop() > 50);
    }
    else{
        $('.b-ayshe-header__main-nav').removeClass('navbar-fixed-top');
        $('.b-ayshe-bottom-header').css('margin-top','40px');
    }
});

 $(document).click(function (event) {
        if ($(event.target).closest('.flexMenu-viewMore').length == 0 && $(event.target).attr('class') != 'flexMenu-popup') {
           $(".flexMenu-viewMore").removeClass("active");

           $(".flexMenu-popup").css("display","none");

        }
});
 $('#home li:not(.flexMenu-viewMore)').click(function(){
    $(".flexMenu-popup").css("display","none");    
 });

$(window).on('scroll', function () {
    if ($(window).scrollTop() > 50) {
        $('.b-ayshe-hidden-menu').addClass('fixed').fadeIn('fast');
    } else {
        $('.b-ayshe-hidden-menu').removeClass('fixed').fadeOut('fast');
    }
});

$('.b-ayshe-header-ul li a').click(function(){

    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 1000);
    return false;
});
$('#b-ayshe-header .b-ayshe-header-ul li a').click(function(){
        $('#b-ayshe-header .b-ayshe-header-ul li a').removeClass('active');
        $(this).addClass('active');

});

var height = $(window).height();
console.log(height);
if(height < 674)
{
    $('.b-ayshe-header-main-heading').css({'font-size':'44px',
                                                  'line-height':'44px'});
};


$('.b-courses-sing-up-hidden-tip').hide();


$('#switch-currency_form').click(function(){

        var curr = ($('#switch-currency_form select :selected').val());
        if(curr === 'uah'){
            $('#five-uah').show();
            $('#five-usd').css('display','none');
            $('#eight-uah').show().siblings('.b-ayshe-bottom-header--sign-up p span').css('display','none');
            $('#book-uah').show().siblings('.b-ayshe-header__booking span').css('display','none');
        }
        if(curr === 'usd'){
            $('#five-uah').css('display','none');
            $('#five-usd').css('display','block');
            $('#eight-usd').css('display','inline-block').siblings('.b-ayshe-bottom-header--sign-up p span').css('display','none');
            $('#book-usd').css('display','inline-block').siblings('.b-ayshe-header__booking span').css('display','none');

        }
       


           
});

$(document).ready(function() {

     $('.b-level-course-list-table_header--btn-right').click(function(){
        $("html, body").animate({
            scrollTop: 0
        }, 400);
        return false;
    
     });

     $('input[type="tel"]').mask("(999) 999-9999");


    $(".dayCourse tr.no").each(function(e) {
        if ($(this).next().hasClass("no") && !($(this).hasClass('green')) && !($(this).hasClass('blue')) && !($(this).hasClass('orange')) && !($(this).hasClass('lblue')) && !($(this).hasClass('purl')) && !($(this).hasClass('yellow')))
            $(this).css('display', 'none');
    });


    if (ww < 768) {

        $('table.orenda_grid td').css('display', 'block');

        $('table.orenda_grid:first').after($('table.orenda_grid td[rowspan]'));

        $(' td[rowspan] a').css({
            "display": "block",
            "height": "50px",
            "width": "100%",
            "border-radius": "5px",
            "background": "#0CAC7C",
            "color": "white",
            "text-align": "center",
            "line-height": "50px",
            "text-decoration": "none",
            "color": 'white',
            "margin": "10px auto"

        })


    }


    $(window).hashchange(function() {
        var hash = location.hash;
        var res = (hash.replace(/^#!\//, '') || 'blank');
        console.log(res);

        if (res == 'blank') {
            // console.log('try');

            // console.log($('.close-button.close-button--show').html());

            $('.close-button.close-button--show').trigger('click');
        }
    });



    $('.grid__item').on('click', function() {

        var url = window.location + '';

        if (url.indexOf('#t') == -1) window.location += '#t';
        else {}

        // alert(window.location);



    });


    $("#flex li a").each(function() {
        if ($(this).next().length > 0) { $(this).addClass("parent"); };
    })

    $('li[role="presentation"]').on('click', function() {

        setTimeout(function() {

            $("div.priceZone").pin({ containerSelector: "#dayContent", minWidth: 940 });

        }, 200);

    });


    // $(".timeTableCourses.dayCourse td")



    $(".navbar-toggle").click(function(e) { e.preventDefault();
        $(this).toggleClass("active");
        $("#flex").toggle(); });
    adjustMenu();


    data = browserDetectNav(); //вызываем функцию, параметр НЕ передаем,

    console.log(data);

    if (data[0] == 'Firefox') {
        $(".timeTableCourses.dayCourse").addClass('moz');
        console.log("addClass moz"); //выводим результат

        $('#dd, #dd1').css('display', 'none');
        $('.timeTableCourses.dayCourse td').css('padding','7px');

    }
})
$(".en-page-banner").height($(window).height());
$(".en-banner-scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#en-content").offset().top - 30
    }, 1000);
});

$(window).scroll(function() {
    var winHeight = $(window).height() - 100;
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled == 100) {
        $('html, body').animate({
            scrollTop: $("#en-content").offset().top - 30
        }, 1000);
    };

});


$(window).bind('resize orientationchange', function() { ww = document.body.clientWidth;
    adjustMenu(); });


var adjustMenu = function() {
    if (ww <= 965) {

        $("#header .navbar-toggle").css("display", "inline-block");
        if (!$("#header .navbar-toggle").hasClass("active")) {
            $("#flex").hide();
        }
        else {
            $("#flex").show();
        }
        $("#flex li").unbind('mouseenter mouseleave');
        $("#flex li a.parent").unbind('click').bind('click', function(e) { e.preventDefault();
            $(this).parent("li").toggleClass("hover"); });
    } else if (ww >= 966) { $("#header .navbar-toggle").css("display", "none");
        $("#flex").show();
        $("#flex li").removeClass("hover");
        $("#flex li a").unbind('click');
        $("#flex li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() { $(this).toggleClass('hover'); }); }
}
$(document).ready(function() {
    if ($(document).width() > 768) {

        var hei = 0;
        $(".timeTableCourses.dayCourse tr.infoRow").each(function() {

            hei = ($(this).height() > hei) ? $(this).height() : hei;

        });

        $(".timeTableCourses.dayCourse tr.infoRow").height(hei);

        if (data[0] != 'Firefox') {

            $(".timeTableCourses.dayCourse tr:not(.infoRow)").each(function() {

                var hei = 0;

                var curHei, curHei1, curHei2;

                curHei = $(this).height();

                $(this).find('td:nth-of-type(2)').each(function() {

                    curHei1 = $(this).height();

                    $(this).find('> *').each(function() {

                        curHei2 = $(this).height();

                        hei = (curHei2 > hei) ? curHei2 : hei;
                    });

                    // hei = ($(this).height() > hei) ? $(this).height() : hei;
                });

                hei = (curHei > hei) ? curHei : hei;

                $(this).find('td').height(hei);

            });



        }
    } else {

        $(".timeTableCourses.dayCourse tr:not(.infoRow) td").each(function() {

            if ($(this).html() == "" || $(this).html() == "<span></span>" || $(this).text() == "") { $(this).css('display', 'none'); };

        });

    }

    var body_he = $('body > div.content').height();
    var wind_he = $(window).height();
    var hed_foot = $('#header').height() + $('#footer').height() - 20;
    $('body > div.content').css('min-height', wind_he - hed_foot);
    $('.placeholder').css({ 'height': wind_he - 150 });
    $('#TwoListsCourses a').click(function(e) { e.preventDefault();
        $(this).tab('show'); })
    // if ($(document).width() > 768) $('#flex').flexMenu();

    // if($(document).width()<768){

    // $('.filter3').flexMenu();
    // $('ul.filter3 .flexMenu-viewMore a').text('Фильтры по направления  ▼').on('click',function(){
    //  var last=$(this).text().charAt($(this).text().length-1);(last=="▼")?$(this).text($(this).text().replace("▼","▲")):$(this).text($(this).text().replace("▲","▼"));
    // });
    // }

    $('ul.filter').flexMenu();
    $('.content #filter').flexMenu();

    function call() {
        $('.b-courses-sing-up-hidden-tip').hide();

        var map = $('#contact').find('input[name=roadmap]').val();
        var msg;
        if (map == 'list_full_payment' || map == 'list_pay_part' || map == 'choice_full_payment' || map == 'choice_pay_part') {
            msg = $('#cnt-order').serialize();
        } else {
            var choosen_course = $('#contact').find('select').find('option:selected').text() || $('#cnt-order > div.items > h3').text();
            msg = $('#cnt-order').serialize();
            msg += "&name_course=" + choosen_course;
        }

        msg += "&url=" + location.href + "&backurl=" + $('.send-again').attr('href') + "&id_course=" + $('#id_course').val();
        
        var val_name = $('#course-sign-up-name').val();
        var rv_name = /^[a-zA-Zа-яА-ЯіІїЇєЄ'][a-zA-Zа-яА-Я-' іІїЇєЄ]+[a-zA-Zа-яА-ЯіІїЇєЄ']?$/;
        var val_email = $('#course-sign-up-email').val();
        var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
        var val_tel = $('#maskTel').val();

        if(val_name != '' && rv_name.test(val_name) && val_email != '' && rv_email.test(val_email) && val_tel != '' && val_tel.length >= 10)  {

        var dataScript;
        
    }
    else{
        
        $('.b-courses-sing-up-hidden-tip').show();
    }

        function shii(data) { $('body').append(data); }
    }
    $('#cnt-order').on('submit', call);
    var contentSwiperEl = $('#main-slider');
    if (contentSwiperEl.length > 0) {
        var contentSwiper = $('#main-slider').swiper({ pagination: '.additional-clickers', grabCursor: true, autoplay: 5000, paginationClickable: true, onSlideChangeStart: function() { updateNavPosition(); } });
        var moveToClickedNumber = function(swiper) { swiper.swipeTo(swiper.clickedSlideIndex);
            contentSwiper.swipeTo(swiper.clickedSlideIndex); }
        var navSwiper = new Swiper('#slider-tizer-news', { slidesPerView: 'auto', grabCursor: true, mousewheelControl: true, mode: 'vertical', scrollbar: { container: '.swiper-scrollbar', hide: false, draggable: true }, onSlideClick: moveToClickedNumber, });
        $('.wrapper-main-slider').on('mouseover', function() { contentSwiper.stopAutoplay();
            navSwiper.stopAutoplay(); });
        $('.wrapper-main-slider').on('mouseleave', function() { contentSwiper.startAutoplay();
            navSwiper.startAutoplay(); });

        function updateNavPosition() { $('#slider-tizer-news .active-nav').removeClass('active-nav');
            var activeNav = $('#slider-tizer-news .swiper-slide').eq(contentSwiper.activeIndex).addClass('active-nav');
            if (!activeNav.hasClass('swiper-slide-visible')) {
                if (activeNav.index() > navSwiper.activeIndex) {
                    var thumbsPerNav = Math.floor(navSwiper.width / activeNav.width()) - 1;
                    navSwiper.swipeTo(activeNav.index() - thumbsPerNav); } else { navSwiper.swipeTo(activeNav.index()); } } }
    }
    var $container = $('#container');

    function val_coursHeight() {
        function getMaxOfArray(numArray) {
            return Math.max.apply(null, numArray); }
        var heights = [];
        var block = $('.val_cours');
        if (block.hasClass('reg')) return;
        if (block) {
            block.each(function() { heights.push($(this).height()); });
            block.height(getMaxOfArray(heights));
        }
    }

    function isoLinkHeight() {
        function getMaxOfArray(numArray) {
            return Math.max.apply(null, numArray); }
        var heights = [];
        var block = $('#course a.isoLink[role]');
        if (block) { block.each(function() { heights.push($(this).height());
                console.log('lol!'); });
            block.height(getMaxOfArray(heights)); } }
    isoLinkHeight();
    val_coursHeight();
    $('select').dropdown();
    var acordionBtn = $('#timeTableButtons .moreInfo');
    var acorCondition = true;
    acordionBtn.on('click', function() {
        var acordion = $(this).parents('#timeTableButtons').find('.accordion');
        $(this).toggleClass('active');
        acordion.toggleClass('active');
        var tAc = $(this).parents('#timeTableButtons').find('p.mainPage');
        var valAc = (acorCondition) ? 'Скрыть' : 'Показать больше';
        acorCondition = !acorCondition;
        tAc.html(valAc); });
    $("div.courseSideBar").pin({ containerSelector: "#contForSide", minWidth: 940 });


    $("div.priceZone").pin({ containerSelector: "#dayContent", minWidth: 940 });


    $('.search-block').css({ 'display': 'none' });
    $('.search-function span').removeClass('close-search').addClass('open-search');
    $('.search-function span').bind('click', function() { console.log($('.search-function span').hasClass('close-search'));
        if ($(this).hasClass('close-search')) { console.log($(this));
            $('.search-block').css({ 'display': 'none' });
            $('.search-function span').removeClass('close-search').addClass('open-search'); } else if ($(this).hasClass('open-search')) { console.log("-");
            $('.search-block').css({ 'display': 'block' });
            $('.search-function span').removeClass('open-search').addClass('close-search'); } });
    if ($('.open_select_course')[0]) { $('.open_select_course').bind('click', function() {
            if ($(this).hasClass('active')) { $(this).removeClass('active'); } else { $(this).addClass('active'); } }); }
    if ($('.open-hidden-block')[0]) { $('.open-hidden-block').bind('click', function() {
            if ($(this).hasClass('active')) { $(this).removeClass('active'); } else { $(this).addClass('active'); } });
        $('#full-time').css({ 'display': 'block' });
        $('#full-time-link').mouseover(function() { $('#full-time').css({ 'display': 'block' });
            $(this).addClass('active');
            $('#evening-link').mouseover(function() { $('#full-time').css({ 'display': 'none' });
                $('#full-time-link').removeClass('active'); }); });
        $('#evening-link').mouseover(function() { $('#evening').css({ 'display': 'block' });
            $(this).addClass('active');
            $('#full-time-link').mouseover(function() { $('#evening').css({ 'display': 'none' });
                $('#evening-link').removeClass('active'); }); }); }
    if ($('#flb-lightbox-content')[0]) { $('#flb-lightbox-content img').css({ 'max-width': '400px', 'max-height': '300px' });
        $('.gallery-item').css({ 'margin': '0' }); }
    if ($('.tabs_section')[0]) { $(".name_cource .fixed_block_name").pin({ containerSelector: ".name_fixed" });
        $('.tabs_section .tabs_box').css({ 'display': 'none' });
        $('.tabs_section .tabs_box.visible').css({ 'display': 'block' });
        $(".tabs_box:not(.visible)").css({ 'display': 'none' }); }
    if ($('.desc-course-full-time')[0]) { $(".desc-course-full-time .fixed-courses-block-full-time").pin2({ containerSelector: ".full-desc-course-full-time", minWidth: 280, minHeight: 1000 }); }
    $('.link_wrap').click(function(event) {
        return false; });
    if ($('.date-rent-order')[0]) { $('.date-rent-order').click(function() {
            if (!$(this).hasClass('active')) { $(this).addClass('active');
                $('#calendar-rent-order').css({ "display": "block" });
                $('#calendar-rent-order').datepicker({ firstDay: 1, altField: '#dateBron', altFormat: 'yy-mm-dd', hightlight: { format: "yy-mm-dd", values: [], settings: {} } }); } else { $(this).removeClass('active');
                $('#calendar-rent-order').css({ "display": "none" }); } }); }
    if ($('.form_order')[0]) { $('.form_order label span strong').parent().next().focusout(function() {
            if ($(this).val() == '') $(this).css({ 'border-color': '#cc0000' });
            else if ($(this).val() != '') $(this).css({ 'border-color': '#167A38' });
            else { $(this).css({ 'border-color': '#D3D3D3' });
                $(this).focus(function() { $(this).css({ 'border-color': '#00A1AB' }); }); } });
        $(".form_order input[value='']").css({ 'color': '#aaa' });
        $(".form_order input[type='text'],.form_order input[type='email'],.form_order input[type='tel']").keypress(function() { $(this).css({ 'color': '#222' }); }); }
    if ($('.children_course')[0]) { $('.children_course').parent().siblings('.course_list').css({ 'display': 'none', 'width': '100%' });
        $('.children_course').click(function() {
            if ($(this).hasClass('active')) { $(this).find('.cost_skype_block').css({ 'display': 'none', 'width': '100%' });
                $(this).parent().siblings('.course_list').css({ 'display': 'none' }); } else { $(this).parent().siblings('.course_list').css({ 'display': 'table' });
                $(this).next('.hidden-block').find('.cost_skype_block').css({ 'display': 'block', 'width': '100%' }); } }); }
    if ($('.profi-course')[0]) { $('.profi-course').parent('.skype-block-left').parent('.skype-block').parent('.cost_skype_block').parent('.hidden-block').parent('.tabs-course').find('.children_course').empty();
        $('.profi-course').parent('.skype-block-left').parent('.skype-block').parent('.cost_skype_block').parent('.hidden-block').empty(); }
    if ($(".name-course")[0]) { $(".name-course").next('.hidden-block').find('.skype-block-left').find(".lector").appendTo($(".name-course.active").next('.hidden-block').find('.lector-course'));
        $('.name-course').click(function() {
            if ($(this).hasClass('active')) { $(this).removeClass('active');
                $(this).find('.plus-icon').removeClass('active');
                $(this).find('.right').text('Развернуть');
                $(this).parent().removeClass('active');
                $(this).parent().find('.hidden-block').slideUp(500);
                $('html, body').animate({ scrollTop: $('table').offset().top + 100 }, 1000); } else { $(this).find('.plus-icon').addClass('active');
                $(this).find('.right').text('Свернуть');
                $(this).addClass('active');
                $(this).parent().addClass('active');
                $(this).next('.hidden-block').slideDown(500);
                $('html, body').animate({ scrollTop: $('table').offset().top + 50 }, 1000); } });
        $(".lector").css({ 'display': 'none' }); }
    if ($('.okoverf')[0]) { $('.okoverf').addClass('overlay'); }
    if ($('#okoverf2')[0]) { $('#okoverf').addClass('overlay'); }
    if ($('.ico-course-evening')[0]) { $('.ico-course-evening').hover(function() { $(this).find('img').attr('src', $(this).find($('.ico-course-link-active')).text()); }, function() { $(this).find('img').attr('src', $(this).find($('.path-ico-img')).text()); }); }
    if ($('#broadcrumbs-evening')[0]) { $('#broadcrumbs-evening span:nth-of-type(5)').css({ 'display': 'none' }).next().css({ 'display': 'none' });
        $('#broadcrumbs-evening span:nth-of-type(3)').css({ 'display': 'none' }).next().css({ 'display': 'none' }); }
    if ($('.broadcrumbs_course')[0]) { $('.broadcrumbs_course span:nth-of-type(3)').css({ 'display': 'none' }).next().css({ 'display': 'none' }); }
    $('ul.filter > li.current').trigger('click');
});

function moveRed(i) { i = $('.fotorama__nav__frame--dot.fotorama__active').index();
    $('#menu li').removeClass('act');
    $('#menu li#' + i).addClass('act');
    setTimeout(moveRed, 1);
    i++; }
$(document).keydown(function(e) {
    if (e.keyCode === 27) { $('.search-function span').click();
        return false; } });
(function($) {
    var methods = { options: { "optionClass": "", "dropdownClass": "", "autoinit": false, "callback": false }, init: function(options) {
            if (options) { options = $.extend(methods.options, options); } else { options = methods.options; }

            function initElement($select) {
                if ($select.data("dropdownjs") || !$select.is("select")) {
                    return; }
                var multi = $select.attr("multiple");
                var $dropdown = $("<div></div>");
                $dropdown.addClass("dropdownjs").addClass(options.dropdownStyle);
                $dropdown.data("select", $select);
                var $input = $("<input type=text readonly>");
                if ($.material) { $input.data("mdproc", true); }
                $dropdown.append($input);
                var $ul = $("<ul></ul>");
                $dropdown.append($ul);
                $input.attr("placeholder", $select.attr("placeholder"));
                $select.find("option").each(function() {
                    var $this = $(this);
                    var $option = $("<li></li>");
                    $option.addClass(options.optionStyle);
                    if ($this.text()) { $option.text($this.text()); } else { $option.html("&nbsp;"); }
                    $option.attr("value", $this.val());
                    if ($this.attr("selected")) { $option.attr("selected", true); }
                    $ul.append($option); });
                var selectOptions = $dropdown.find("li");
                if (!multi) {
                    var $selected;
                    if ($ul.find("[selected]").length) { $selected = $ul.find("[selected]").last(); } else { $selected = $ul.find("li").first(); }
                    methods._select($dropdown, $selected); } else { methods._select($dropdown, $ul.find("[selected]")); }
                $input.addClass($select[0].className);
                $select.hide().attr("data-dropdownjs", true);
                $select.after($dropdown);
                if (options.callback) { options.callback($dropdown); }
                selectOptions.on("click", function(e) { methods._select($dropdown, $(this)); });
                selectOptions.on("keydown", function(e) {
                    if (e.which === 27) { $(".dropdownjs > ul > li").each(function() { $(this).attr("tabindex", -1); });
                        return $input.removeClass("focus").blur(); }
                    if (e.which === 32) { methods._select($dropdown, $(this));
                        return false; } });
                selectOptions.on("focus", function() {
                    if ($select.is(":disabled")) {
                        return; }
                    $input.addClass("focus"); });
                $input.on("click focus", function(e) { e.stopPropagation();
                    if ($select.is(":disabled")) {
                        return; }
                    $(".dropdownjs > ul > li").each(function() { $(this).attr("tabindex", -1); });
                    $(".dropdownjs > input").not($(this)).removeClass("focus").blur();
                    selectOptions.each(function() { $(this).attr("tabindex", 0); });
                    var coords = { top: $(this).offset().top - $(document).scrollTop(), left: $(this).offset().left - $(document).scrollLeft(), bottom: $(window).height() - ($(this).offset().top - $(document).scrollTop()), right: $(window).width() - ($(this).offset().left - $(document).scrollLeft()) };
                    var height = coords.bottom;
                    if (height < 200 && coords.top > coords.bottom) { height = coords.top;
                        $ul.attr("placement", "top-left"); } else { $ul.attr("placement", "bottom-left"); }
                    $(this).next("ul").css("max-height", height - 20);
                    $(this).addClass("focus"); });
                $(document).on("click", function() { $(".dropdownjs > ul > li").each(function() { $(this).attr("tabindex", -1); });
                    $input.removeClass("focus"); }); }
            if (options.autoinit) { $(document).on("DOMNodeInserted", function(e) {
                    var $this = $(e.target);
                    if ($this.is("select") && $this.is(options.autoinit)) { initElement($this); } }); }
            $(this).each(function() { initElement($(this)); }); }, select: function(target) {
            var $target = $(this).find("[value=\"" + target + "\"]");
            methods._select($(this), $target); }, _select: function($dropdown, $target) {
            var $select = $dropdown.data("select"),
                $input = $dropdown.find("input");
            var multi = $select.attr("multiple");
            var selectOptions = $dropdown.find("li");
            if (multi) { $target.toggleClass("selected");
                var $selected = $select.find("[value=\"" + $target.attr("value") + "\"]");
                if ($selected.attr("selected")) { $selected.attr("selected", true); } else { $selected.attr("selected", false); }
                var text = [];
                selectOptions.each(function() {
                    if ($(this).hasClass("selected")) { text.push($(this).text()); } });
                $input.val(text.join(", ")); }
            if (!multi) { selectOptions.not($target).removeClass("selected");
                $target.addClass("selected");
                $select.val($target.attr("value"));
                $input.val($target.text()); }
            if ($.material) {
                if ($input.val().trim()) { $select.removeClass("empty"); } else { $select.addClass("empty"); } } } };
    $.fn.dropdown = function(params) {
        if (methods[params]) {
            return methods[params].apply(this, Array.prototype.slice.call(arguments, 1)); } else if (typeof params === "object" | !params) {
            return methods.init.apply(this, arguments); } else { $.error("Method " + params + " does not exists on jQuery.dropdown"); } }; })(jQuery);


$(window).load(



    function() {



        // $(".flip-container:not(.edu) a, #moreM").on('click', function(e){

        //      //console.log($(this));



        //      var fil = $(this).attr('data-filter');

        //      console.log(fil);

        //      $('#course li[data-filter="'+fil+'"]').trigger('click');




        //      $('body').animate({
        //           scrollTop: $("#course").offset().top - 90}, 1000);

        //      if (data[0] == 'Firefox') {

        //          document.getElementById('course').scrollIntoView(true);

        //      };


        //      e.preventDefault();
        //       return false; 

        //    });

        $('.gallery').masonry({
            itemSelector: '.gallery-item',
            isFitWidth: true
        }).imagesLoaded(function() {
            console.log("reload");
            $('.gallery').masonry('reload');
        });

        var $container = $('#container');
        var $container = $('.isotope').isotope({ resizable: false, itemSelector: '.item', layoutMode: 'fitRows' });



        if (data[0] != 'Firefox') {
            $('table.timeTableCourses.dayCourse tr.no th').css('display', 'block');

            con = $('.timeTableCourses.dayCourse').isotope({ resizable: true, containerStyle: { position: 'relative', overflow: 'visible' }, itemSelector: 'tr', layoutMode: 'fitRows' });
        }


        $('.filter li').on('click', function(event) {
            if ($(this).hasClass('flexMenu-viewMore')) return;
            $('.filter li').removeClass('current');
            $(this).addClass('current');
            var filterValue = $(this).attr('data-filter');
            $container.isotope({ filter: filterValue });
            event.stopPropagation(); });


        $('.filter3 li').on('click', function(event) {




            $('.filter3 li').removeClass('current');
            $(this).toggleClass('current');
            var filterValue = "";
            $('.filter3 li.current').each(
                function(indx, element) {


                    filterValue += " " + $(element).attr('data-filter');


                    $('#dd1 ul li').css('display', 'none');

                    if (filterValue == ' *') {
                        $('#dd1 ul li').css('display', 'list-item');
                    } else {

                        $('#dd1 ul li' + filterValue.substr(1)).css('display', 'list-item');


                    }
                }

            );
            filterValue = filterValue.substr(1);
            filterValue = filterValue.replace(new RegExp(" ", 'g'), ",");
            con.isotope({ filter: filterValue });

            event.stopPropagation();
            scrollspy();

            $('#dd , #dd1').removeClass('active');

            $('#dd span').text($(this).text());

            $('#dd1 span').text('Все технологии');


        });


        $('#dd1').on('click', 'li', function() {
            var filterValue = $(this).attr('data-filter');
            con.isotope({ filter: filterValue });
            $('#dd1 li').removeClass('current');
            $('#dd1 li[data-filter = "' + filterValue + '"]').addClass('current');
            $('#dd1 span').text($(this).text());

            $('#dd1').toggleClass('active');
        });

        $('#direction').on('click', 'a', function() {
            var filterValue = $(this).attr('data-filter');
            $container.isotope({ filter: filterValue });
            $('.filter li').removeClass('current');
            $('.filter li[data-filter = "' + filterValue + '"]').addClass('current');
        });

        if ($('.blue').height() && data[0] != 'Firefox') {

            $('.blue').scrollToFixed({ marginTop: 80 });
            $('.yellow').scrollToFixed({ marginTop: 80 });
            $('.green').scrollToFixed({ marginTop: 80 });
            $('.lblue').scrollToFixed({ marginTop: 80 });
            $('.purl').scrollToFixed({ marginTop: 80 });
            $('.pink').scrollToFixed({ marginTop: 80 });
            $('.hucki').scrollToFixed({ marginTop: 80 });
            $('.orange').scrollToFixed({ marginTop: 80 });
        };

    });



(function($) {
    var flexObjects = [],
        resizeTimeout;

    function adjustFlexMenu() { $(flexObjects).each(function() { $(this).flexMenu({ 'undo': true }).flexMenu(this.options); }); }

    function collapseAllExcept($menuToAvoid) {
        var $activeMenus, $menusToCollapse;
        $activeMenus = $('li.flexMenu-viewMore.active');
        $menusToCollapse = $activeMenus.not($menuToAvoid);
        $menusToCollapse.removeClass('active').find('> ul').hide();
    }
    // $(window).resize(function() { clearTimeout(resizeTimeout);
    //     resizeTimeout = setTimeout(function() { adjustFlexMenu(); }, 1); });
    $.fn.flexMenu = function(options) {
        var checkFlexObject, s = $.extend({ 'threshold': 2, 'cutoff': 2, 'linkText': 'Еще', 'linkTitle': 'View More', 'linkTextAll': 'Просмотреть все направления', 'linkTitleAll': 'Open/Close Menu', 'showOnHover': true, 'popupAbsolute': true, 'undo': false }, options);
        this.options = s;
        checkFlexObject = $.inArray(this, flexObjects);
        if (checkFlexObject >= 0) { flexObjects.splice(checkFlexObject, 1); } else { flexObjects.push(this); }
        return this.each(function() {
            var $this = $(this),
                $items = $this.find('> li'),
                $self = $this,
                $firstItem = $items.first(),
                $lastItem = $items.last(),
                numItems = $this.find('li').length,
                firstItemTop = Math.floor($firstItem.offset().top),
                firstItemHeight = Math.floor($firstItem.outerHeight(true)),
                $lastChild, keepLooking, $moreItem, $moreLink, numToRemove, allInPopup = false,
                $menu, i;

            function needsMenu($itemOfInterest) {
                var result = (Math.ceil($itemOfInterest.offset().top) >= (firstItemTop + firstItemHeight)) ? true : false;
                return result; }
            if (needsMenu($lastItem) && numItems > s.threshold && !s.undo && $this.is(':visible')) {
                var $popup = $('<ul class="flexMenu-popup" style="display:none;' + ((s.popupAbsolute) ? ' position: absolute;' : '') + '"></ul>'),
                    firstItemOffset = $firstItem.offset().top;
                for (i = numItems; i > 1; i--) { $lastChild = $this.find('> li:last-child');
                    keepLooking = (needsMenu($lastChild));
                    $lastChild.appendTo($popup);
                    if ((i - 1) <= s.cutoff) { $($this.children().get().reverse()).appendTo($popup);
                        allInPopup = true;
                        break; }
                    if (!keepLooking) {
                        break; } }
                if (allInPopup) { $this.append('<li class="flexMenu-viewMore flexMenu-allInPopup"><a href="#" title="' + s.linkTitleAll + '">' + s.linkTextAll + '</a></li>'); } else { $this.append('<li class="flexMenu-viewMore"><a href="#" title="' + s.linkTitle + '">' + s.linkText + '</a></li>'); }
                $moreItem = $this.find('> li.flexMenu-viewMore');
                if (needsMenu($moreItem)) { $this.find('> li:nth-last-child(2)').appendTo($popup); }
                $popup.children().each(function(i, li) { $popup.prepend(li); });
                $moreItem.append($popup);
                $moreLink = $this.find('> li.flexMenu-viewMore > a');
                $moreLink.click(function(e) { collapseAllExcept($moreItem);
                    $popup.toggle();
                    $moreItem.toggleClass('active');
                    e.preventDefault(); });


                if (s.showOnHover && (typeof Modernizr !== 'undefined') && !Modernizr.touch) { $moreItem.hover(function() { $popup.show();
                        $(this).addClass('active'); }, function() { $popup.hide();
                        $(this).removeClass('active'); }); } } else if (s.undo && $this.find('ul.flexMenu-popup')) { $menu = $this.find('ul.flexMenu-popup');
                numToRemove = $menu.find('li').length;
                for (i = 1; i <= numToRemove; i++) { $menu.find('> li:first-child').appendTo($this); }
                $menu.remove();
                $this.find('> li.flexMenu-viewMore').remove(); } }); };
    })(jQuery);




function scrollspy() {

    console.log("atat");

    $('.yellow').trigger('detach.ScrollToFixed');
    $('.blue').trigger('detach.ScrollToFixed');
    $('.green').trigger('detach.ScrollToFixed');
    $('.lblue').trigger('detach.ScrollToFixed');
    $('.purl').trigger('detach.ScrollToFixed');
    $('.pink').trigger('detach.ScrollToFixed');
    $('.hucki').trigger('detach.ScrollToFixed');
    $('.orange').trigger('detach.ScrollToFixed');



}



function browserDetectNav(chrAfterPoint)

{

    var

        UA = window.navigator.userAgent, // содержит переданный браузером юзерагент

        //--------------------------------------------------------------------------------

        OperaB = /Opera[ \/]+\w+\.\w+/i, //

        OperaV = /Version[ \/]+\w+\.\w+/i, // 

        FirefoxB = /Firefox\/\w+\.\w+/i, // шаблоны для распарсивания юзерагента

        ChromeB = /Chrome\/\w+\.\w+/i, //

        SafariB = /Version\/\w+\.\w+/i, //

        IEB = /MSIE *\d+\.\w+/i, //

        SafariV = /Safari\/\w+\.\w+/i, //

        //--------------------------------------------------------------------------------

        browser = new Array(), //массив с данными о браузере

        browserSplit = /[ \/\.]/i, //шаблон для разбивки данных о браузере из строки

        OperaV = UA.match(OperaV),

        Firefox = UA.match(FirefoxB),

        Chrome = UA.match(ChromeB),

        Safari = UA.match(SafariB),

        SafariV = UA.match(SafariV),

        IE = UA.match(IEB),

        Opera = UA.match(OperaB);



    //----- Opera ----

    if ((!Opera == "") & (!OperaV == "")) browser[0] = OperaV[0].replace(/Version/, "Opera")

    else

    if (!Opera == "") browser[0] = Opera[0]

    else

    //----- IE -----

    if (!IE == "") browser[0] = IE[0]

    else

    //----- Firefox ----

    if (!Firefox == "") browser[0] = Firefox[0]

    else

    //----- Chrom ----

    if (!Chrome == "") browser[0] = Chrome[0]

    else

    //----- Safari ----

    if ((!Safari == "") && (!SafariV == "")) browser[0] = Safari[0].replace("Version", "Safari");

    //------------ Разбивка версии -----------



    var

        outputData; // возвращаемый функцией массив значений

    // [0] - имя браузера, [1] - целая часть версии

    // [2] - дробная часть версии

    if (browser[0] != null) outputData = browser[0].split(browserSplit);

    if ((chrAfterPoint == null) && (outputData != null))

    {

        chrAfterPoint = outputData[2].length;

        outputData[2] = outputData[2].substring(0, chrAfterPoint); // берем нужное ко-во знаков

        return (outputData);

    } else return (false);

}


(function($, window, undefined) {
    '$:nomunge'; // Used by YUI compressor.

    // Reused string.
    var str_hashchange = 'hashchange',

        // Method / object references.
        doc = document,
        fake_onhashchange,
        special = $.event.special,

        // Does the browser support window.onhashchange? Note that IE8 running in
        // IE7 compatibility mode reports true for 'onhashchange' in window, even
        // though the event isn't supported, so also test document.documentMode.
        doc_mode = doc.documentMode,
        supports_onhashchange = 'on' + str_hashchange in window && (doc_mode === undefined || doc_mode > 7);

    // Get location.hash (or what you'd expect location.hash to be) sans any
    // leading #. Thanks for making this necessary, Firefox!
    function get_fragment(url) {
        url = url || location.href;
        return '#' + url.replace(/^[^#]*#?(.*)$/, '$1');
    };

    // Method: jQuery.fn.hashchange
    // 
    // Bind a handler to the window.onhashchange event or trigger all bound
    // window.onhashchange event handlers. This behavior is consistent with
    // jQuery's built-in event handlers.
    // 
    // Usage:
    // 
    // > jQuery(window).hashchange( [ handler ] );
    // 
    // Arguments:
    // 
    //  handler - (Function) Optional handler to be bound to the hashchange
    //    event. This is a "shortcut" for the more verbose form:
    //    jQuery(window).bind( 'hashchange', handler ). If handler is omitted,
    //    all bound window.onhashchange event handlers will be triggered. This
    //    is a shortcut for the more verbose
    //    jQuery(window).trigger( 'hashchange' ). These forms are described in
    //    the <hashchange event> section.
    // 
    // Returns:
    // 
    //  (jQuery) The initial jQuery collection of elements.

    // Allow the "shortcut" format $(elem).hashchange( fn ) for binding and
    // $(elem).hashchange() for triggering, like jQuery does for built-in events.
    $.fn[str_hashchange] = function(fn) {
        return fn ? this.bind(str_hashchange, fn) : this.trigger(str_hashchange);
    };

    // Property: jQuery.fn.hashchange.delay
    // 
    // The numeric interval (in milliseconds) at which the <hashchange event>
    // polling loop executes. Defaults to 50.

    // Property: jQuery.fn.hashchange.domain
    // 
    // If you're setting document.domain in your JavaScript, and you want hash
    // history to work in IE6/7, not only must this property be set, but you must
    // also set document.domain BEFORE jQuery is loaded into the page. This
    // property is only applicable if you are supporting IE6/7 (or IE8 operating
    // in "IE7 compatibility" mode).
    // 
    // In addition, the <jQuery.fn.hashchange.src> property must be set to the
    // path of the included "document-domain.html" file, which can be renamed or
    // modified if necessary (note that the document.domain specified must be the
    // same in both your main JavaScript as well as in this file).
    // 
    // Usage:
    // 
    // jQuery.fn.hashchange.domain = document.domain;

    // Property: jQuery.fn.hashchange.src
    // 
    // If, for some reason, you need to specify an Iframe src file (for example,
    // when setting document.domain as in <jQuery.fn.hashchange.domain>), you can
    // do so using this property. Note that when using this property, history
    // won't be recorded in IE6/7 until the Iframe src file loads. This property
    // is only applicable if you are supporting IE6/7 (or IE8 operating in "IE7
    // compatibility" mode).
    // 
    // Usage:
    // 
    // jQuery.fn.hashchange.src = 'path/to/file.html';

    $.fn[str_hashchange].delay = 50;
    /*
    $.fn[ str_hashchange ].domain = null;
    $.fn[ str_hashchange ].src = null;
    */

    // Event: hashchange event
    // 
    // Fired when location.hash changes. In browsers that support it, the native
    // HTML5 window.onhashchange event is used, otherwise a polling loop is
    // initialized, running every <jQuery.fn.hashchange.delay> milliseconds to
    // see if the hash has changed. In IE6/7 (and IE8 operating in "IE7
    // compatibility" mode), a hidden Iframe is created to allow the back button
    // and hash-based history to work.
    // 
    // Usage as described in <jQuery.fn.hashchange>:
    // 
    // > // Bind an event handler.
    // > jQuery(window).hashchange( function(e) {
    // >   var hash = location.hash;
    // >   ...
    // > });
    // > 
    // > // Manually trigger the event handler.
    // > jQuery(window).hashchange();
    // 
    // A more verbose usage that allows for event namespacing:
    // 
    // > // Bind an event handler.
    // > jQuery(window).bind( 'hashchange', function(e) {
    // >   var hash = location.hash;
    // >   ...
    // > });
    // > 
    // > // Manually trigger the event handler.
    // > jQuery(window).trigger( 'hashchange' );
    // 
    // Additional Notes:
    // 
    // * The polling loop and Iframe are not created until at least one handler
    //   is actually bound to the 'hashchange' event.
    // * If you need the bound handler(s) to execute immediately, in cases where
    //   a location.hash exists on page load, via bookmark or page refresh for
    //   example, use jQuery(window).hashchange() or the more verbose 
    //   jQuery(window).trigger( 'hashchange' ).
    // * The event can be bound before DOM ready, but since it won't be usable
    //   before then in IE6/7 (due to the necessary Iframe), recommended usage is
    //   to bind it inside a DOM ready handler.

    // Override existing $.event.special.hashchange methods (allowing this plugin
    // to be defined after jQuery BBQ in BBQ's source code).
    special[str_hashchange] = $.extend(special[str_hashchange], {

        // Called only when the first 'hashchange' event is bound to window.
        setup: function() {
            // If window.onhashchange is supported natively, there's nothing to do..
            if (supports_onhashchange) {
                return false; }

            // Otherwise, we need to create our own. And we don't want to call this
            // until the user binds to the event, just in case they never do, since it
            // will create a polling loop and possibly even a hidden Iframe.
            $(fake_onhashchange.start);
        },

        // Called only when the last 'hashchange' event is unbound from window.
        teardown: function() {
            // If window.onhashchange is supported natively, there's nothing to do..
            if (supports_onhashchange) {
                return false; }

            // Otherwise, we need to stop ours (if possible).
            $(fake_onhashchange.stop);
        }

    });

    // fake_onhashchange does all the work of triggering the window.onhashchange
    // event for browsers that don't natively support it, including creating a
    // polling loop to watch for hash changes and in IE 6/7 creating a hidden
    // Iframe to enable back and forward.
    fake_onhashchange = (function() {
        var self = {},
            timeout_id,

            // Remember the initial hash so it doesn't get triggered immediately.
            last_hash = get_fragment(),

            fn_retval = function(val) {
                return val; },
            history_set = fn_retval,
            history_get = fn_retval;

        // Start the polling loop.
        self.start = function() {
            timeout_id || poll();
        };

        // Stop the polling loop.
        self.stop = function() {
            timeout_id && clearTimeout(timeout_id);
            timeout_id = undefined;
        };

        // This polling loop checks every $.fn.hashchange.delay milliseconds to see
        // if location.hash has changed, and triggers the 'hashchange' event on
        // window when necessary.
        function poll() {
            var hash = get_fragment(),
                history_hash = history_get(last_hash);

            if (hash !== last_hash) {
                history_set(last_hash = hash, history_hash);

                $(window).trigger(str_hashchange);

            } else if (history_hash !== last_hash) {
                location.href = location.href.replace(/#.*/, '') + history_hash;
            }

            timeout_id = setTimeout(poll, $.fn[str_hashchange].delay);
        };



        return self;
    })();

})(jQuery, this);


var initPhotoSwipeFromDOM = function(gallerySelector) {

    // parse slide data (url, title, size ...) from DOM elements 
    // (children of gallerySelector)
    var parseThumbnailElements = function(el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;

        for(var i = 0; i < numNodes; i++) {

            figureEl = thumbElements[i]; // <figure> element

            // include only element nodes 
            if(figureEl.nodeType !== 1) {
                continue;
            }

            linkEl = figureEl.children[0]; // <a> element

            size = linkEl.getAttribute('data-size').split('x');

            // create slide object
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };



            if(figureEl.children.length > 1) {
                // <figcaption> content
                item.title = figureEl.children[1].innerHTML; 
            }

            if(linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            } 

            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }

        return items;
    };

    // find nearest parent element
    var closest = function closest(el, fn) {
        return el && ( fn(el) ? el : closest(el.parentNode, fn) );
    };

    // triggers when user clicks on thumbnail
    var onThumbnailsClick = function(e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;

        var eTarget = e.target || e.srcElement;

        // find root element of slide
        var clickedListItem = closest(eTarget, function(el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });

        if(!clickedListItem) {
            return;
        }

        // find index of clicked item by looping through all child nodes
        // alternatively, you may define index via data- attribute
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;

        for (var i = 0; i < numChildNodes; i++) {
            if(childNodes[i].nodeType !== 1) { 
                continue; 
            }

            if(childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }



        if(index >= 0) {
            // open PhotoSwipe if valid index found
            openPhotoSwipe( index, clickedGallery );
        }
        return false;
    };

    // parse picture index and gallery index from URL (#&pid=1&gid=2)
    var photoswipeParseHash = function() {
        var hash = window.location.hash.substring(1),
        params = {};

        if(hash.length < 5) {
            return params;
        }

        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if(!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');  
            if(pair.length < 2) {
                continue;
            }           
            params[pair[0]] = pair[1];
        }

        if(params.gid) {
            params.gid = parseInt(params.gid, 10);
        }

        return params;
    };

    var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;

        items = parseThumbnailElements(galleryElement);

        // define options (if needed)
        options = {

            // define gallery index (for URL)
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),

            getThumbBoundsFn: function(index) {
                // See Options -> getThumbBoundsFn section of documentation for more info
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect(); 

                return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
            }

        };

        // PhotoSwipe opened from URL
        if(fromURL) {
            if(options.galleryPIDs) {
                // parse real index when custom PIDs are used 
                // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                for(var j = 0; j < items.length; j++) {
                    if(items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                // in URL indexes start from 1
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }

        // exit if index not found
        if( isNaN(options.index) ) {
            return;
        }

        if(disableAnimation) {
            options.showAnimationDuration = 0;
        }

        // Pass data to PhotoSwipe and initialize it
        gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };

    // loop through all gallery elements and bind events
    var galleryElements = document.querySelectorAll( gallerySelector );

    for(var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i+1);
        galleryElements[i].onclick = onThumbnailsClick;
    }

    // Parse URL and open gallery if it contains #&pid=3&gid=1
    var hashData = photoswipeParseHash();
    if(hashData.pid && hashData.gid) {
        openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
    }
};

// execute above function
initPhotoSwipeFromDOM('.my-gallery');