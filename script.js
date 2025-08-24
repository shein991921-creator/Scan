
var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: "https://precious-lily-776d00.netlify.app/autoplay.mp4",
    width: 200,
    height: 200,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});
