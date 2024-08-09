function checkAnswer(boton, estado, nextQuestionId = null) {
boton.classList.add(estado);
if (estado === 'correcto' && nextQuestionId){
    setTimeout (() => {
        document.getElementById(nextQuestionId).scrollIntoView({behavior: 'smooth'});
    },500);
}
if (estado === 'incorrecto'){
    boton.style.backgroundColor = 'red';
}else if (estado === 'correcto'){
  boton.style.backgroundColor = 'green';
} 
}
