// 1
function mostrarMensagem() {
    console.log("Bem-vindo ao bagulho");
}

// 2
function somaSimples() {
    const numero1 = 4;
    const numero2 = 6;
    console.log(numero1 + numero2);
}

// 3
function imprimirNome() {
    const nome = "Enzo";
    console.log(nome);
}

// 4
function quadrado(numero) {
    return numero * numero;
}

// 5
function converterParaCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// 6
function concatenaPalavras(palavra1, palavra2) {
    return palavra1 + " " + palavra2;
}

// 7
function calcularMedia(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

// 8
function desconto(valorProduto, percentualDesconto) {
    return valorProduto - (valorProduto * percentualDesconto / 100);
}

// 9
function saudacaoPersonalizada(nome) {
    console.log("Olá, " + nome + "! Seja bem-vindo.");
}

// 10
const multiplicar = function(numero1, numero2) {
    return numero1 * numero2;
};

// 11
const dividir = function(numero1, numero2) {
    return numero1 / numero2;
};

// 12
const dobro = (numero) => {
    return numero * 2;
};

// 13
const ehPar = (numero) => {
    return numero % 2 === 0;
};

// 14
function calculadora(numero1, numero2) {
    function soma(x, y) {
        return x + y;
    }

    function subtrair(x, y) {
        return x - y;
    }

    console.log("Soma:", soma(numero1, numero2));
    console.log("Subtração:", subtrair(numero1, numero2));
}

// 15
function operacoesAvancadas(numero1, numero2) {
    function produto(x, y) {
        return x * y;
    }

    function potencia(x, y) {
        return x ** y;
    }

    return {
        produto: produto(numero1, numero2),
        potencia: potencia(numero1, numero2)
    };
}