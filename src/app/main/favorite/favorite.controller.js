(function() {
  'use strict';

  angular
    .module('x1group')
    .controller('FavorCtrl', FavorCtrl);
 
 FavorCtrl.$inject = ['store'];
 function FavorCtrl(store) {
 	var vm = this;
 	vm.countActive = 0;
  vm.setnull = 0;
  vm.setactive = setactive;
  vm.removeFav = removeFav;
  vm.count = [];
	var repositList = store.get('favorite') || [];
  var favoriteId = store.get('favoriteId') || [];

    function startFunc() {
    	if(repositList.length > 1) {
	  		vm.title = 'Your Favorit repositories'
	  	} else if(repositList.length === 1) {
			vm.title = 'Your Favorit repositorie'
	  	} else {
	  		vm.title = 'NO Your Favorit repositories'
	  	}
    }
  	startFunc();

  	vm.paginShow = (repositList.length <= 10);
    vm.repositListLength = repositList.length;

  	activePage(0);

  	function activePage(index) {
      vm.activePage = repositList.slice(index*10, (index+1)*10);
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
