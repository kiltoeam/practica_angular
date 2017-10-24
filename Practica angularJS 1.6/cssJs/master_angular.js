var ruta='directive-login.html';
(function(){
  var app = angular.module('master', []);

  app.directive('titulo', function(){
      return{
          restric:'AE',
          templateUrl: 'directive-login.js'
      };
  });


})();
