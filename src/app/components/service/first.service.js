(function() {
  'use strict';

  angular
    .module('x1group')
    .service('firstService', firstService);

  firstService.$inject = ['$http'];
  function firstService($http) {
    function getElements() {
      return $http.get('https://api.github.com/repositories').
          then(function(response) {
              return (response.data);
          }, function(response) {
              return (response);
          });  
      }
    function getOne(owner, name) {
      return $http.get('https://api.github.com/repos/' + owner + '/' + name).
        then(function(response) {
            return (response.data);
        }, function(response) {
            return (response);
        });
      }
    function detAny(item) {
      return $http.get(item).
        then(function(response) {
            return (response.data);
        }, function(response) {
            return (response);
        });
      }
     
     return {
        get: getElements,
        getOne: getOne,
        getAny: detAny
      }
    }
})();
