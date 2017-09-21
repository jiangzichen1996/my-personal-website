/**
 * Created by ³¿ on 2017/8/20.
 */
require(['jquery','canvas'],function($){

    $('#about img').on('click',function(){
        alert('hah');
        alert('you fool');
    });
    var skinBflag=true;
    $('#skin').on('click',function(){
        if(skinBflag){
            $('#skin-left').add(this).css("left","0");
            $(this).css('left','300px');
        }else{
            $('#skin-left').add(this).css("left","-300px");
            $(this).css('left','0');
        }
        skinBflag=!skinBflag;


    });
    var $skinLi=$('#skin-container li');
    $skinLi.on('click',function(){
        $(this).addClass('selected').siblings().removeClass('selected');
    });
    $('#skin-reset').on('click',function(){
        $skinLi.removeClass('selected');
        $skinLi.eq(0).addClass('selected');
    })









    });