App.controller("MainController", function ($scope) {

});

<<<<<<< HEAD
App.controller("HomeController", function ($scope, $location) {
=======
App.controller("HomeController",function ($scope,$location){
	
	$scope.openMap = function(){
		$location.path("/map");
	}
});

App.controller("MapController", function ($scope,$location, $localStorage,$geolocation,NgMap) {
	
	var cMap = this;
	var marker;
        

if (navigator.geolocation) {
NgMap.getMap().then(function(map) {
	    
	    //Store current map
	    cMap = map;
	    $scope.curPos = {};

	    marker = map.markers[0];

	    //Request geolocation
	    

	    
	  });
			$geolocation.getCurrentPosition({
			    timeout: 60000
			}).then(function(position) {
			});
		}else{
			alert("Browser doesn't support Geolocation");
		}

	
	


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
>>>>>>> 238c20ae87958b68a1b0f11be224763803f01318

    $scope.openMap = function () {
        $location.path("/map");
    }
});
<<<<<<< HEAD

App.controller("MapController", function ($scope, $location, $localStorage, $geolocation, uiGmapIsReady) {

    $(".container").css("height", $(window).innerHeight());
    $(".container").css("width", $(window).innerWidth());

    $(".angular-google-map-container").css("height", $(window).innerHeight());
    $(".angular-google-map-container").css("width", $(window).innerWidth());

    var map;
    var uuid;
    var mapInstanceNumber;

    $scope.map = {
        center: {
            latitude: 11.560827699999999,
            longitude: 104.92362909999997
        },
        zoom: 21,
        options: {
            mapTypeId: "satellite"
        }
    };

    $scope.marker = {
        id: 1,
        options: {
            icon: "images/cPos.png"
        },
        coords: {}
    };

    //Get current location
    if (navigator.geolocation) {
        $geolocation.getCurrentPosition({
            timeout: 60000
        }).then(function (position) {
            $scope.myPosition = position;
            $scope.map.center.latitude = $scope.myPosition.coords.latitude;
            $scope.map.center.longitude = $scope.myPosition.coords.longitude;

            $scope.marker.coords = {
                latitude: $scope.myPosition.coords.latitude,
                longitude: $scope.myPosition.coords.longitude
            };
        });
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }



    uiGmapIsReady.promise(1).then(function (instances) {
        instances.forEach(function (inst) {
            map = inst.map;
            uuid = map.uiGmap_id;
            mapInstanceNumber = inst.instance;
        });
    });


    $scope.getCenter = function () {

        $localStorage.savedPos = {
            'lat': map.getCenter().lat(),
            'lng': map.getCenter().lng()
        }

        $location.path("/");

    };

    $scope.gotoPos = function () {
        var point = new google.maps.LatLng($scope.marker.coords.latitude, $scope.marker.coords.longitude);
        map.panTo(point);
    };

    $scope.goBack = function () {
        $location.path("/");
    }

});
=======
	
>>>>>>> 238c20ae87958b68a1b0f11be224763803f01318
