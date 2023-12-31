// Variáveis carro
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];
let wCarro = 50;
let hCarro = 40;

function mostraCarro() {
  for (let i = 0; i < imgCarros.length; i++) {
    image(imgCarros[i], xCarros[i], yCarros[i], wCarro, hCarro);
  }
}

function movimentaCarro() {
  for (let i = 0; i < imgCarros.length; i++) {
    xCarros[i] -= velocidadeCarros[i];
  }
}

function reiniciaMovimento() {
  for (let i = 0; i < imgCarros.length; i++) {
    if (passouTodaATela(xCarros[i])) {
      xCarros[i] = 600;
    }
  }
}

function passouTodaATela(xCarro) {
  return xCarro < -50;
}
