require.config({
    baseUrl:'https://img1.tiancitycdn.com/cls/homepage/v1/js/requirePbl/',
    paths: {
        jquery: 'lib/jquery-1.7.2.min',
        barryFall: 'api/barryFall',
        popView: 'api/popView',
        preview:'api/preview',
        loadImg:'api/loadImg'
    }
});
 
require(['jquery','barryFall','popView','preview','loadImg'], function($,barryFall,popView,preview,loadImg) {
    $(function(){
        var options = {
            'picPath':'https://img1.tiancitycdn.com/cls/homepage/v1/images/pic/appreciate/',
            'minpicPath':'https://img1.tiancitycdn.com/cls/homepage/v1/images/minpic/appreciate/',
            'unitData':[    
                { 'img':'pic23.jpg','width':'709','height':'1002' },
                { 'img':'pic24.jpg','width':'779','height':'997' },
                { 'img':'pic25.jpg','width':'709','height':'943' },
                { 'img':'pic26.jpg','width':'798','height':'999' },
                { 'img':'pic27.jpg','width':'781','height':'998' },
                { 'img':'pic28.jpg','width':'917','height':'997' },
                { 'img':'pic29.jpg','width':'782','height':'940' },
                { 'img':'pic30.jpg','width':'665','height':'987' },
                { 'img':'pic31.jpg','width':'700','height':'643' },
                { 'img':'pic32.jpg','width':'590','height':'919' },
                { 'img':'pic33.jpg','width':'1003','height':'1002' },
                { 'img':'pic34.jpg','width':'556','height':'1001' },
                { 'img':'pic35.jpg','width':'1094','height':'966' },
                { 'img':'pic36.jpg','width':'892','height':'979' },
                { 'img':'pic37.jpg','width':'802','height':'1000' },
                { 'img':'pic38.jpg','width':'845','height':'980' },
                { 'img':'pic39.jpg','width':'798','height':'950' },
                { 'img':'pic40.jpg','width':'550','height':'969' },
                { 'img':'pic41.jpg','width':'537','height':'1000' },
                { 'img':'pic42.jpg','width':'647','height':'999' },
                { 'img':'pic43.jpg','width':'927','height':'902' },
                { 'img':'pic44.jpg','width':'662','height':'1001' },
                { 'img':'pic45.jpg','width':'1029','height':'956' },
                { 'img':'pic22.jpg','width':'700','height':'1051' },
                { 'img':'pic20.jpg','width':'592','height':'800' },          
                { 'img':'pic21.jpg','width':'578','height':'800' },
                { 'img':'pic0.jpg','width':'700','height':'718' },
                { 'img':'pic1.jpg','width':'611','height':'800' },
                { 'img':'pic2.jpg','width':'525','height':'800' },
                { 'img':'pic3.jpg','width':'640','height':'800' },
                { 'img':'pic4.jpg','width':'700','height':'789' },
                { 'img':'pic5.jpg','width':'690','height':'800' },
                { 'img':'pic6.jpg','width':'559','height':'800' },
                { 'img':'pic7.jpg','width':'559','height':'800' },
                { 'img':'pic8.jpg','width':'992','height':'1378' },
                { 'img':'pic9.jpg','width':'659','height':'800' },
                { 'img':'pic10.jpg','width':'700','height':'593' },
                { 'img':'pic11.jpg','width':'700','height':'622' },
                { 'img':'pic12.jpg','width':'800','height':'612' },
                { 'img':'pic13.jpg','width':'700','height':'565' },
                { 'img':'pic14.jpg','width':'700','height':'392' },
                { 'img':'pic15.jpg','width':'800','height':'313' },
                { 'img':'pic16.jpg','width':'800','height':'528' },
                { 'img':'pic17.jpg','width':'800','height':'350' },
                { 'img':'pic18.jpg','width':'800','height':'512' },
                { 'img':'pic19.jpg','width':'800','height':'349' }
            ],
            'imgWidth':230,
            'introHeight':0,
            'outerOffset':5,
            'innerOffset':0,
            'onUnitClickFun':function(i){
                preview(i);
            }
        };
        $(".imageList").barryFall(options);

        // ‘§º”‘ÿ¥ÛÕº
        var imgList = [],_path = options.picPath;
        $.each(options.unitData,function(i,data){
            imgList.push(data.img);
        });
        $.loadImg({
            'imgList':imgList,
            'url':_path,
            'callFinish':function(errList){ }
        });
    });    
});