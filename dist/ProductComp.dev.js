"use strict";

Vue.component('products_cell', {
  data: function data() {
    return {
      catalogUrl: '/CatalogData.json',
      products: [],
      filtered: [],
      imgCatalog: []
    };
  },
  methods: {
    filter: function filter(userSearch) {
      var regexp = new RegExp(userSearch, 'i');
      this.filtered = this.products.filter(function (el) {
        return regexp.test(el.title);
      });
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$parent.getJson("".concat(API + this.catalogUrl)).then(function (data) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var el = _step.value;

          _this.products.push(el);

          _this.filtered.push(el);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    });
    this.$parent.getJson("/GetProducts.json").then(function (data) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var el = _step2.value;

          _this.products.push(el);

          _this.filtered.push(el);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    });
  },
  //mounted() {
  //    this.$parent.getJson(`${API + this.catalogUrl}`)
  //        .then(data => {
  //            for (let el of data) {
  //                this.products.push(el);
  //            }
  //        });
  //},
  template: "\n        <div class = \"products_cell\">\n        \n        <product-1 \n            v-for=\"item of filtered\" \n                :key=\"item.id\"\n                :content = \"item\">            \n        </product-1>\n\n             \n        </div> \n        \n         "
});
Vue.component('product-1', {
  props: ['content'],
  template: "\n                <div class=\"product-1\">\n                <img :src=\"content.img\" alt=\"Some img\">\n\n                <div class=\"desc\">\n                    <p class=\"product-title\">{{content.title}}</p>\n                    <p class=\"text1\" v-html=\"content.description\"></p>\n                    <p class=\"price\">$ {{content.price}}</p>\n\n                    <div class=\"top-screen\" @click=\"$parent.$parent.$refs.cart.addProduct(content)\">\n                        <button class=\"screen\">\n                        <img src=\"img/index/basket.svg\" alt=\"basket\">\n                        <p class=\"add-to\" type=\"submit\" id =\"submit\"\n                        >Add to Cart</p>\n                        </button>\n                    </div>\n\n\n\n                    \n                    \n                </div>  \n                    \n                </div>\n    "
}); //Vue.component('cart-item', {
//    props: ['cartItem', 'img'],
//    template: `
//                <div class="cart-item">
//                    <div class="product-bio">
//                        <img :src="cartItem.img" alt="Some image">
//                        <div class="product-desc">
//                            <p class="product-title">{{cartItem.title}}</p>
//                            <p class="product-quantity">Quantity: {{cartItem.quantity}}</p>
//                            <p class="product-single-price">$ {{cartItem.price}} each</p>
//                        </div>
//                    </div>
//                    <div class="right-block">
//                        <p class="product-price">{{cartItem.quantity*cartItem.price}}</p>
//                        <button class="del-btn" @click="$emit('remove', cartItem)">&times;</button>
//                    </div>
//                </div>
//    `
//});
//Vue.component('products_cell', {
//    data() {
//        return {
//            catalogUrl: '/CatalogData.json',
//            products: [],
//            filtered: [],
//            imgCatalog: [],
//        }
//    },
//    methods: {
//        filter(userSearch) {
//            let regexp = new RegExp(userSearch, 'i');
//            this.filtered = this.products.filter(el => regexp.test(el.title));
//        }
//    },
//    mounted() {
//        this.$parent.getJson(`${API + this.catalogUrl}`)
//            .then(data => {
//                for (let el of data) {
//                    this.products.push(el);
//                    this.filtered.push(el);
//                }
//            });
//        this.$parent.getJson(`/GetProducts.json`)
//            .then(data => {
//                for (let el of data) {
//                    this.products.push(el);
//                    this.filtered.push(el);
//                }
//            })
//    },
//    template: `
//        <div class="products_cell">
//            <product v-for="item of filtered" 
//            :key="item.id" 
//            :img="imgCatalog"
//            :product="item">
//            </product>
//        </div>
//    `
//});
//
//
//
//Vue.component('product', {
//    props: ['product', 'img'],
//    template: `
//    <div class="product-item>
//                <img :src="product.img" alt="Some img">
//                <div class="desc">
//                    <h3 class="ellery">{{product.title}}</h3>
//                    <p class="text1">{{product.description}}</p>
//                    <p class="price">$ {{product.price}}</p>
//                    <button class="buy-btn" @click="$parent.$parent.$refs.cart.addProduct(product)">Купить</button>
//                </div>
//            </div>
//    `
//})