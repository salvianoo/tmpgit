var MyApp = {};

MyApp.init = function init() {
  document.querySelector('button')
    .addEventListener('click', function() {
      console.log('Button clicked');
    });

(function() {

  MyApp.init();

}());


var Pessoa = {
  nome: "Salviano",

  fala: function(mensagem) {
    console.log(mensagem + ' ' + this.nome);
  }
};
