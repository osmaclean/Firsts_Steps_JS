
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