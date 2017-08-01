//初始化根字体大小
console.log(document.documentElement.clientWidth)
document.getElementsByTagName("html")[0].style.fontSize=document.documentElement.clientWidth/20+'px';
window.onresize = function(){
	setTimeout(function(){
		document.getElementsByTagName("html")[0].style.fontSize=document.documentElement.clientWidth/20+'px';		
	},300);
}