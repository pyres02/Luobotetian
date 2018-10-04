/*
* @Author: admin
* @Date:   2018-09-27 20:07:46
* @Last Modified by:   admin
* @Last Modified time: 2018-09-28 09:31:05
*/

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


