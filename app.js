(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    .controller('LunchController', LunchController);
    
    LunchController.$inject = ['$scope'];
    function LunchController($scope) {
        $scope.lunchMenu = '';
        $scope.message = '';
    
      $scope.checkIfTooMuch = function () {
        if ($scope.lunchMenu.trim().length === 0) {
            $scope.message = 'Please enter data first';
            return;
        }

        var items = $scope.lunchMenu.split(',').filter(function(item) {
            return item.trim() !== '';
        });

        if (items.length <= 3) {
            $scope.message = 'Enjoy!';
        } else {
            $scope.message = 'Too much!';
        }
      };

      $scope.getMessageStyle = function() {
        if ($scope.message === 'Enjoy!' || $scope.message === 'Too much!') {
            return {'color': 'green'};
        } else if ($scope.message === 'Please enter data first') {
            return {'color': 'red'};
        }
    };
    $scope.getBorderStyle = function() {
        if ($scope.message === 'Enjoy!' || $scope.message === 'Too much!') {
            return {'border-color': 'green'};
        } else if ($scope.message === 'Please enter data first') {
            return {'border-color': 'red'};
        }
    };
    }
    
    })();