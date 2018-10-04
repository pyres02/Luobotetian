/*
* @Author: admin
* @Date:   2018-08-29 19:16:51
* @Last Modified by:   admin
* @Last Modified time: 2018-09-29 14:33:37
*/

/*头部的背景控制*/
$(document).mousewheel(function(e,b){
	var wh=$(window).height();
	var th=$(window).scrollTop();
	console.log(wh);
	console.log(th)
	if(th>wh){
		$('.mynav').css('background','#000')
	}else{
		$('.mynav').css('background','none')
	}
})


$('.mylist ').hover(function() {
	var index=$(this).index();
	$(".homepic").eq(index).css('opacity','0.6').siblings('').css('opacity', '1');
	 $('.code').eq(index).stop().slideDown(1000).siblings('').stop().slideUp();

}, function() {
	$(".homepic").css('opacity','1');
	 $('.code').stop().slideUp();
	
});


/*底部部分*/
$('footer ul li').hover(function() {
	 var index=$(this).index();
	 $(this).addClass('current').siblings('').removeClass('current')
}, function() {
	$(this).removeClass('current')
});


/*右边栏部分*/

$('.myulist').hover(function() {
	$(this).addClass('current');
}, function() {
	$(this).removeClass('current');
});

  // 增加类的函数
    function addclass(n){
        $('.olist li').eq(n).addClass('current').siblings('').removeClass('current')
        $('.ulist li').eq(n).addClass('current').siblings('').removeClass('current')
       

      }

// 滚动事件
	  $(window).scroll(function(event) {

       var wt=$(window).scrollTop()+$(window).height();

           if(wt>=$('.mybox4').offset().top){
	    		// 调用函数
            addclass(4);

	    	}else if(wt>=$('.mybox3').offset().top){

	    		addclass(3);

	    	}else if(wt>=$('.mybox2').offset().top){

	    		addclass(2);

	    	}else if(wt>=$('.mybox1').offset().top){
	    		addclass(1);

	    	}else {
	    		addclass(0);
	    	}

        // 回到顶部的显示
  	
	      if(wt>$(window).height()){
	         $('.myretop').fadeIn();
	      }else{
	         $('.myretop').fadeOut(1000);
	      }


	    
 });

// 右边栏点击部分
  $('.ulist li').click(function(event) {
        var index=$(this).index();
     
       
     console.log('index:'+index)

        $('html,body').animate({'scrollTop':$('.mybox'+index).offset().top});

      });

// 点击回到顶部
 $('.myretop').click(function(event) {
        
        $('html,body').animate({'scrollTop':'0'},1000);

      })