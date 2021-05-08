"use strict";

var API = 'https://raw.githubusercontent.com//MarchenkoMariya/OnlineMarketCatalogApi/master/responses'; //new Vue({ el: '#products_cell' })

var app = new Vue({
  el: '#app',
  methods: {
    getJson: function getJson(url) {
      return fetch(url).then(function (result) {
        return result.json();
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }
});