function sleep(ms) {
    return new Promise(resolve=>setTimeout(resolve,ms))
}
async function factClicked() {
    $('h1#fact').css({"color":"yellow","text-decoration":"underline"});
    await sleep(100);
    alert('Yup, its true!');
    await sleep(100);
    $('h1#fact').css({"color":"white","text-decoration":"none"})
}
var urlParams;
(window.onpopstate = function () {
    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

    urlParams = {};
    while (match = search.exec(query))
       urlParams[decode(match[1])] = decode(match[2]);
})(); 
function sayhi(variable) {
	if (typeof variable !== 'undefined') {
    	
    	alert('hi');
	}
}
sayhi(urlParams['sayhi']);
