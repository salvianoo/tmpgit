var MyApp = {};

MyApp.init = function init() {
  var btn = document.querySelector('button');
  
  btn.addEventListener('click', function() {
    console.log('Button clicked');
  });
};

(function() {

  MyApp.init();

}());


var Pessoa = {
  nome: "Salviano",

  fala: function(mensagem) {
    console.log(mensagem + ' ' + this.nome);
  }
};
