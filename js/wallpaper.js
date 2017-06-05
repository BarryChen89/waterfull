require.config({
    baseUrl:'http://img1.tiancitycdn.com/cls/homepage/v1/js/requirePbl/',
    paths: {
        jquery: 'lib/jquery-1.7.2.min',
        barryFall: 'api/barryFall'
    }
});
 
require(['jquery','barryFall'], function($,barryFall) {
    $(function(){
        var options = {
            'picPath':'http://img1.tiancitycdn.com/cls/homepage/v1/images/pic/wp/',
            'minpicPath':'http://img1.tiancitycdn.com/cls/homepage/v1/images/minpic/wp/',
            'unitData':[
                {'img':'wp9_1440x900.jpg',
                 'width':'1440',
                 'height':'900',
                 'intro':'<a href="http://img1.tiancitycdn.com/cls/homepage/v1/images/pic/wp/wp9_1920x1080.jpg" target="_blank" class="pdown1"><i></i>1920 * 1080</a>'
                        +'<a href="http://img1.tiancitycdn.com/cls/homepage/v1/images/pic/wp/wp9_1680x1050.jpg" target="_blank" class="pdown2"><i></i>1680 * 1050</a>'
                        +'<a href="http://img1.tiancitycdn.com/cls/homepage/v1/images/pic/wp/wp9_1440x900.jpg" target="_blank" class="pdown3"><i></i>1440 * 900</a>'
                },
                {'img':'wp10_1440x900.jpg',
                 'width':'1440',
                 'height':'900',
                 'intro':'<a href="http://img1.tiancitycdn.com/cls/homepage/v1/images/pic/wp/wp10_1920x1080.jpg" target="_blank" class="pdown1"><i></i>1920 * 1080</a>'
                        +'<a href="http://img1.tiancitycdn.com/cls/homepage/v1/images/pic/wp/wp10_1680x1050.jpg" target="_blank" class="pdown2"><i></i>1680 * 1050</a>'
                        +'<a href="http://img1.tiancitycdn.com/cls/homepage/v1/images/pic/wp/wp10_1440x900.jpg" target="_blank" class="pdown3"><i></i>1440 * 900</a>'
                },
                {'img':'wp11_1440x900.jpg',
                 'width':'1440',
                 'height':'900',
                 'intro':'<a href="http://img1.tiancitycdn.com/cls/homepage/v1/images/pic/wp/wp11_1920x1080.jpg" target="_blank" class="pdown1"><i></i>1920 * 1080</a>'
                        +'<a href="http://img1.tiancitycdn.com/cls/homepage/v1/images/pic/wp/wp11_1680x1050.jpg" target="_blank" class="pdown2"><i></i>1680 * 1050</a>'
                        +'<a href="http://img1.tiancitycdn.com/cls/homepage/v1/images/pic/wp/wp11_1440x900.jpg" target="_blank" class="pdown3"><i></i>1440 * 900</a>'
                },
                {'img':'wp12_1440x900.jpg',
                 'width':'1440',
                 'height':'900',
                 'intro':'<a href="http://img1.tiancitycdn.com/cls/homepage/v1/images/pic/wp/wp12_1920x1080.jpg" target="_blank" class="pdown1"><i></i>1920 * 1080</a>'
                        +'<a href="http://img1.tiancitycdn.com/cls/homepage/v1/images/pic/wp/wp12_1680x1050.jpg" target="_blank" class="pdown2"><i></i>1680 * 1050</a>'
                        +'<a href="http://img1.tiancitycdn.com/cls/homepage/v1/images/pic/wp/wp12_1440x900.jpg" target="_blank" class="pdown3"><i></i>1440 * 900</a>'
                },
                {'img':'wp13_1440x900.jpg',
                 'width':'1440',
                 'height':'900',
                 'intro':'<a href="http://img1.tiancitycdn.com/cls/homepage/v1/images/pic/wp/wp13_1920x1080.jpg" target="_blank" class="pdown1"><i></i>1920 * 1080</a>'
                        +'<a href="http://img1.tiancitycdn.com/cls/homepage/v1/images/pic/wp/wp13_1680x1050.jpg" target="_blank" class="pdown2"><i></i>1680 * 1050</a>'
                        +'<a href="http://img1.tiancitycdn.com/cls/homepage/v1/images/pic/wp/wp13_1440x900.jpg" target="_blank" class="pdown3"><i></i>1440 * 900</a>'
                },
                {'img':'wp14_1440x900.jpg',
                 'width':'1440',
                 'height':'900',
                 'intro':'<a href="http://img1.tiancitycdn.com/cls/homepage/v1/images/pic/wp/wp14_1920x1080.jpg" target="_blank" class="pdown1"><i></i>1920 * 1080</a>'
                        +'<a href="http://img1.tiancitycdn.com/cls/homepage/v1/images/pic/wp/wp14_1680x1050.jpg" target="_blank" class="pdown2"><i></i>1680 * 1050</a>'
                        +'<a href="http://img1.tiancitycdn.com/cls/homepage/v1/images/pic/wp/wp14_1440x900.jpg" target="_blank" class="pdown3"><i></i>1440 * 900</a>'
                },
                {'img':'wp8_1440x900.jpg',
                 'width':'1440',
                 'height':'900',
                 'intro':'<a href="http://img1.tiancitycdn.com/cls/homepage/v1/images/pic/wp/wp8_1920x1080.jpg" target="_blank" class="pdown1"><i></i>1920 * 1080</a>'
                        +'<a href="http://img1.tiancitycdn.com/cls/homepage/v1/images/pic/wp/wp8_1680x1050.jpg" target="_blank" class="pdown2"><i></i>1680 * 1050</a>'
                        +'<a href="http://img1.tiancitycdn.com/cls/homepage/v1/images/pic/wp/wp8_1440x900.jpg" target="_blank" class="pdown3"><i></i>1440 * 900</a>'
                },
                {'img':'wp7_1440x900.jpg',
                 'width':'1440',
                 'height':'900',
                 'intro':'<a href="http://img1.tiancitycdn.com/cls/homepage/v1/images/pic/wp/wp7_1920x1080.jpg" target="_blank" class="pdown1"><i></i>1920 * 1080</a>'
                        +'<a href="http://img1.tiancitycdn.com/cls/homepage/v1/images/pic/wp/wp7_1680x1050.jpg" target="_blank" class="pdown2"><i></i>1680 * 1050</a>'
                        +'<a href="http://img1.tiancitycdn.com/cls/homepage/v1/images/pic/wp/wp7_1440x900.jpg" target="_blank" class="pdown3"><i></i>1440 * 900</a>'
                },
                {'img':'wp1_1440x900.jpg',
                 'width':'1440',
                 'height':'900',
                 'intro':'<a href="http://img1.tiancitycdn.com/cls/homepage/v1/images/pic/wp/wp1_1920x1080.jpg" target="_blank" class="pdown1"><i></i>1920 * 1080</a>'
                        +'<a href="http://img1.tiancitycdn.com/cls/homepage/v1/images/pic/wp/wp1_1680x1050.jpg" target="_blank" class="pdown2"><i></i>1680 * 1050</a>'
                        +'<a href="http://img1.tiancitycdn.com/cls/homepage/v1/images/pic/wp/wp1_1440x900.jpg" target="_blank" class="pdown3"><i></i>1440 * 900</a>'
                },
                {'img':'wp2_1440x900.jpg',
                 'width':'1440',
                 'height':'900',
                 'intro':'<a href="http://img1.tiancitycdn.com/cls/homepage/v1/images/pic/wp/wp2_1920x1080.jpg" target="_blank" class="pdown1"><i></i>1920 * 1080</a>'
                        +'<a href="http://img1.tiancitycdn.com/cls/homepage/v1/images/pic/wp/wp2_1680x1050.jpg" target="_blank" class="pdown2"><i></i>1680 * 1050</a>'
                        +'<a href="http://img1.tiancitycdn.com/cls/homepage/v1/images/pic/wp/wp2_1440x900.jpg" target="_blank" class="pdown3"><i></i>1440 * 900</a>'
                },
                {'img':'wp3_1440x900.jpg',
                 'width':'1440',
                 'height':'900',
                 'intro':'<a href="http://img1.tiancitycdn.com/cls/homepage/v1/images/pic/wp/wp3_1920x1080.jpg" target="_blank" class="pdown1"><i></i>1920 * 1080</a>'
                        +'<a href="http://img1.tiancitycdn.com/cls/homepage/v1/images/pic/wp/wp3_1680x1050.jpg" target="_blank" class="pdown2"><i></i>1680 * 1050</a>'
                        +'<a href="http://img1.tiancitycdn.com/cls/homepage/v1/images/pic/wp/wp3_1440x900.jpg" target="_blank" class="pdown3"><i></i>1440 * 900</a>'
                },
                {'img':'wp4_1440x900.jpg',
                 'width':'1440',
                 'height':'900',
                 'intro':'<a href="http://img1.tiancitycdn.com/cls/homepage/v1/images/pic/wp/wp4_1920x1080.jpg" target="_blank" class="pdown1"><i></i>1920 * 1080</a>'
                        +'<a href="http://img1.tiancitycdn.com/cls/homepage/v1/images/pic/wp/wp4_1680x1050.jpg" target="_blank" class="pdown2"><i></i>1680 * 1050</a>'
                        +'<a href="http://img1.tiancitycdn.com/cls/homepage/v1/images/pic/wp/wp4_1440x900.jpg" target="_blank" class="pdown3"><i></i>1440 * 900</a>'
                },
                {'img':'wp5_1440x900.jpg',
                 'width':'1440',
                 'height':'900',
                 'intro':'<a href="http://img1.tiancitycdn.com/cls/homepage/v1/images/pic/wp/wp5_1920x1080.jpg" target="_blank" class="pdown1"><i></i>1920 * 1080</a>'
                        +'<a href="http://img1.tiancitycdn.com/cls/homepage/v1/images/pic/wp/wp5_1680x1050.jpg" target="_blank" class="pdown2"><i></i>1680 * 1050</a>'
                        +'<a href="http://img1.tiancitycdn.com/cls/homepage/v1/images/pic/wp/wp5_1440x900.jpg" target="_blank" class="pdown3"><i></i>1440 * 900</a>'
                },
                {'img':'wp6_1440x900.jpg',
                 'width':'1440',
                 'height':'900',
                 'intro':'<a href="http://img1.tiancitycdn.com/cls/homepage/v1/images/pic/wp/wp6_1920x1080.jpg" target="_blank" class="pdown1"><i></i>1920 * 1080</a>'
                        +'<a href="http://img1.tiancitycdn.com/cls/homepage/v1/images/pic/wp/wp6_1680x1050.jpg" target="_blank" class="pdown2"><i></i>1680 * 1050</a>'
                        +'<a href="http://img1.tiancitycdn.com/cls/homepage/v1/images/pic/wp/wp6_1440x900.jpg" target="_blank" class="pdown3"><i></i>1440 * 900</a>'
                }
            ],
            'imgWidth':290,
            'introHeight':50,
            'outerOffset':15,
            'innerOffset':0
        };
        $(".wallpaper").barryFall(options);
    });
});