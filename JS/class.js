//class constructora
class Ropa {
    constructor(id, tipo, color, talle, precio, imagen){
        //propiedades o atributos de nuestra clase
        this.id = id,
        this.tipo = tipo,
        this.color = color,
        this.talle = talle,
        this.precio = precio, 
        this.imagen = imagen,
        
        this.cantidad = 1
    }
    //métodos
    sumarUnidad(){
        this.cantidad += 1
    }
    restarUnidad(){
        this.cantidad = this.cantidad - 1
        return this.cantidad
    }
}
//crear un array de objetos: 
let estanteria = []

const cargarEstanteria = async () => {
    //ruta relativa: del HTML al JSON y abrir con liveServer
    const response = await fetch("ropa.json")
    const data = await response.json()
    for(let ropa of data){
        let ropaNueva = new Ropa(ropa.id, ropa.tipo, ropa.color,ropa.talle ,ropa.precio, ropa.imagen)
        estanteria.push(ropaNueva)
    }
    console.log(estanteria)
    localStorage.setItem("estanteria", JSON.stringify(estanteria))
}
//dos posibilidades que en storage exista algo o que no exista
//condicional que evalue si hay algo
if(localStorage.getItem("estanteria")){
    //si existe algo en el storage entra al if
    
    for(let ropa of JSON.parse(localStorage.getItem("estanteria"))){
        let ropaStorage = new Ropa(ropa.id, ropa.tipo, ropa.color,ropa.talle ,ropa.precio, ropa.imagen)
        estanteria.push(ropaStorage)
    }
    console.log(estanteria)
}else{
    //si no existe, entra al else
    cargarEstanteria()
    
}
