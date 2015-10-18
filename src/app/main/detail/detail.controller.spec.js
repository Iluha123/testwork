(function() {
  'use strict';

  describe('Repositories controller', function(){
var scope, vm;

    
    beforeEach(angular.mock.module('x1group'));
    beforeEach(angular.mock.inject(function($rootScope, $controller){
        
        scope = $rootScope.$new();

        vm = $controller('DetailCtrl', {
        	$scope: scope
        });
    }));

    it('should define all function', function() {
      expect(vm.setactive ).toBeDefined();
    });

    it('should 0 or false', function() {
      expect(vm.setnull).toEqual(0);
      expect(vm.hideCon).toEqual(false);
      expect(vm.message).toEqual(false);
      expect(vm.lengKey).toEqual(jasmine.any(Array));
    });

  });
})();
