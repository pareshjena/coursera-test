'use strict'

angular.module('ShoppingListCheckOff', [])
	.controller("ToBuyController", ['ShoppingListCheckOffService', function(ShoppingListCheckOffService){
		var showCheckOff = this;

		showCheckOff.ToBuyItems = ShoppingListCheckOffService.getToBuyItems();

		showCheckOff.boughtItem = function(itemIndex){
	  		ShoppingListCheckOffService.boughtItem(itemIndex);

		}
	}])
	//End: ToBuyController

	.controller("AlreadyBoughtController", ['ShoppingListCheckOffService', function(ShoppingListCheckOffService){
		var showAlreadyBought = this;

		showAlreadyBought.BoughtItems = ShoppingListCheckOffService.getBoughtItems();
	}])
	//End: AlreadyBoughtController


	.service("ShoppingListCheckOffService", [function(){
	    var service = this;
	    var toBuyItems = [
	    	{name:"Milk", quantity:2},
	    	{name:"Donuts", quantity:5},
	    	{name:"Cookies", quantity:3},
	    	{name:"Chocolate", quantity:4},
	    	{name:"Peanut Butter", quantity:12},
	    	{name:"Pepto Bismol (Chocolate flavor)", quantity:2},
	    	{name:"Pepto Bismol (Cookie flavor)", quantity:3},
	    	{name:"Chips", quantity:9},
	    	{name:"Cold Drinks", quantity:30},
	    	{name:"Garlic Bread", quantity:1},
	    	{name:"Pretzel", quantity:10},
	    	{name:"Tim Tam", quantity:25}
	    ];
	    var boughtItems = [];

	    service.boughtItem = function(itemIndex){
			//add the bought item to boughtItems
			var item = {name: toBuyItems[itemIndex].name, quantity: toBuyItems[itemIndex].quantity};
			boughtItems.push(item);

	      	//remove the item from toBuyItems using the index
	      	toBuyItems.splice(itemIndex, 1);
	    };

	    service.getToBuyItems = function(){
			return toBuyItems;
	    };

	    service.getBoughtItems = function(){
			return boughtItems;
	    };
  }])
  //End: ShoppingListCheckOffService