
App.controller("MainController", function ($scope) {

});

App.controller("HomeController",function ($scope,$location){
	
	$scope.openMap = function(){
		$location.path("/map");
	}
});

App.controller("MapController", function ($scope,$location, $localStorage,$geolocation,NgMap) {
	
	var cMap = this;
	var marker;

	
	NgMap.getMap().then(function(map) {
	    
	    //Store current map
	    cMap = map;
	    $scope.curPos = {};

	    marker = map.markers[0];

	    //Request geolocation
	    if (navigator.geolocation) {
			$geolocation.getCurrentPosition({
			    timeout: 60000
			}).then(function(position) {
			});
		}else{
			alert("Browser doesn't support Geolocation");
		}

	    
	  });


	$scope.getCenter = function(){

		$localStorage.savedPos = {
			'lat' : cMap.getCenter().lat(),
			'lng' : cMap.getCenter().lng()
		}

		$location.path("/");

	};

	$scope.gotoPos = function(){
		cMap.panTo(marker.getPosition());
	};

	$scope.goBack = function(){
		$location.path("/");
	}

});
