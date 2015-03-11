//var phonecatApp = angular.module('phonecatApp', []);
var eventControllers = angular.module('eventControllers', []);

/*phonecatControllers.controller('PhoneListCtrl', ['$scope','$http',
	function ($scope,$http) {
		$http.get('/json/phones.json').success(function(data){
			$scope.phones = data;
		});
		$scope.orderProp = 'age';
}]);
phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams','$http',
  function($scope, $routeParams ,$http) {   
    $http.get('/json/' + $routeParams.phoneId + '.json').success(function(data) {
      $scope.phone = data;
      $scope.mainImageUrl = data.images[0];
    });
    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }]);*/


eventControllers.controller('eventListCtrl', ['$scope','$http',
  function ($scope,$http) {
    $http.get('/json/baseEvent.json').success(function(data){
      $scope.phones = data;
      $scope.getAttrasdasda = function(data){
        alert("HI"+data);         
      };          
    });
   
}]);

eventControllers.controller('AttrListCtrl', ['$scope','$http',
  function ($scope,$http) {
    $http.get('/json/keyData.json').success(function(data){
      $scope.key = data;
      console.log($scope.key,"$scope.key");
                
    });
   
}]);

eventControllers.controller('MyCtrl', function($scope, $timeout) {
  $scope.images = [];
  
  // timeout acting like web service call
  $timeout(function() {
   
    $scope.images = [
        { url: "http://slidesjs.com/img/example-slide-350-1.jpg" },
        { url: "http://slidesjs.com/img/example-slide-350-2.jpg" },
        { url: "http://slidesjs.com/img/example-slide-350-3.jpg" },
        { url: "http://slidesjs.com/img/example-slide-350-4.jpg" }
      ]
  }, 2000);
});
/*for nivo-slider*/
eventControllers.directive('mySlides', function() {
  var directive = {
    //restrict: 'A',
    link: function(scope, element, attrs, ctrl) {
      scope.$watch(attrs.mySlides, function(value) {
        setTimeout(function() {
          // only if we have images since .slidesjs() can't
          // be called more than once
          console.log("attrs.start is:");
          console.dir(attrs.start);
          if (value.length > 0) {
            $(element[0]).slidesjs({
              preload: true,
              preloadImage: '/content/images/theme/loading.gif',
              play: attrs.play || 500,
              pause: attrs.pause || 250,
              start: attrs.start || 1,
              hoverPause: attrs.hoverPause || true,
              navigation: { active: true, effect: "slide" }
            });
          }

         
          
        }, 1);
      });
    }
  };
  return directive;
});

eventControllers.controller('MyNivoCtrl', function($scope, $timeout) {
  //$scope.imagesssss = [];
  $scope.imagesssss = [];
  
  // timeout acting like web service call
  $timeout(function() {
   
    $scope.imagesssss = [
        { url: "http://slidesjs.com/img/example-slide-350-1.jpg" },
        { url: "http://slidesjs.com/img/example-slide-350-2.jpg" },
        { url: "http://slidesjs.com/img/example-slide-350-3.jpg" },
        { url: "http://slidesjs.com/img/example-slide-350-4.jpg" }
      ]
  }, 2000);
});

eventControllers.directive('myNivoSlides', function() {
  var directive = {
    restrict: 'A',
    link: function(scope, element, attrs, ctrl) {
      scope.$watch(attrs.myNivoSlides, function(value) {
        setTimeout(function() {
          // only if we have images since .slidesjs() can't
          // be called more than once
          //console.log("attrs.start is:");
          //console.dir(attrs.start);
          if (value.length > 0) {
            $(element[0]).nivoSlider();
          }
          
        }, 1);
      });
    }
  };
  return directive;
});

/*for append grid*/
eventControllers.controller('MyGridCtrl', function($scope, $timeout) {
  //$scope.imagesssss = [];
  $scope.cdata = [];
  
  // timeout acting like web service call
  $timeout(function() {
   
    $scope.cdata = [  { 'Album': 'Dearest', 'Artist': 'Theresa Fu', 'Year': '2009', 'Origin': 1, 'Poster': true, 'Price': 168.9, 'RecordId': 123 },
            { 'Album': 'To be Free', 'Artist': 'Arashi', 'Year': '2010', 'Origin': 3, 'Poster': true, 'Price': 152.6, 'RecordId': 125 },
            { 'Album': 'Count On Me', 'Artist': 'Show Luo', 'Year': '2012', 'Origin': 2, 'Poster': false, 'Price': 306.8, 'RecordId': 127 },
            { 'Album': 'Wonder Party', 'Artist': 'Wonder Girls', 'Year': '2012', 'Origin': 4, 'Poster': true, 'Price': 108.6, 'RecordId': 129 },
            { 'Album': 'Reflection', 'Artist': 'Kelly Chen', 'Year': '2013', 'Origin': 1, 'Poster': false, 'Price': 138.2, 'RecordId': 131 }
                     
         
      ]
  }, 2000);
});

eventControllers.directive('myGrid', function() {
  var directive = {
    //restrict: 'A',
    link: function(scope, element, attrs, ctrl) {
      scope.$watch(attrs.myGrid, function(value) {
        setTimeout(function() {
          // only if we have images since .slidesjs() can't
          // be called more than once
          //console.log("attrs.start is:");
          //console.dir(attrs.start);
          console.log(value,"Value");
          console.log(element,"element");
          /*if (value.length > 0) {
            $(element[0]).appendGrid('load', [
            { 'Album': 'Dearest', 'Artist': 'Theresa Fu', 'Year': '2009', 'Origin': 1, 'Poster': true, 'Price': 168.9, 'RecordId': 123 },
            { 'Album': 'To be Free', 'Artist': 'Arashi', 'Year': '2010', 'Origin': 3, 'Poster': true, 'Price': 152.6, 'RecordId': 125 },
            { 'Album': 'Count On Me', 'Artist': 'Show Luo', 'Year': '2012', 'Origin': 2, 'Poster': false, 'Price': 306.8, 'RecordId': 127 },
            { 'Album': 'Wonder Party', 'Artist': 'Wonder Girls', 'Year': '2012', 'Origin': 4, 'Poster': true, 'Price': 108.6, 'RecordId': 129 },
            { 'Album': 'Reflection', 'Artist': 'Kelly Chen', 'Year': '2013', 'Origin': 1, 'Poster': false, 'Price': 138.2, 'RecordId': 131 }
        ]);
          }*/
          if (value.length > 0) {
            $(element[0]).appendGrid({
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
    });
    /*To see working demo on click comment the page load section or to see demo on Page Load comment the button click code block */        
    // Handle `Load` button click
    $('#btnLoad').button().click(function () {
        $(element[0]).appendGrid('load', [
            { 'Album': 'Dearest', 'Artist': 'Theresa Fu', 'Year': '2009', 'Origin': 1, 'Poster': true, 'Price': 168.9, 'RecordId': 123 },
            { 'Album': 'To be Free', 'Artist': 'Arashi', 'Year': '2010', 'Origin': 3, 'Poster': true, 'Price': 152.6, 'RecordId': 125 },
            { 'Album': 'Count On Me', 'Artist': 'Show Luo', 'Year': '2012', 'Origin': 2, 'Poster': false, 'Price': 306.8, 'RecordId': 127 },
            { 'Album': 'Wonder Party', 'Artist': 'Wonder Girls', 'Year': '2012', 'Origin': 4, 'Poster': true, 'Price': 108.6, 'RecordId': 129 },
            { 'Album': 'Reflection', 'Artist': 'Kelly Chen', 'Year': '2013', 'Origin': 1, 'Poster': false, 'Price': 138.2, 'RecordId': 131 }
        ]);
    });
/*On page load*/
/*$(element[0]).appendGrid('load', [
            { 'Album': 'Dearest', 'Artist': 'Theresa Fu', 'Year': '2009', 'Origin': 1, 'Poster': true, 'Price': 168.9, 'RecordId': 123 },
            { 'Album': 'To be Free', 'Artist': 'Arashi', 'Year': '2010', 'Origin': 3, 'Poster': true, 'Price': 152.6, 'RecordId': 125 },
            { 'Album': 'Count On Me', 'Artist': 'Show Luo', 'Year': '2012', 'Origin': 2, 'Poster': false, 'Price': 306.8, 'RecordId': 127 },
            { 'Album': 'Wonder Party', 'Artist': 'Wonder Girls', 'Year': '2012', 'Origin': 4, 'Poster': true, 'Price': 108.6, 'RecordId': 129 },
            { 'Album': 'Reflection', 'Artist': 'Kelly Chen', 'Year': '2013', 'Origin': 1, 'Poster': false, 'Price': 138.2, 'RecordId': 131 }
        ]);*/


          }
        }, 1);
      });
    }
  };
  return directive;
});