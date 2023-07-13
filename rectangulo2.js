class Caminante2 {
    constructor(){
     this.img1 = loadImage('imagen/cuadrado1.png');
     this.img2 = loadImage('imagen/cuadrado2.png');
     this.t1=(height-500);
     this.miColor1;
     this.miColor2;
     this.miColor3;
    }

  prueba(){
    this.x1=random(400,width);
    this.y1=random(500,height);
  }

  dibujar() {
    this.m=random(5, 10);

    tint(random(255), random(255), random(255), 400);
    image(this.img1,this.x1,this.y1,this.t1/2,this.t1);
    tint(random(255), random(255), random(255), 300);
    image(this.img2,this.x1,this.y1,this.t1/2,this.t1);
  }

  mover(){
    if (this.y1>height-(this.t1/4)) {
      this.y1=400;
      this.x1=random(300,height+200);
    }
    this.y1 +=this.m;  
  }
}