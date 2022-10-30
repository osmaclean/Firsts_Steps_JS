
// Tarefa Exemplo

let nomeCliente = prompt("Digite o nome do cliente");
let qtdPaes = parseInt(prompt("Quantas unidades de pães ?"));

let valorCompra = parseFloat(qtdPaes * 0.75);

alert(`Valor da compra é: ${valorCompra.toFixed(2)}`);

let data = Date.now();
let hoje = new Date(data).toUTCString();

alert(
  `${nomeCliente} - Valor da compra: ${valorCompra} - Produto: Pães - Quantidade: ${qtdPaes} - Data: ${hoje} `
);


// Primeira Tarefa

let numberOne = parseInt(prompt("Digite o primeiro número inteiro"));
let numberTwo = parseInt(prompt("Digite o segundo número inteiro"));

if (numberOne > numberTwo) {
  alert(`O número maior é o ${numberOne} e a diferença é: ${numberOne - numberTwo}`);
} else {
  alert(`O número maior é o ${numberTwo} e a diferença é: ${numberTwo - numberOne}`);
}

// Segunda Tarefa

let number1 = parseFloat(prompt("Digite o primeiro número"));
let number2 = parseFloat(prompt("Digite o segundo número"));

if (number1 > number2) {
  alert(`O número ${number1} é maior que o número ${number2}`);
} else if (number2 == number1) {
  alert(`Números iguais`);
} else {
  alert(`O número ${number2} é maior que o número ${number1}`);
} 

// Terceira Tarefa

let salario = parseFloat(prompt("Digite o valor do seu salário"));
let valorEmpres = parseFloat(prompt("Digite o valor da prestação que deseja pagar"));
let somaValor = salario * 0.3

if (somaValor > valorEmpres) {
  alert(`Empréstimo concedido`)
} else if (somaValor < valorEmpres) {
  alert(`Empréstimo não concedido`)
}

// Quarta Tarefa

let numero = parseInt(prompt("Insira um número divisível por 3 ou 5"));

if (numero % 3 == 0 && numero % 5 == 0) {
  alert(`Valor Inválido`)
} else if (numero % 3 == 0){
alert(`O número é divisível por 3`)
} else if (numero % 5 == 0){
  alert(`O número é divisível por 5`)
} else if (numero % 2 == 0){
 alert(`É par!`)
}

// Quinta Tarefa

let semana = parseInt(prompt("Insira um número de 1 a 7"))

if (semana == 1){
 alert(`Domingo`)
} else if (semana == 2){
 alert(`Segunda-Feira`)
} else if (semana == 3){
  alert(`Terça-Feira`)
 } else if (semana == 4){
  alert(`Quarta-Feira`)
 } else if (semana == 5){
  alert(`Quinta-Feira`)
 } else if (semana == 6){
  alert(`Sexta-Feira`)
 } else if (semana == 7){
  alert(`Sábado`)
 } else if (semana !== 0){
  alert(`Erro 404 Not Found!`)
 }

// Sexta Tarefa

let salarioFuncionario = parseInt(prompt("Insira o valor do seu salário"));
let reajuste = parseFloat(prompt("Insira o valor do reajuste de até 5%"));

let calculoPercentual = (salarioFuncionario * (reajuste / 100));

let valorFinal = salarioFuncionario + calculoPercentual;

if (calculoPercentual > 5){
 alert(`O salário do funcionário corrigido é de: R$${valorFinal}`);
}

// Sétima Tarefa 

let valorDolar = parseFloat(prompt("Insira um valor para a conversão"))
let cotacaoDolar = parseFloat(prompt("Insira o valor da cotação do Dólar"))

let conversao = valorDolar * cotacaoDolar;
alert(`$${valorDolar} é equivalente a R$${conversao.toFixed(2)} tendo ${cotacaoDolar} como cotação.`)

// Oitava Tarefa

let tempo = parseInt(prompt("Digite o tempo"));
let velocidadeMedia = parseInt(prompt("Digite a velocidade"));
let distancia = tempo * velocidadeMedia;
let litrosUsados = distancia / 12;

alert(`Seu veículo percorreu ${distancia.toFixed(2)}km a ${velocidadeMedia} km/h em ${tempo}h de viagem e consumiu ${litrosUsados.toFixed(2)}l de gasolina. `)




