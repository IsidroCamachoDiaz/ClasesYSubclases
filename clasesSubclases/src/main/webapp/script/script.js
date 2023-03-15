class Poligono{
	constructor(altura,ancho){
		this.altura=altura;
		this.ancho=ancho;
		const nombre="Poligono";
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
	constructor(lados){
		super(altura);
		super(ancho);
		this.lados=lados;
		let nombre="Cuadrado";
	}
	calculaArea(){
		return this.ancho**2;
	}
}