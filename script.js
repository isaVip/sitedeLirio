let options = document.querySelectorAll('input[type="radio"]');
    options.forEach(option => option.disabled=false);
 
function disableOptions(questionName){
  let options = document.getElementsByName (questionName);
  options.forEach(option => {
      if(!option.checked){
          option.disabled = true;
      }
  });
}

function playSound() {
    let clickSound = document.getElementById('selecionasom');
    clickSound.play();
}

function responderNovamente1() {
let form = document.getElementById('quiz');
form.reset();
let options = document.querySelectorAll('input[type="radio"]');
options.forEach(option => option.disabled=false);
result.innerHTML="";
document.getElementById('enviarResposta').disabled = false;
document.getElementById('responderNovamente').disabled = true;
}

function submitQuiz() {
    let correctAnswers = {
        q1: "B",
        q2: "D",
        q3: "A",
        q4: "B",
        q5: "D",
        q6: "A",
        q7: "C",
        q8: "B",
        q9: "B",
        q10: "B"
    };

    let form = document.getElementById('quiz');
    let score = 0;

    for (let key in correctAnswers) {
        let userAnswer = form.elements[key] ? Array.from(form.elements[key]).find(radio => radio.checked)?.value : null;
        if (userAnswer === correctAnswers[key]) {
            score++;
        }
    }

    let result = document.getElementById('result');
    result.innerHTML = `Você acertou ${score} de 10 perguntas`;

    if (score === 7) {
        let successSound = document.getElementById('venceusom');
        successSound.play();
    } else {
        let lowScoreSound = document.getElementById('pontuacaoBaixa');
        lowScoreSound.play();
    }

    document.getElementById('enviarResposta').disabled = true;
    document.getElementById('responderNovamente').disabled = false;
}