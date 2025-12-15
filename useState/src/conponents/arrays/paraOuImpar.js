const numeros = [73, 2, 48, 91, 15, 7, 64, 30, 57, 89, 22, 11, 95, 3, 44, 17, 66, 28, 75, 9];

function parOuImpar() {
  const pares = numeros.filter((n) => n % 2 === 0);
  const impar = numeros.filter((n => n % 2 !== 0))
  console.log(pares);
  console.log(impar);
}

parOuImpar();