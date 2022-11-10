function turnLampOnOrOff() {
    var lampOn = document.getElementById("imagem-lampada-ligada");
    var lampOff = document.getElementById("imagem-lampada-desligada");
    var button = document.getElementById("btn-lamp");
    var body = document.getElementsByTagName("BODY")[0];

  if (lampOn.style.display === "none") {
    lampOn.style.display = "block";
    lampOff.style.display = "none"
    button.innerText = "DESLIGAR";
    body.style.backgroundColor = "white";

} else {
    lampOn.style.display = "none";
    lampOff.style.display = "block"
    button.innerText = "LIGAR";
    body.style.backgroundColor = "black";
  }
}