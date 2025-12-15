//O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.

const array = [1, 2, 3, 4]; // 0 + 1 + 2 + 3 + 4

const valorInicial = 0;      // Valor inicial recebe 0
const total = array.reduce (          
  (acumulador, valorAtual) => acumulador + valorAtual,
  valorInicial
);

console.log(total);
// Expected output: 10


const total2 = array.reduce(
  (acc, atual) => acc + atual, 0 );

console.log(total2)