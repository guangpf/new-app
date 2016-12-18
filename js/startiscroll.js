var myScroll;

function loaded () {
	myScroll = new IScroll('#wrapper', { 
		preventDefault:false
		/*bounceEasing: 'elastic', bounceTime: 1200 */});
}
window.addEventListener("load",loaded,false);
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, true);