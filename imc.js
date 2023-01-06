const calcular = document.getElementById('calcular');

function imc () {
  const nome = document.getElementById('nome').value;
  const altura = document.getElementById('altura').value;
  const peso = document.getElementById('peso').value;
  const resultado = document.getElementById('resultado');

  if (nome !== '' && altura !== '' && peso !== '') {
    
    const valorImc = (peso / (altura * altura)).toFixed(2);

    let classification = '';

    if (valorImc < 18.5) {
      classification = 'abaixo do peso!';
    }else if (valorImc < 25) {
      classification = 'com peso ideal! Parabénss!!';
    }else if (valorImc < 30) {
      classification = 'levementte acima do peso!!';
    }else if (valorImc < 35) {
      classification = 'com obesidade grau 1 !!';
    }else if (valorImc < 40) {
      classification = 'com obesidade grau 2 !!';
    }else {
      classification = 'com obesidade grau 3 (mórbida)... CUIDADO!!!';
    }

    resultado.textContent = `${nome}, seu IMC é ${valorImc} e você está ${classification}`;

  }else {
    resultado.textContent = 'Preencha todos os campos!!!'
  }

}

calcular.addEventListener('click', imc);
