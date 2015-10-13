(function() {
  'use strict';

  angular
    .module('x1group')
    .controller('DetailCtrl', DetailCtrl);
 
 DetailCtrl.$inject = ['store', '$stateParams', 'firstService'];
 function DetailCtrl(store, $stateParams, firstService) {
   	var vm = this;
    vm.hideCon = false;
    vm.setactive = setactive;
    vm.setnull = 0;
    vm.lengKey = [];
    vm.message = false;
    firstService.getOne($stateParams.owner, $stateParams.name).then(function(data) {
      vm.user = data;
      getAny(vm.user.languages_url, 'leng');
      getAny3(vm.user.contributors_url, 'contr');
    }).catch(function() {
      vm.message= 'Sory, server not Ok'
    });

    function getAny(item, name) {
      firstService.getAny(item).then(function(data) {
        vm[name] = data;
        toNormal(vm[name]);
      }).catch(function() {
        console.log('error');
      });
    }

    function getAny2(item, name) {
      firstService.getAny(item).then(function(data) {
        vm[name] = data;
      }).catch(function() {
        console.log('error');
      });
    }

    function getAny3(item, name) {
      firstService.getAny(item).then(function(data) {
        vm[name] = data;
        if(vm[name] && vm[name].length){
          vm.conListLength = vm[name].length;
          activePage(0);
        }        
      }).catch(function() {
        console.log('error');
      });
    }

    function activePage(index) {
      vm.activePage = vm.contr.slice(index*10, (index+1)*10);
      vm.setnull = index;
    }
    
    function setactive(active) {
      activePage(active);
    }

    function toNormal(obj) {
      for(var key in obj){
        var objN = {
          key: key,
          val: obj[key]
        }
        vm.lengKey.push(objN);
      }
    }
  } 
})();
