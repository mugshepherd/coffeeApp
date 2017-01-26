'use strict';

describe('ItemListController', function() {

  beforeEach(module('coffeeShopApp'));

  it('should create a `beverage` model with 5 beverages', inject(function($controller) {
    var scope = {};
    var ctrl = $controller('itemListController', {$scope: scope});

    expect(scope.items.beverages.length).toBe(5);
  }));

});
