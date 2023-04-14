function segundo(array) {
    let maior = segundo = -Infinity;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > maior) {
        segundo = maior;
        maior = array[i];
      } else if (array[i] > segundo) {
        segundo = array[i];
      }
    }
    return segundo;
  }

  const numeros = [1,3,4,5,6,7,8,9,0];
const segundomaior = segundo(numeros);
console.log(segundomaior); 

