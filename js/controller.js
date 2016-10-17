App.controller("MainController", function ($scope) {

});

App.controller("HomeController", function ($scope, $location) {

    $scope.openMap = function () {
        $location.path("/map");
    }
});

App.controller("MapController", function ($scope, $location, $localStorage, $geolocation, uiGmapIsReady) {

    $(".container").css("height", $(window).innerHeight());
    $(".container").css("width", $(window).innerWidth());

    $(".angular-google-map-container").css("height", $(window).innerHeight() - 120);
    $(".angular-google-map-container").css("width", $(window).innerWidth());
    $(".angular-google-map-container").css("margin-top","60px");

   //alert($(".angular-google-map-container").height());
    $(".center-marker").css("top",$(".angular-google-map-container").height()/2 + 11);
    $(".center-marker").css("left",$(".angular-google-map-container").width()/2 - 11);

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
            mapTypeId: "hybrid",
            mapTypeControl: false,
            streetViewControl: false
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

            //var point = new google.maps.LatLng($scope.marker.coords.latitude, $scope.marker.coords.longitude);
            //map.setCenter(point);

        });
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }

    //When map is ready to load
    uiGmapIsReady.promise(1).then(function (instances) {
        instances.forEach(function (inst) {
            map = inst.map;
            uuid = map.uiGmap_id;
            mapInstanceNumber = inst.instance;
        });
    });


    $scope.getCenter = function () {

        if(map.getCenter().lat() && map.getCenter().lng()){
            $localStorage.savedPos = {
                'lat': map.getCenter().lat(),
                'lng': map.getCenter().lng()
            }

            $location.path("/");
        }
    };

    $scope.gotoPos = function () {
        var point = new google.maps.LatLng($scope.marker.coords.latitude, $scope.marker.coords.longitude);
        map.panTo(point);
    };

    $scope.goBack = function () {
        $location.path("/");
    }

});