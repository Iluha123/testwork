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
	var repositList = store.get('favorite') || [];
  var favoriteId = store.get('favoriteId') || [];

  function startFunc() {
    countInit();
    vm.repositListLength = repositList.length;
    vm.paginShow = (repositList.length <= 10);
  	if(repositList.length > 1) {
  		vm.title = 'Your Favorit repositories'
  	} else if(repositList.length === 1) {
		vm.title = 'Your Favorit repositorie'
  	} else {
  		vm.title = 'NO Your Favorit repositories'
  	}

  }
	startFunc();

	activePage(0);

  function countInit() {
    $scope.$broadcast("counInit", { newValue: repositList.length});
  }

  function setActiveCount(index) {
    $scope.$broadcast("counAct", { newValue: index});
  }

	function activePage(index) {
    vm.activePage = repositList.slice(index*10, (index+1)*10);
    setActiveCount(index);
    vm.setnull = index;
  }


  function removeFav(id) {
  	var index = favoriteId.indexOf(id);
		favoriteId.splice(index, 1);
    repositList.splice(index, 1);
    activePage(vm.countActive);
		store.set('favorite', repositList);
  	store.set('favoriteId', favoriteId);
    startFunc();
  }

  function setactive(active) {
    activePage(active);
  }

  } 
})();
