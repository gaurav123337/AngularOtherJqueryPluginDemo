var eventApp = angular.module('eventApp', [
  'ngRoute',
  'eventControllers',
  'phonecatFilters'
  //'appendGrid '
]);
eventApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/eventlist.html',
        controller: 'eventListCtrl'
      }).
      when('/attrList', {
        templateUrl: 'partials/attrView.html',
        controller: 'AttrListCtrl'
      }).
       when('/photo', {
        templateUrl: 'partials/photo.html',
        controller: 'MyCtrl'
      }).
       when('/nivo', {
        templateUrl: 'partials/nivo.html',
        controller: 'MyNivoCtrl'
      }).
        when('/grid', {
        templateUrl: 'partials/grid.html',
        controller: 'MyGridCtrl'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);


