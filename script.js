
var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: "https://shein991921-creator.github.io/Scan/itch.mp4",
    width: 200,
    height: 200,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});
