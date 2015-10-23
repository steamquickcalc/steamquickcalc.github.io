var app = angular.module("myApp", ['ngMaterial']);

app.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('docs-dark', 'default')
        .primaryPalette('yellow')
        .dark();
});
app.controller('buyingCtrl', function($scope) {
    $scope.itemstats = {
        mprice: '',
        percentage: '80',
        basekeyrate: '2.5',
    };
    //$scope.result = ($scope.itemstats.mprice * ($scope.itemstats.percentage * 0.01)) / $scope.itemstats.basekeyrate;

});

app.controller('sellingCtrl', function($scope) {
    $scope.itemstats = {
        mprice: '',
        percentage: '85',
        basekeyrate: '2.5',
    };
    //$scope.result = ($scope.itemstats.mprice * ($scope.itemstats.percentage * 0.01)) / $scope.itemstats.basekeyrate;

});

app.controller('TPCtrl', function($scope) {
    $scope.itemstats = {
        mprice: '',
        bper: '80',
        sper: '85',
        basekeyrate: '2.5',
    };
    //$scope.result = ($scope.itemstats.mprice * ($scope.itemstats.percentage * 0.01)) / $scope.itemstats.basekeyrate;

});
