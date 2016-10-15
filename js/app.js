//Initialize
var App = angular.module("App", ['uiGmapgoogle-maps','ngRoute','routeStyles','ngGeolocation','ngStorage']);

//Configuration
App.config(['$compileProvider', function ($compileProvider) {
    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|blob):|data:image\//);
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|blob):|data:image/);
}]);

App.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyAb-d7K-xK4f8QnT-EONHvTejsYx2ZlJtM',
        v: '3.20',
    });
});

//Route
App.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "home.html",
        controller: "HomeController",
        css : "css/home.css"
    }).when("/map", {
        templateUrl: "map.html",
        controller: "MapController",
        css : "css/map.css"
    });
});

//Bootstrap
App.run(function ($rootScope,$templateCache) {
    
    $rootScope.$on('$viewContentLoaded', function() {
      $templateCache.removeAll();
   });
    

});