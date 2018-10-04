/*
* @Author: admin
* @Date:   2018-09-27 19:01:52
* @Last Modified by:   admin
* @Last Modified time: 2018-09-27 19:12:17
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