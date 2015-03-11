// Code goes here

var app = angular.module('MyApp', []);

app.controller('MyCtrl', function($scope, $timeout) {
  $scope.images = [];
  
  // timeout acting like web service call
  $timeout(function() {
    /*$scope.images = [
        { url: "http://slidesjs.com/img/example-slide-350-1.jpg" },
        { url: "http://slidesjs.com/img/example-slide-350-2.jpg" },
        { url: "http://slidesjs.com/img/example-slide-350-3.jpg" },
        { url: "http://slidesjs.com/img/example-slide-350-4.jpg" }
      ]*/
      $scope.appendGridData = [
        caption: 'My CD Collections',
        initRows: 1,
        columns: [
                { name: 'Album', display: 'Album', type: 'text', ctrlAttr: { maxlength: 100 }, ctrlCss: { width: '160px'} },
                { name: 'Artist', display: 'Artist', type: 'text', ctrlAttr: { maxlength: 100 }, ctrlCss: { width: '100px'} },
                { name: 'Year', display: 'Year', type: 'text', ctrlAttr: { maxlength: 4 }, ctrlCss: { width: '40px'} },
                { name: 'Origin', display: 'Origin', type: 'select', ctrlOptions: { 0: '{Choose}', 1: 'Hong Kong', 2: 'Taiwan', 3: 'Japan', 4: 'Korea', 5: 'US', 6: 'Others'} },
                { name: 'Poster', display: 'With Poster?', type: 'checkbox' },
                { name: 'Price', display: 'Price', type: 'text', ctrlAttr: { maxlength: 10 }, ctrlCss: { width: '50px', 'text-align': 'right' }, value: 0 },
                { name: 'RecordId', type: 'hidden', value: 0 }
            ]
      ]
  }, 2000);
});

    app.directive('mySlides', function() {
      var directive = {
        restrict: 'A',
        link: function(scope, element, attrs, ctrl) {
          scope.$watch(attrs.mySlides, function(value) {
            setTimeout(function() {
              // only if we have images since .slidesjs() can't
              // be called more than once              
              if (value.length > 0) {
                $(element[0]).slidesjs({
                  /*preload: true,
                  preloadImage: '/content/images/theme/loading.gif',
                  play: attrs.play || 5000,
                  pause: attrs.pause || 2500,
                  start: attrs.start || 1,
                  hoverPause: attrs.hoverPause || true,
                  navigation: { active: true, effect: "slide" }*/
                });
              }
            }, 1);
          });
        }
      };
      return directive;
    });