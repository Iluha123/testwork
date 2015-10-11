(function() {
  'use strict';

  angular
    .module('x1group')
    .controller('RepositoriesCtrl', RepositoriesCtrl);

  RepositoriesCtrl.$inject = ['firstService', '$filter', 'store'];
  function RepositoriesCtrl(firstService, $filter, store) {
    var vm = this;
    var expression;
    vm.filterFunc = filterFunc;
    vm.addFavorite = addFavorite;
    vm.activeFavorite = activeFavorite;
    vm.filterReverseFunc = filterReverseFunc;
    vm.setactive = setactive;
    vm.countActive = 0;
    vm.setnull = 0;
    vm.filterReverse = false;
    vm.count = [];
    var repositList = store.get('favorite') || [];
    var favoriteId = store.get('favoriteId') || [];
  	firstService.get().then(function (data) {
        vm.repositories = data;
        vm.repositListLength = vm.repositories.length;
        activePage(0);
        console.log(vm.repositories);
    });
    // store.remove('favoriteId');
    // store.remove('favorite');
    function setactive(active) {
      vm.countActive = active;
      activePage(vm.countActive);
    }

    function activePage(index) {
      vm.activePage = vm.repositories.slice(index*10, (index+1)*10);
      vm.setnull = index;
    }

    function filterFunc(exp) {
      expression = exp
      vm.repositories = $filter('orderBy')(vm.repositories, expression, vm.filterReverse);
      setCount(0);
    }

    function setCount(index) {
      vm.countActive = index;
      activePage(vm.countActive);
    }

    function filterReverseFunc() {
      vm.filterReverse = !vm.filterReverse;
      filterFunc(expression);
    }

    function addFavorite(reposit) {
      var index = favoriteId.indexOf(reposit.id);
      if(index === -1) {
        repositList.push(reposit);
        favoriteId.push(reposit.id);        
      } else {
        favoriteId.splice(index, 1);
        repositList.splice(index, 1);
      }
      store.set('favorite', repositList);
      store.set('favoriteId', favoriteId);   

    }

    function activeFavorite(id) {
      if(favoriteId.indexOf(id) !== -1 ) {
        return true;
      } else {
        return false;
      }
    }
  } 
})();
