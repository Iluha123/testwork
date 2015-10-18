(function() {
  'use strict';

  describe('Favorite controller', function(){
var scope, vm;

    
    beforeEach(angular.mock.module('x1group'));
    beforeEach(angular.mock.inject(function($rootScope, $controller){
        
        scope = $rootScope.$new();

        vm = $controller('FavorCtrl', {
        	$scope: scope
        });
    }));

    it('should define all function', function() {
      expect(vm.setactive).toBeDefined();
      expect(vm.removeFav).toBeDefined();
    });

    it('should be expect typeOf', function() {
      expect(vm.repositListLength).toEqual(jasmine.any(Number));
      expect(vm.paginShow).toEqual(jasmine.any(Boolean));
      expect(vm.title).toEqual(jasmine.any(String));
    });
    
    it('should define favorit obj', function() {
      expect(vm.repositList).toEqual(jasmine.any(Array));
      expect(vm.favoriteId).toEqual(jasmine.any(Array));
    });

    it('should 0 or false', function() {
      expect(vm.countActive).toEqual(0);
      expect(vm.setnull).toEqual(0);
      expect(vm.count).toEqual(jasmine.any(Array));
    });

  });
})();
