//Variáveis ator
let xAtor = 100;
let yAtor = 366;
let wAtor = 30; //largura
let hAtor = 30; //Altura
let colisao = false;
let meusPontos = 0;

function mostraAtor() {
  image(imgAtor, xAtor, yAtor, wAtor, hAtor);
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (podeSeMover()) {
      yAtor += 3;
    }
  }
}

function verificaColisao() {
  for (let i = 0; i < imgCarros.length; i++) {
    colisao = collideRectCircle(
      xCarros[i],
      yCarros[i],
      wCarro,
      hCarro,
      xAtor,
      yAtor,
      15
    );
    if (colisao) {
      colidiu();
      somColidiu.play();
      if (pontosMaiorQueZero()) {
        meusPontos -= 1;
      }
    }
  }
}

function colidiu() {
  yAtor = 366;
}

function incluiPontos() {
  textAlign(CENTER);
  fill(color(138, 46, 226));
  text(meusPontos, 400, 26);
  textSize(25);
}

function marcarPonto() {
  if (yAtor < 15) {
    meusPontos += 1;
    yAtor = 366;
    somPontos.play();
  }
}
function pontosMaiorQueZero() {
  return meusPontos > 0;
}

function podeSeMover() {
  return yAtor < 366;
}
