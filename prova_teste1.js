var numerodelados = 5 // numero de lados do poligono

//necessarios para o calculo da área do triângulo
var basedotriangulo = 4 //comprimento da base do triângulo
var alturadotriangulo = 5 // altura do triângulo 

// necessario para o calculo da área do quadrado 
var ladodoquadrado = 3 // comprimento do lado do quadrado

switch (numerodelados) {
    case 3:
    console.log("Triangulo")
    const resultado =  (basedotriangulo * alturadotriangulo) / 2
    console.log(resultado)
        break;

    case 4: 
    console.log("quadrado")
    const resultad  = ladodoquadrado * ladodoquadrado
    console.log(resultad)
    break;

    case 5: 
    console.log("Pentagono")

}

