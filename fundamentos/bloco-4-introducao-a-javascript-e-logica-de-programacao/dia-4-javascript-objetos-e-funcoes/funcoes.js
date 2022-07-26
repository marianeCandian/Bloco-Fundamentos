// 1

// function verificaPalindrome(palavras) {

// let novaPalavra = [];  
//   for (let index = palavras.lenght; index = 0; index -= 1){
//     novaPalavra.push(index);
//   }
//   if (novaPalavra == palavras){
//     return true;
//   }else {
//     return false;
//   };
// }  

// console.log(verificaPalindrome('desenvolvimento'));

// uma forma melhorada:

// function verificaPalindrome(string) {
//   let reverse = string.split('').reverse().join('');
//   if (reverse === string) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(verificaPalindrome('arara')); 
// console.log(verificaPalindrome('desenvolvimento')); 

// 2

// function arrayInteiros(array) {

//   let maoirValor = 0;
//   for ( let indece in array) {
//     if (array[maoirValor] < array[indece]){
//       maoirValor = indece;
//     }
//   };
// return maoirValor;
// }

// console.log(arrayInteiros([2,3,6,7,10,1]));

// 3

// function arrayInteiros(array) {

//   let maoirValor = 0;
//   for ( let indece in array) {
//     if (array[maoirValor] > array[indece]){
//       maoirValor = indece;
//     }
//   };
// return maoirValor;
// }

// console.log(arrayInteiros([2, 4, 6, 7, 10, 0, -3]));


// 4

// function maoirPalavra(nomes) {

//   let maoirPalavra = nomes[0];
// for (let indece in nomes) {
//   if(maoirPalavra.lenght < nomes[indece].lenght){
//     maoirPalavra = nomes[indece];
//   }
// }
// return maoirPalavra;

// }

// console.log(maoirPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));


// 5

// function maisRepetido(numeros) {
//   let contRepetido = 0;
//   let contNumero = 0;
//   let indexNumeroRepetido = 0;

//   for (let index in numeros) {
//     let verificaNumero = numeros[index];
//     for (let index2 in numeros) {
//       if (verificaNumero === numeros[index2]) {
//         contNumero += 1;
//       }
//     }
//     if (contNumero > contRepetido) {
//       contRepetido = contNumero;
//       indexNumeroRepetido = index;
//     }
//     contNumero = 0;
//   }

//   return numeros[indexNumeroRepetido];
// }

// console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3])); 

// 6

// function someTodosNumeros(numero) {
 
//   let soma = 0;

//   for ( let indece = 1; indece <= numero; indece += 1) {
//     soma = soma + indece;
//   }
//   return soma;
// }

// console.log(someTodosNumeros(5));


// 7

function verificFimPalavra(word,ending) {

  word = word.split('');
  ending = ending.split('');
  let controle = true;

  for ( let i = 0; i < ending.length; i += 1) {
    if (word[word.length - ending.length + i] != ending[i]) {
      controle = false;
    }
  }

  return controle;

}

console.log(verificFimPalavra('trybe', 'be'));

