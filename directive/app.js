(function(){
	var app = angular.module('appa', []);

	app.controller('myCont', function($scope) {
	  $scope.kpiname = "Arrival";
	});

	app.directive('windowFrame', function() {
	  return {
	    restrict: 'EA',
	    scope: {
	      title: '@',
	      zoom: '='
	    },
	    templateUrl: 'window.html',
	    controller: function($scope) {
	      $scope.vari = true;
	      $scope.vari1 = false;
	      $scope.isFlipped = false;
	      $scope.isZoomed = false;
	      $scope.isClose = false;
	      $scope.toggleZoom = function(){
	        $scope.isZoomed = !$scope.isZoomed;
	      };
	      $scope.closeWindow = function(){
	        $scope.msg = "closeWindow";
	        $scope.isClose = true;
	      };
	      $scope.setting = function(){
	        $scope.msg = "setting";
	        $scope.isFlipped = !$scope.isFlipped;
	      };
	    }
	  }
	});
})();
