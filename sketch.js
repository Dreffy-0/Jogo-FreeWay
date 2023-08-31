function setup() {
    createCanvas(500, 400);
    somTrilha.loop();
  }
  
  function draw() {
    background(imgEstrada);
    mostraAtor();
    movimentaAtor();
    mostraCarro();
    movimentaCarro();
    reiniciaMovimento();
    verificaColisao();
    incluiPontos();
    marcarPonto();
  }
  