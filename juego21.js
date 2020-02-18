class Carta{
  constructor(palos,valor=[],texto){
    this.palos=palos;
    this.valor=valor;
    this.texto=texto;
    
  }
}
class Palo{
  constructor(figura){
    this.figura=figura;
  }
}
var palos = [new Palo("trebol negro"),new Palo("corazon Rojo"),new Palo("corazon Negro"),new Palo("brillo rojo")];
var letras=['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
 var  valor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
 
class Fabrica {
      mazo=[];
      mazoMezclado=[];
      elemento;
  crearBarajas() {
    // insertar los valores al array
    palos.forEach(function (elementPalo) {
    letras.forEach(function (elementLetra, index) {
        if (index == 0) {
          this.mazo.push(new Carta(elementPalo, [1, 11], elementLetra));
          
      } else if (index > 9) {
          this.mazo.push(new Carta(elementPalo, valor[9], elementLetra));
      } else {
          this.mazo.push(new Carta(elementPalo, valor[index], elementLetra));
      }
  },this)
},this)
      
    /* for(var i=0;i<this.letras.length;i++){
      for(var y=0;y<this.palos.length;y++){
        this.mazo.push(this.letras[i]+" de "+this.palos[y]);
      }
    }
      return this.mazo;
  } */
}
mezclar(){
  while (this.mazoMezclado.length < 52) {
    let valor = Math.floor(Math.random() * (52));
    this.elemento = this.mazoMezclado.find(element => element == valor)
    let condicion = (this.elemento == undefined) ? this.mazoMezclado.push(valor) : valor;
}

for (let i = 0; i < this.mazo.length - 1; i++) {
    this.elemento = this.mazo[this.mazoMezclado[i]]
    this.mazo[this.mazoMezclado[i]] = this.mazo[i]
    this.mazo[i] = this.elemento;
}
return this.mazo   
}
}
class Juego extends Fabrica { 
  nuevaBaraja=[]
  contador=0;
  pedir(){
    this.nuevaBaraja.push(this.mazo[this.contador].valor+this.mazo[this.contador].palos.figura);
        this.contador++;
        // this.validar()
        return this.nuevaBaraja;
        // return (this.mazo[this.contador].valor,this.mazo[this.contador].palos.figura);
        
  }
  validar() {
    //sumatoria
    let filtro = this.nuevaBaraja.reduce(
      function(antes, ahora) {
          if (typeof(antes) == 'object') {
              if (antes > 10) {
                  return antes[0] + ahora;
              } else {
       return antes[1] + ahora;
              }
          } else {
              return antes + ahora;
          }

      })

  if (filtro == 21) {
      console.log('Ganaste! :)');
      document.getElementById("resultado").innerHTML="Ganaste,Felicidades!!";
  } else if (filtro < 21) {
      console.log('Pide otra vez, aun no llegas al 21');
      document.getElementById("resultado").innerHTML="Pide otra vez, aun no llegas al 21";
  } else if (filtro > 21) {
      console.log('Perdiste! :(');
      document.getElementById("resultado").innerHTML="Perdiste!!";
      alert("Perdiste la partida");

  }
  console.log('el valor de la suma es'+filtro);
  document.getElementById("suma").innerHTML=filtro;
    
  }
}
/* class Jugador extends Fabrica{
  nuevaBaraja=[];
  contador=0;
  guardar=[];
  pedir(){
    this.nuevaBaraja.forEach(element => {
      var ale= Math.round(Math.random()*this.nuevaBaraja.length);
      this.guardar.push(element[ale]);
      console.log(element[ale].palos.figura);
    }); 
  }
}
 */

class Img extends Fabrica{
  constructor(img=[]) {
    this.img= img;
    img.push("As.png");
    img.push('2.png');
    img.push('3.png');
    img.push('4.png');
    img.push('5.png');
    img.push('6.png');
    img.push('7.png');
    img.push('8.png');
    img.push('9.png');
    img.push('10.png');
    img.push('J.png');
    img.push('Q.png');
    img.push('K.png');

}
lanzarBrillo() {
    let aleatorio = Math.floor( Math.random() * this.img.length);
    let casilla = document.getElementById("carta");
    casilla.addEventListener('click', 
        casilla.innerHTML = '<img src="img/brillo/' + this.img[aleatorio]);
    return casilla;
}
}