
var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: "https://htoohe.github.io/My-site/Fun.mp4",
    width: 200,
    height: 200,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});
