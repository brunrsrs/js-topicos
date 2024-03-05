function recArray(pessoas) {

    var maiores = pessoas.filter(function(ida) {
        return ida.idade>=18
    })

    return maiores
};


var pessoas = new Array(5) 

var p1 = new Object();
p1.nome = "bruno";
p1.idade = 23;
pessoas[1] = p1;

var p2 = new Object();
p2.nome = "moguel";
p2.idade = 15;
pessoas[2] = p2;

console.log(recArray(pessoas));

