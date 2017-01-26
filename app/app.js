'use strict';

// Define the `coffeeShopApp` module
var coffeeShopApp = angular.module('coffeeShopApp', []);

// Define the `ItemListController` controller on the `coffeeShopApp` module
coffeeShopApp.controller('ItemListController', ['$scope','filterFilter', function ItemListController($scope, filterFilter) {

  //I originally considered including a field beverages.group which would 
  //note whether each item was a coffee drink or a tea drink.  Each topping would also 
  //list associated groups (at toppings.groups[]).  this proved too difficult to implement
  //within the time constraints however.

  //note that I also included beverages and toppings within the same "items" object
  //to make it easier to make it easier to access each object's prices, and add the 
  //prices of each.  Not a difficult task I'm sure, but within thte time constraints I 
  //wasn't able to do it otherwise.

  $scope.items = {
    beverages: [
      {
        name: "latte",
        price: 2.5,
        selected: true,
      }, 
      {
        name: "cappuccino",
        price: 2.5,
        selected: false,
      },
      {
        name: "tea",
        price: 2,
        selected: false
      },
      {
        name: "flat white",
        price: 2.5,
        selected: false
      },
      {
        name: "espresso",
        price: 2,
        selected: false
      }

    ],
    toppings: [
      {
        name: "Double Espresso",
        price: 1,
        selected: false
      },
      {
        name: "Chocolate",
        price: 0.5,
        selected: false
      },
      {
        name: "Vanilla",
        price: 0.5,
        selected: false
      },
      {
        name: "Caramel",
        price: 0.5,
        selected: false
      },
      {
        name: "Mint",
        price: 0.4,
        selected: false
      },
      {
        name: "Ginger",
        price: 0.5,
        selected: false
      },
      {
        name: "Honey",
        price: 0.5,
        selected: true
      }
    ]
  };


  $scope.beveragesSelection = [];  //the price of the selected beverage gets placed in here
  //note that currently it only grabs the beverage whose beverage.selected value == true

  $scope.toppingsSelection = [];  //the prices for each topping selected get pushed here.
  $scope.orderSelection = [];  //this is intended to hold all beverages and toppings 
  //selected. It does not currently seem to be working.
  
  $scope.beverages = $scope.items.beverages; //a shortcut to allow for easy access for $scope.items.beverages.
  $scope.toppings = $scope.items.toppings; //a shortcut to allow for easy access for $scope.items.toppings.
  
  //this function adds all items included in beveragesSelection, to give a sum total of all 
  //beverages (currently only one item can be included )
  $scope.totalBeveragesSelection = function(arr) {
    var result = 0;
    $scope.beveragesSelection.forEach(function(val){ result += val; });
    return result;
  }

  //this function adds all items included in toppingsSelection, to give a sum total of all 
  //toppings
  $scope.totalToppingsSelection = function(arr) {
    var result = 0;
    for(var i = 0; i < $scope.toppingsSelection.length; i++) {
        result += $scope.toppingsSelection[i];
    }
    return result;
  }

  //this gives a sum total of the price of all items (ie: beverages and toppings) selected
  $scope.sumTotal = function(arr) {
    var result = 0;
    $scope.beveragesSelection.forEach(function(val){ result += val; });
    $scope.toppingsSelection.forEach(function(val){ result += val; });
    return result;
  }

  // this watches for changes within the beverages selected, and pushes the price of the item
  //selected to "$scope.beveragesSelection", above
  $scope.$watch('beverages|filter:{selected:true}', function (nv) {
    $scope.beveragesSelection = nv.map(function (beverages) {
      return beverages.price;
    });
  }, true);
    // this watches for changes within the toppings selected, and pushes the price of the 
    //item selected to "$scope.toppingsSelection", above
  $scope.$watch('toppings|filter:{selected:true}', function (nv) {
      $scope.toppingsSelection = nv.map(function (toppings) {
        return toppings.price;
      });
    }, true);
}]);