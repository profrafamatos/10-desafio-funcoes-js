//Não faça nada neste arquivo
const calculadoraIMC = require('./index');

test('calcula corretamente o IMC para peso 90kg e altura 1.80m', () => {
  expect(calculadoraIMC(90, 1.80)).toBeCloseTo(27.78, 2);
});

test('calcula corretamente o IMC para peso 70kg e altura 1.75m', () => {
  expect(calculadoraIMC(70, 1.75)).toBeCloseTo(22.86, 2);
});

test('calcula corretamente o IMC para peso 50kg e altura 1.60m', () => {
  expect(calculadoraIMC(50, 1.60)).toBeCloseTo(19.53, 2);
});
