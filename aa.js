const PI = 3.14;
console.log(PI);
if (true) {
    var mensagem = "Olá Mundo!";
    console.log(mensagem)
}
console.log(mensagem)

console.log("\n")

let nome1 = "Joao";
let saudacao = 'Olá' + nome1 + '!';
let saudacaoTemplate = `Olá, ${nome1}!`;

console.log(saudacaoTemplate)

console.log("\n")

let frutas = ["Maçã", "Banana", "O medo abundante de todas as verdades"]

console.log("Frutas:\n")
for (let i = 0; i<frutas.length; i++) {
    console.log(frutas[i]);
}

console.log("\n")

function soma(a, b) {
    return a+b
}

const soma2 = (a,b) => a+b

console.log(soma(3,5))
console.log(soma2(1,2))

console.log("\n")

function Pessoa(nome) {
    this.nome = nome;
    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

//Cria o objeto joao
const joao = new Pessoa("Joao"); 
joao.falar();

console.log("\n");  

//auto chamando a função
(function() {
    var mensagem = "Olá Mundo!";
    console.log(mensagem)
})();

async function buscarDados() {
    const resposta = await fetch('https://api.exemplo.com/dados');
    //nao peguei o resto
}


let numeros1 = [1,2,3,4,5];
numeros1.push(9);
console.log(numeros1);

let numeros3 = new Array(5);
numeros3.push(3);
numeros3[1] = 2
console.log(numeros3);

// frutas.forEach(functions(name, index) {
//     console.log(index, name);
// });

const quadrados = numeros1.map(function(numero) {
    return numero*numero;
});
console.log(quadrados);

const numerosFiltrados = numeros1.filter(function(numero) {
    return numero<3
})

console.log(numerosFiltrados)

console.log(frutas.includes("O medo abundante de todas as verdades"));
console.log(frutas.includes("pera"));

const pessoa = {
    nome: 'Jojo',
    idade: "30",
    cargo: "programador",
    falar:function() {
        console.log("Olá meu nome é " + this.nome);
    }
};
pessoa.falar()
console.log(pessoa.nome, + pessoa.idade);

const carro = new Object();
carro.marca = "Ford";
carro.modelo = "Mustang";
carro.ano = 1969;

const numeroMaximo = Math.max(10, 20, 30, 100, 50);
console.log(numeroMaximo);

function verificarUsuario(usuario,callback) {
    const usuarios = ['alice', 'bob', 'carol'];
    const usuarioExiste = usuarios.includes(usuario);
    if (usuarioExiste) {
        callback(null, `${usuario} existe no sistema`);
    }
    else {
        callback('Usuário não encontrado', null);
    }
}

verificarUsuario('bruno', (erro, mensagem) => {
    if (erro) {
        console.error(erro);
    }
    else {
        console.log(mensagem);
    }
});


//desestruturação
//nome tem que ser o mesmo do coiso
const {nome, idade, cargo} = pessoa;

console.log(nome);
console.log(idade);
console.log(cargo);

function obterPessoa() {
    return {
        nome2: 'bruni',
        idade2: 24
    };
}

const { nome2, idade2 } = obterPessoa();

console.log(nome2);
console.log(idade2);