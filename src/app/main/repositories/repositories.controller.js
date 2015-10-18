(function() {
  'use strict';

  angular
    .module('x1group')
    .controller('RepositoriesCtrl', RepositoriesCtrl);

  RepositoriesCtrl.$inject = ['firstService', '$filter', 'store', '$scope'];
  function RepositoriesCtrl(firstService, $filter, store, $scope) {
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

    vm.repositList = store.get('favorite') || [];
    vm.favoriteId = store.get('favoriteId') || [];

  	firstService.get().then(function (data) {
        vm.repositories = data;
        countInit();
        vm.repositListLength = vm.repositories.length;
        activePageFunc(0);
    });

    // store.remove('favoriteId');
    // store.remove('favorite');
    function setactive(active) {
      vm.countActive = active;
      activePageFunc(vm.countActive);
    }
    function countInit() {
      $scope.$broadcast("counInit", { newValue: vm.repositories.length});
    }
    function setActiveCount(index) {
      $scope.$broadcast("counAct", { newValue: index});
    }

    function activePageFunc(index) {
      vm.activePage = vm.repositories.slice(index*10, (index+1)*10);
      setActiveCount(index);
      vm.setnull = index;
    }

    function filterFunc(exp) {
      expression = exp;
      vm.repositories = $filter('orderBy')(vm.repositories, expression, vm.filterReverse);
      setCount(0);
    }

    function setCount(index) {
      vm.countActive = index;
      activePageFunc(vm.countActive);
    }

    function filterReverseFunc() {
      vm.filterReverse = !vm.filterReverse;
      filterFunc(expression);
    }

    function addFavorite(reposit) {
      var index = vm.favoriteId.indexOf(reposit.id);
      if(index === -1) {
        vm.repositList.push(reposit);
        vm.favoriteId.push(reposit.id);        
      } else {
        vm.favoriteId.splice(index, 1);
        vm.repositList.splice(index, 1);
      }
      store.set('favorite', vm.repositList);
      store.set('favoriteId', vm.favoriteId);   

    }

    function activeFavorite(id) {
      if(vm.favoriteId.indexOf(id) !== -1 ) {
        return true;
      } else {
        return false;
      }
    }
  } 
})();
