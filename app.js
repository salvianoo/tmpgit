var MyApp = {};

MyApp.init = function init() {
  document.querySelector('button')
    .addEventListener('click', function() {
      console.log('Button clicked');
    });
};

(function() {

  MyApp.init();

}());
