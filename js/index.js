/**
 * Created by 晨 on 2017/8/20.
 */
require(['jquery','canvas','jquery.cookie'],function($){


    //加载动画
    $(window).load(function(){
        console.log(111);
        //$('body').addClass('loaded');
        $('#loader-wrapper .load_title').remove();
    });



    //网页换肤
    var $skinLi=$('#skin-container li');
    var $skin;
    $skin= $.cookie('skinname');
    if($.cookie('skinname')==null){
        $.cookie('skinname','skin1',{expires:30});
        changeSkin('skin1');
        $('#skin-container'+' .skin1').addClass('selected');

    }
    var skinBflag=true;
    $('#skin').on('click',function(){
        $('#skin-container'+' .'+$skin).addClass('selected');
        if(skinBflag){
            $('#skin-left').add(this).css("left","0");
            $(this).css('left','300px');
        }else{
            $('#skin-left').add(this).css("left","-300px");
            $(this).css('left','0');
        }
        skinBflag=!skinBflag;
    });
    $skinLi.on('click',function(){
        var $oldskin=$((".horizontal-line span")).attr('class');
        $skin=$(this).attr('class').split((/\b/))[0];
        $.cookie('skinname',$skin,{expires:30});
        $(this).addClass('selected').siblings().removeClass('selected');
        removeSkin($oldskin);
        changeSkin($skin);
    });
    changeSkin($skin);
    $('#skin-reset').on('click',function(){
        $skinLi.removeClass('selected');
        $skinLi.eq(0).addClass('selected');
    });
    function removeSkin($oldskin){
        $('.horizontal-line span').add(".left-btn").add('.heading-title h4').removeClass($oldskin);
        $(".smooth-scroll").add(".down-button span").removeClass($oldskin+'-font');
        $('.heading-title h4').removeClass($oldskin+'a');
    }
    function changeSkin($skin){
        $('.horizontal-line span').add(".left-btn").addClass($skin);
        $(".smooth-scroll").add(".down-button span").addClass($skin+'-font');
        $('.heading-title h4').addClass($skin+'a');
    }
    //down-button点击事件
    $('.down-button').on('click',function(){
        $("html, body").animate({
            scrollTop: $("#about").offset().top }, {duration: 1000,easing: "swing"});
        return false;
    });

    //加载动画
    setTimeout(function(){
        $('body').addClass('loaded');
        $('#loader-wrapper .load_title').remove();
    },1000);
    console.log($(window).scrollTop());

    //导航栏

});