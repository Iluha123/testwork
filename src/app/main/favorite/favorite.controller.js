(function() {
  'use strict';

  angular
    .module('x1group')
    .controller('FavorCtrl', FavorCtrl);
 
 FavorCtrl.$inject = ['store', '$scope'];
 function FavorCtrl(store, $scope) {
 	var vm = this;
 	vm.countActive = 0;
  vm.setnull = 0;
  vm.setactive = setactive;
  vm.removeFav = removeFav;
  vm.count = [];
	vm.repositList = store.get('favorite') || [];
  vm.favoriteId = store.get('favoriteId') || [];

  function startFunc() {
    countInit();
    vm.repositListLength = vm.repositList.length;
    vm.paginShow = (vm.repositList.length <= 10);
  	if(vm.repositList.length > 1) {
  		vm.title = 'Your Favorit repositories';
  	} else if(vm.repositList.length === 1) {
		  vm.title = 'Your Favorit repositorie';
  	} else {
  		vm.title = 'NO Your Favorit repositories';
  	}

  }
	startFunc();

	activePage(0);

  function countInit() {
    $scope.$broadcast("counInit", { newValue: vm.repositList.length});
  }

  function setActiveCount(index) {
    $scope.$broadcast("counAct", { newValue: index});
  }

	function activePage(index) {
    vm.activePage = vm.repositList.slice(index*10, (index+1)*10);
    setActiveCount(index);
    vm.setnull = index;
  }


  function removeFav(id) {
  	var index = vm.favoriteId.indexOf(id);
		vm.favoriteId.splice(index, 1);
    vm.repositList.splice(index, 1);
    activePage(vm.countActive);
		store.set('favorite', vm.repositList);
  	store.set('favoriteId', vm.favoriteId);
    startFunc();
  }

  function setactive(active) {
    activePage(active);
  }

  } 
})();
