// Variáveis Imagens
let imgEstrada;
let imgAtor;
let imgCarro1;
let imgCarro2;
let imgCarro3;

// Variáveis Audio
let somColidiu;
let somPontos;
let somTrilha;

function preload() {
  imgEstrada = loadImage("./imgs/estrada.png");
  imgAtor = loadImage("./imgs/ator-1.png");
  imgCarro1 = loadImage("./imgs/carro-1.png");
  imgCarro2 = loadImage("./imgs/carro-2.png");
  imgCarro3 = loadImage("./imgs/carro-3.png");
  imgCarros = [
    imgCarro1,
    imgCarro2,
    imgCarro3,
    imgCarro1,
    imgCarro2,
    imgCarro3,
  ];
  somColidiu = loadSound("./sounds/colidiu.mp3");
  somPontos = loadSound("./sounds/pontos.wav");
  somTrilha = loadSound("./sounds/trilha.mp3");
}
