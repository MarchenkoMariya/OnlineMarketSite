"use strict";

Vue.component('search-form', {
  data: {
    userSearch: ''
  },
  template: "\n                <form action=\"#\" class=\"search-form\" @submit.prevent=\"$parent.$refs.products.filter(userSearch)\">\n                <input type=\"text\" class=\"search-field\" v-model=\"userSearch\">\n                <button class=\"btn-search\" type=\"submit\">\n                    <i class=\"fas fa-search\"></i>\n                </button>\n            </form>\n    "
});