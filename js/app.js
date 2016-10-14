//Initialize
var App = angular.module("App", ['ngRoute','routeStyles','ngMap','ngGeolocation','ngStorage']);

//Configuration
App.config(['$compileProvider', function ($compileProvider) {
    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|blob):|data:image\//);
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|blob):|data:image/);
}]);

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
App.run(function ($rootScope) {
    
    

});