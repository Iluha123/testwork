(function() {
  'use strict';

  describe('Repositories controller', function(){
var scope, vm;

   
    beforeEach(angular.mock.module('x1group'));
    beforeEach(angular.mock.inject(function($rootScope, $controller){
        
      scope = $rootScope.$new();
      vm = $controller('RepositoriesCtrl', {
      	$scope: scope
      });

    }));

    it('should define all function', function() {
      expect(vm.filterFunc).toBeDefined();
      expect(vm.addFavorite).toBeDefined();
      expect(vm.activeFavorite).toBeDefined();
      expect(vm.filterReverseFunc).toBeDefined();
      expect(vm.setactive ).toBeDefined();
    });


    it('should define favorit obj', function() {
      expect(vm.repositList).toEqual(jasmine.any(Array));
      expect(vm.favoriteId).toEqual(jasmine.any(Array));
    });

    it('should 0 or false', function() {
      expect(vm.countActive).toEqual(0);
      expect(vm.setnull).toEqual(0);
      expect(vm.filterReverse).toEqual(false);
      expect(vm.count).toEqual(jasmine.any(Array));
    });

  });
})();
