const {createApp} = Vue;

createApp({
  data(){
    return {
      messaggio: 'Che Model è?',
      image: 'assets/img/tesla.jpg',
      modello: 'Seleziona la tua scelta',
      correctModel: 'Model Y',
      isCorrect: false
    }
  },
  methods: {
    checkModel (){
      if (this.modello === this.correctModel) {
        this.isCorrect = true;
      } else {
        this.isCorrect = false;
      }
    }
  }
}).mount('#app');