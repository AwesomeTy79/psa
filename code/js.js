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
function getParameterByName(name, url) {
    if (!url) {url = window.location.href;}
    var name = name.replace('/[\[\]]/g', "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) {return null;}
    if (!results[2]) {return '';}
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
(function () { var sayhi = getParameterByName('sayhi'); if (sayhi != null || sayhi != false) { alert('hi'); } }());
