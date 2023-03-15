class Poligono{
	constructor(altura,ancho){
		this.altura=altura;
		this.ancho=ancho;
		this.nombre="Poligono";
	}
	devulveNombre(){
		return this.nombre;
	}
}
function clasePoligono(){
	var p1 = new Poligono(100,200);
	console.log(p1.devulveNombre());
	document.write(p1.altura+" "+p1.ancho);
}
class Cuadrado extends Poligono{
	constructor(lado){
		super();
		this.lado=lado;
		this.nombre="Cuadrado";
	}
	calculaArea(){
		return this.lado*this.lado;
	}
}

function claseCuadrado(){
	var c1 = new Cuadrado(4);
document.write(c1.calculaArea());
}