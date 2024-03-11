const {createApp} = Vue;

createApp({
  data(){
    return {
      messaggio: 'Hello VUE!',
      image: 'assets/img/tesla.jpg'
    }
  }
}).mount('#app');