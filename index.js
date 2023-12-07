const { exit } = require('process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Objeto para armazenar as listas
const lists = {
  lidos: [],
  desejados: [],
  paraAdquirir: [],
};

function adicionarLivro(lista, livro){
    lista.push(livro);
    console.log(`Livro "${livro}" adicionado a lista. `);
}

function exibirLivrosLidos(){
    console.log('- - - - - Livros lidos- - - - - \n');
    for (const livro in lists.lidos) {
      console.log(`- ${lists.lidos[livro]}`);
    }
    console.log('------------------------\n');
}

function exibirListaDeCompras(){
    console.log('- - - - - Lista de compras - - - - - \n');
    for (const livro in lists.paraAdquirir) {
      console.log(`- ${lists.paraAdquirir[livro]}`);
    }
    console.log('------------------------\n');
}

function exibirDesejados(){
    console.log('- - - - - Lista de proximas leituras - - - - - \n');
    for (const livro in lists.desejados) {
      console.log(`- ${lists.desejados[livro]}`);
    }
    console.log('------------------------\n');
}

function exibirMenu(){
    console.log('- - - - - - - - - - \n');
    console.log('1 - Adicionar livro lido\n');
    console.log('2 - Adicionar livro a lista de proximas leituras\n');
    console.log('3 - Adicionar livro para comprar\n');
    console.log('4 - Lista de lidos\n');
    console.log('5 - Para ler\n');
    console.log('6 - Lista de compras\n');
    console.log('7 - Sair\n');
    console.log('- - - - - - - - - - \n');
}


function iniciarPrograma(){
    exibirMenu();
    rl.question('Opcao: ', (opcao) =>{
        switch(opcao){
            case '1':   rl.question('Nome do livro: ', (nome) =>{
                            adicionarLivro(lists.lidos, nome);
                            iniciarPrograma();
                        });
                        break;
                                       
            case '2':   rl.question('Nome do livro: ', (nome) =>{
                            adicionarLivro(lists.desejados, nome);
                            iniciarPrograma();
                        });
                        break;
    
            case '3':   rl.question('Nome do livro: ', (nome) =>{
                            adicionarLivro(lists.paraAdquirir, nome);
                            iniciarPrograma();
                        });
                        break;
    
            case '4':   exibirLivrosLidos();   
                        iniciarPrograma();
                        break;
    
            case '5':   exibirDesejados();
                        iniciarPrograma();
                        break;
    
            case '6':   exibirListaDeCompras();
                        iniciarPrograma();
                        break;
    
            case '7':   process.exit();
                        rl.close();
                        break;
    
            default:    console.log('Opção invalida!');
                        iniciarPrograma();
                        break;
        }
    });
}

console.log('Bem-vindo ao Gerenciador de Livros!\n');
iniciarPrograma();


