/**
 * Created by ³¿ on 2017/8/20.
 */

(function(){
    //¼ÓÔØ¶¯»­
    setTimeout(function(){
        $('body').addClass('loaded');
        $('#loader-wrapper .load_title').remove();
    },1000);
    setTimeout(function(){
        $('#loader-wrapper').css('display','none');
    },2000);


    //ÍøÒ³»»·ô
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
        var $oldskin=$(".horizontal-line span").attr('class');
        $skin=$(this).attr('class').split((/\b/))[0];
        $.cookie('skinname',$skin,{expires:30});
        $(this).addClass('selected').siblings().removeClass('selected');
        removeSkin($oldskin);
        changeSkin($skin);

    });
    var $navLi=$('.nav1 li a').add('#top-menu li a').add('.mobile-home li');
    $('.home').hover(function(){
        var $oldskin=$(".horizontal-line span").attr('class');
        $('.first-list a').addClass($oldskin+'-font');
    },function(){
        var $oldskin=$(".horizontal-line span").attr('class');
        $('.first-list a').removeClass($oldskin+'-font');

    });
    $navLi.hover(function(){
        var $oldskin=$(".horizontal-line span").attr('class');
        $(this).addClass($oldskin+'-font');
    },function(){
        var $oldskin=$(".horizontal-line span").attr('class');

        $(this).removeClass($oldskin+'-font');

    });
    changeSkin($skin);
    $('#skin-reset').on('click',function(){
        $skinLi.removeClass('selected');
        $skinLi.eq(0).addClass('selected');
    });
    function removeSkin($oldskin){
        $('.horizontal-line span').add(".left-btn").add('.heading-title h4').removeClass($oldskin);
        $(".smooth-scroll").add('.record').add(".down-button span").add(".heading-title-2").removeClass($oldskin+'-font');
        $('.heading-title h4').removeClass($oldskin+'a');
    }
    function changeSkin($skin){
        $('.horizontal-line span').add(".left-btn").addClass($skin);
        $(".smooth-scroll").add('.record').add(".down-button span").add(".heading-title-2").addClass($skin+'-font');
        $('.heading-title h4').addClass($skin+'a');
    }
    //down-buttonµã»÷ÊÂ¼þ
    $('.down-button').on('click',function(){
        $("html, body").animate({
            scrollTop: $("#about").offset().top }, {duration: 1000,easing: "swing"});
        return false;
    });

    //ÒÆ¶¯¶Ëµ¼º½À¸ÇÐ»»
    var $nToggle=$('.navbar-toggle');
    $nToggle[0].bflag=true;
    var $mobLi =$('#mobile-menu .nav-menu li')
    $nToggle.on('click',function(){
        if(this.bflag==true){
            $('.icon-bar',this).eq(1).addClass('mid');
            $('.icon-bar',this).eq(2).addClass('bottom');
            $('body').addClass('fullscreen-nav-open');
            $('#mobile-menu').addClass('active').fadeIn('fast');
            $('#icon2').css('display','block');
            $('nav').css('background','white');
            $mobLi.addClass('trans');
            this.bflag=!this.bflag;
        }else{
            closeNav();
        }

        $('#ico').toggle()
    });
    $('.menu-item a').not('.mobile-first-list a' ).add('.mobile-home li').on('click',function(){
        closeNav();
    });
    var $iconBar=$('.icon-bar');
    function closeNav(){
        $iconBar.eq(1).removeClass('mid');
        $iconBar.eq(2).removeClass('bottom');
        $('#mobile-menu').removeClass('active').fadeOut('slow');
        $mobLi.removeClass('trans');
        $('body').removeClass('fullscreen-nav-open');
        $('#icon2').css('display','none');
        $('#ico').css('display','block');
        $('nav').removeAttr('style');
        $nToggle[0].bflag=!$nToggle[0].bflag;
    }
    //Ö÷Ò³ÇÐ»»
    let mFlag=true;
    $('.nav1>li:nth-child(1)').hover(function(){
        $('.home').css('display','block');
    },function(){
        $('.home').css('display','none');
    });
    $('.mobile-first-list').on('click',function(){
        if(mFlag==true){
            $('.mobile-home').fadeIn();
        }else{
            $('.mobile-home').fadeOut();
        }
        mFlag=!mFlag;
        return false;
    });
    //Ö÷Í¼Æ¬ÇÐ»»
    var $mask=$('.header-mask');
    $('.space').on('click',function(){
        $mask.css('background-image','url("img/bg-1.jpg")')
    });
    $('.dusk').on('click',function(){
        $mask.css('background-image','url("img/bg-2.jpg")')
    });
    $('.plateau').on('click',function(){
        $mask.css('background-image','url("img/bg-3.jpg")')
    });
    $('.snow').on('click',function(){
        $mask.css('background-image','url(img/bg-4.jpg)')
    });



    //    µ¼º½À¸ÒÆ¶¯
    var $header=$('nav');

    var $body = $('body');
    let $html= $('html');
    var lastScroll = $body.scrollTop();
    var lastScroll2 = $html.scrollTop();
    function move1 () {
        if(lastScroll-$body.scrollTop()>0){
            $header.css({
                'height':'50px',
                'position':'fixed',
                'overflow':'visible'

            });
            $('#ico').css('display','block');
            if($body.scrollTop()>120){
                $header.css({
                    'background':'black'
                });
            }
        }else if(lastScroll-$body.scrollTop()<0){
            $header.css({
                    'height':'0',
                    'overflow':'hidden'
                }
            );


        }
        lastScroll = $body.scrollTop();
    }
    function move2 () {
        if(lastScroll2-$html.scrollTop()>0){
            $header.css({
                'height':'50px',
                'position':'fixed',
                'overflow':'visible'

            });
            $('#ico').css('display','block');
            if($html.scrollTop()>120){
                $header.css({
                    'background':'black'
                });
            }
        }else if(lastScroll2-$html.scrollTop()<0){
            $header.css({
                    'height':'0',
                    'overflow':'hidden'
                }
            );


        }
        lastScroll2 = $html.scrollTop();
    }
    var timer = setInterval(move1,10);
    var timer2 = setInterval(move2,10);

    setInterval(function(){
        if($body.scrollTop()>120||$html.scrollTop()>120){
            timer = setInterval(move1,10);
            timer2 = setInterval(move2,10);
        }
        else{
            $header.css({
                'position':'fixed',
                'background':'rgba(0,0,0,0)'
            });
            clearInterval(timer);
            clearInterval(timer2);

        }
    },10);
    //    ÎÄ×Ö¶¯»­
    var $sentence1=$('.sentence1');
    var $sentence2=$('.sentence2');
    var $words=$($sentence1.children());
    setTimeout(function(){
        sentence1();
        setTimeout(function(){
            $words=$($sentence2.children());
            sentence2();
        },4000);
        setInterval(function(){

            $words=$($sentence1.children());
            sentence1();
            setTimeout(function(){
                $words=$($sentence2.children());
                sentence2();
            },4000);
        },11000);
    },1500);
    function sentence1(){
        wordfadeIn();
        setTimeout(function(){
            wordSlideDown();
        },2700);
        setTimeout(function(){
            $sentence1.css('display','none');
            $sentence2.css('display','inline');
        },3800);}

    function sentence2(){
        wordfadeIn();
        setTimeout(function(){
            wordSlideDown();
        },4800);
        setTimeout(function(){
            $sentence1.css('display','inline');
            $sentence2.css('display','none');
        },7000);}
    function wordfadeIn(){
        var count=300;
        for(var i=0; i<$words.length;i++){
            var $chars=$($words[i]).children();
            for(var j=0;j<$chars.length;j++){
                var $charj=$($chars[j]);
                count=count+300;
                $charj.removeAttr('style').fadeIn(count);

            }
        }
        return count;
    }
    function wordSlideDown(){
        var count=100;
        for(var i=0; i<$words.length;i++){
            var $chars=$($words[i]).children();
            for(var j=0;j<$chars.length;j++){
                var $charj=$($chars[j]);
                count=count+100;
                $charj.css({
                    'transition':' all 1s ease',
                    'transition-delay': count+'ms',
                    'top':'20px',
                    'filter':'alpha(opacity=0)',
                    'opacity':'0'});
            }

        }
        setTimeout(function(){$chars.fadeOut();},count);

        return count;

    }
//Ò³½ÅÍ¼Æ¬
    $('#footer-i i').hover(function(){
        if($(this).attr('class')=='fa fa-qq'){
            $('.qq').fadeIn('fast');
        }else{
            $('.wechat').fadeIn('fast');

        }
    },function(){
        if($(this).attr('class')=='fa fa-qq'){
            $('.qq').fadeOut('fast');
        }else{
            $('.wechat').fadeOut('fast');

        }
    });

})();








