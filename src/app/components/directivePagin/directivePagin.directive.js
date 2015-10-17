(function() {
  'use strict';

  angular
    .module('x1group')
    .directive('pagind', pagind);

  function pagind() {
    var directive = {
      restrict: 'AE',
      templateUrl: 'app/components/directivePagin/directivePagin.html',
      controller: dPaginCtrl,
      controllerAs: 'pagin',
      scope: {
        count: '=',
        setactive: '&',
        getcountactive: '='
      }
    };

    return directive;

    dPaginCtrl.$inject = ['$scope'];
    function dPaginCtrl($scope) {
      var vm = this;
      vm.countActive = 0;
      vm.nextPagin = nextPagin;
      vm.prevPagin = prevPagin;
      vm.setCount = setCount;
      vm.count = [];

      $scope.$on("counInit", function(event, options) {
        $scope.count = options.newValue;
        getPagin();
      });
      $scope.$on("counAct", function(event, options) {
        vm.countActive = options.newValue;
      });

      getPagin();
      function getPagin() {
        vm.hidePagin = ($scope.count <= 10);
        vm.count = [];
        vm.countLength = Math.ceil($scope.count/10);
        for (var i = 0; i < vm.countLength; i++){
          vm.count.push(1);
        }
      }

      function nextPagin() {
        if(vm.countActive < vm.countLength - 1){
         vm.countActive++;
         activePage(vm.countActive);
        }
      }
      function prevPagin() {
        if(vm.countActive > 0){
         vm.countActive--;
         activePage(vm.countActive);
        }
      }
      function setCount(index) {
        vm.countActive = index;
        activePage(vm.countActive);
      }
      function activePage(index) {
        $scope.setactive({active: vm.countActive});
      }
    }
  }

})();
