const numeros = [8, 5, 9, 8, 7];

const resultado = numeros.map((numero, index, arrayCompleta) => {
  console.log(`Número atual: ${numero}`);
  console.log(`Posição no array: ${index}`);
  console.log(`Array completo: [${arrayCompleta.join(", ")}]`);
  console.log("---------------------");

  // exemplo: retornando o dobro do número
  return numero * 2;
});

console.log("Novo array com o dobro dos valores:");
console.log(resultado);


/*
    ARRAYS DO JAVASCRIPT
    MAP (Mapear item por item do Array)
        - Criar um novo array com a mesma quantidade de itens do array original.
        - O novo array você pode alterar o que quiser em relação ao array original.

    Você tem acesso a 3 dados:
        - Item por item do array
        - Posição atual do array
        - Array completo

*/

