  let mic;

  let AMP_MIN = 0.2;
  let AMP_MAX = 0.3;

  let amortiguacion = 0.7;

  let amp;
  let haySonido = false;
  let antesHabiaSonido = false;
  let comienzo = false;
  let comienzo1 = false;

  let gestoramp;

  //Declaracion rectangulos y fondo
  let cantidad;
  let rectangulo1 = [];
  let rectangulo2 = [];
  let fondo;

  function setup(){
    mic = new p5.AudioIn();
    mic.start();
    userStartAudio();

    gestoramp = new GestorSenial(AMP_MIN, AMP_MAX);

    gestoramp.f = amortiguacion;

    cantidad=4;
  
    for(let i=0; i<cantidad; i++){
    rectangulo1[i]= new Caminante();
    }

    for(let i=0; i<cantidad; i++){
    rectangulo2[i]= new Caminante2();
    }

    createCanvas(1000, 700);
    fondo = new Fondo();
  }

  function draw(){
    background(0);

    gestoramp.actualizar(mic.getLevel());
    amp = gestoramp.filtrada;
    haySonido = amp > AMP_MIN;
    let empezoElSonido = haySonido && !antesHabiaSonido;

    fondo.dibujar();

    for(let i=0; i<rectangulo2.length; i++){
      if(!comienzo){
      rectangulo1[i].prueba();
      rectangulo2[i].prueba();
      }
    }
    for(let i=0; i<rectangulo1.length; i++){
      
      if(empezoElSonido){
      rectangulo1[i].mover();
      }
      rectangulo1[i].dibujar();
      comienzo = true;
    }
    for(let i=0; i<rectangulo2.length; i++){
      if(empezoElSonido){
      rectangulo2[i].mover();
      }
      rectangulo2[i].dibujar();
    }
  }