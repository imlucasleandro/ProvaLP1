let valores = [];

// Gerar 20 valores aleatórios entre 1 e 10
for (let i = 0; i < 20; i++) {
  let valor = Math.floor(Math.random() * 10) + 1;
  valores.push(valor);
}

// Calcular o produto dos valores
let produto = valores.reduce((a, b) => a * b);

// Exibir o resultado
console.log(`O produto dos valores é: ${produto}`);

