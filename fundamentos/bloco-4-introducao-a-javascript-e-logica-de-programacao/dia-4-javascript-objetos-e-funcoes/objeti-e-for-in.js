let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//  1
// console.log('Bem vinda, ' + info.personagem + '.' );

//  2

info.recorrente = 'Sim';

// console.log(info);

//  3

// for ( key in info){
//   console.log(key);
// }

//  4

// for (key in info){
//   console.log(info[key]);
// }

//  5

// info.personagem = 'Margarida e Tio Patinhas';
// info.origem = 'Pato Donald e Christmas on Bear Mountain, Dells Four Color Comics #178';
// info.nota = 'Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas';
// info.recorrente = 'Ambos recorrentes // Atenção para essa última linha!'; 

// console.log(info);

//  6

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

// console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos.titulo + '.');

//  7

leitor.livrosFavoritos.push( 
  {
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',

  },
);

// console.log(leitor.livrosFavoritos);

//  8

console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');