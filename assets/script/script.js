const {createApp} = Vue;

createApp({
  data(){
    return {
      messaggio: 'Che Model è?',
      image: 'assets/img/tesla.jpg',
      modello: 'Seleziona la tua scelta',
      correct: 'green',
      isCorrect: false
    }
  }

}).mount('#app');