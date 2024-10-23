/**** Escreva o código abaixo (linhas 2 - 4) 👇******/
function calculadoraIMC(peso, altura) {
  return peso / (altura * altura);
};

/**** Escreva o código acima ☝️******/

//Não altere as linhas abaixo
let imc = calculadoraIMC(90, 1.80)
console.log(`O IMC é ${imc}` )

module.exports = calculadoraIMC;