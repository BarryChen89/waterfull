
define(['jquery','popView'],function($,popView) {

    var showPreview = function(i){
        var dlList = $('.unitContainer dl'),
            imgUrl = dlList.eq(i).find('img').attr('src').replace('/minpic','/pic'),
            pVC = $(".preview-container"),
            prev = pVC.find('.prev'),
            next = pVC.find('.next'),
            closeBtn = pVC.find('.closeBtn');
        if(i==0){ 
            prev.hide();
            next.show().unbind('click').click(function(){
                showPreview(i+1);
            });
        }
        else if(i==dlList.length-1){ 
            next.hide();
            prev.show().unbind('click').click(function(){
                showPreview(i-1);
            });
        }
        else {
            prev.show().unbind('click').click(function(){
                showPreview(i-1);
            });
            next.show().unbind('click').click(function(){
                showPreview(i+1);
            });
        }
        closeBtn.click(function(){
            pVC.find("img").attr('src','');
        });
        pVC.find("img").attr('src',imgUrl);
        if(!pVC.is(":visible")) popView.showPopView('.preview-container');
    }
    return showPreview;
});