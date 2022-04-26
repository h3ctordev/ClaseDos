const app = new Vue({
  el: "#app",
  data: {
    message: "Hola Coders!",
    name: "Hector",
    howOld: 30,
    location: "Santigo, Chile",
    text1: "texto 1",
    text2: "texto 2",
  },
  methods: {
    imprimirEnConsola() {
      console.log("Hola!");
    },
    catchEvent(event) {
      console.log(event.target.value);
      this.text1 = event.target.value;
    },
  },
  computed: {},
});
