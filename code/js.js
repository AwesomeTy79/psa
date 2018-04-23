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