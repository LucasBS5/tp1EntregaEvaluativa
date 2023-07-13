class Fondo {
  constructor(){
   this.img = loadImage('imagen/fondo1.png');
   this.img2 = loadImage('imagen/fondo2.png'); 
  }

dibujar() {
  tint(random(255), random(255), random(255), 300);
  image(this.img, 0, 0,width,height);
  tint(random(255), random(255), random(255), 300);
  image(this.img2, 0, 0);
 }
}