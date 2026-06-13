function gerarQR() {
    let texto = document.getElementById("text").value;

    if (!texto) {
        alert("Digite um texto ou URL!");
        return;
    }

    let qrDiv = document.getElementById("qrcode");

    qrDiv.innerHTML = "";

    new QRCode(qrDiv, {
        text: texto,
        width: 180,
        height: 180,
        colorDark: "#000000",
        colorLight: "#ffffff"
    });
}
