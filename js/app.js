const app = new Vue({
  el: "#app",
  data: {
    message: "Hola Coders!",
    name: "Hector",
    howOld: 30,
    location: "Santigo, Chile",
  },
  methods: {
    imprimirEnConsola() {
      console.log("Hola!");
    },
    calculoMatematico() {},
  },
  computed: {},
});
