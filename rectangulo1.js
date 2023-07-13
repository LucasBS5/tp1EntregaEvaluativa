class Caminante {
  constructor(){
   this.img1 = loadImage('imagen/cuadrado1.png');
   this.img2 = loadImage('imagen/cuadrado2.png');
   this.t1=(width-600);
   this.miColor1;
   this.miColor2;
   this.miColor3;
 }

prueba(){
  this.x1=random(400,width);
  this.y1=random(500,height);
 }

dibujar(){
  this.m=random(10, 15);
  tint(random(255), random(255), random(255), 200);
  image(this.img1,this.x1,this.y1,this.t1/2,(this.t1/2)-100);
  tint(random(255), random(255), random(255), 150);
  image(this.img2,this.x1,this.y1,this.t1/2,(this.t1/2)-100);
 }

cambiarColor(){
  this.miColor1 = color(random(58));
  this.miColor2 = color(random(150));
  this.miColor3 = color(random(30));
}

mover(){
  if (this.x1>width+(this.t1/4)) {
    this.x1=300;
    this.y1=random(300,height+200);
  }
  this.x1 +=this.m;
 }
}