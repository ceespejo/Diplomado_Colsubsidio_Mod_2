function cuadrado (t, l ="x"){
    if(typeof t === "undefined" || typeof t === "string" ){
        console.log("Missing Size")
        return
    }

let fila = l.repeat(t)
    for(let j = 0; j<t; j++){
console.log(fila)
    }
}
cuadrado(5)
