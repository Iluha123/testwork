(function() {
  'use strict';

  describe('Landing controller', function(){
var scope, vm;

    
    beforeEach(angular.mock.module('x1group'));
    beforeEach(angular.mock.inject(function($rootScope, $controller){
        
        scope = $rootScope.$new();

        vm = $controller('LandingCtrl', {
        	$scope: scope
        });
    }));

    it('should be expect typeOf', function() {
      expect(vm.myInterval).toEqual(jasmine.any(Number));
    });

    it('should be propetry in obj in array', function() {
      expect(vm.slides).toEqual(jasmine.any(Array));
      expect(vm.slides[0]).toEqual(jasmine.any(Object));
      expect(vm.slides[0].url).toEqual(jasmine.any(String));
      expect(vm.slides[0].title).toEqual(jasmine.any(String));
      expect(vm.slides[0].parag).toEqual(jasmine.any(String));
    });

  });
})();
