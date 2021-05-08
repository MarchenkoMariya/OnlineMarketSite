"use strict";

Vue.component('cart', {
  data: function data() {
    return {
      imgCart: [],
      cartUrl: '/GetBasket.json',
      cartItems: [],
      showCart: false
    };
  },
  methods: {
    addProduct: function addProduct(product) {
      var _this = this;

      this.$parent.getJson("".concat(API, "/AddToBasket.json")).then(function (data) {
        if (data.result === 1) {
          var find = _this.cartItems.find(function (el) {
            return el.id === product.id;
          });

          if (find) {
            find.quantity++;
          } else {
            var prod = Object.assign({
              quantity: 1
            }, product);

            _this.cartItems.push(prod);
          }
        } else {
          alert('Error');
        }
      });
    },
    remove: function remove(item) {
      var _this2 = this;

      this.$parent.getJson("".concat(API, "/deleteFromBasket.json")).then(function (data) {
        if (data.result === 1) {
          if (item.quantity > 1) {
            item.quantity--;
          } else {
            _this2.cartItems.splice(_this2.cartItems.indexOf(item), 1);
          }
        }
      });
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    this.$parent.getJson("".concat(API + this.cartUrl)).then(function (data) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = data.contents[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var el = _step.value;

          _this3.cartItems.push(el);
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
  },
  template: "\n<div>\n            <button class=\"btn-cart\" type=\"button\" @click=\"showCart = !showCart\"><img src=\"img/index/basket.svg\" alt=\"basket\"></button>\n            \n            <div class=\"cart-block\" v-show=\"showCart\">\n                <p v-if=\"!cartItems.length\">Cart is empty</p>\n                <cart-item class=\"cart-item\" \n                v-for=\"item of cartItems\" \n                :key=\"item.id\"\n                :cart-item=\"item\" \n                :img=\"imgCart\"\n                @remove=\"remove\">\n                </cart-item>\n            </div>\n</div>"
});
Vue.component('cart-item', {
  props: ['cartItem', 'img'],
  template: "\n                <div class=\"cart-item\">\n                    <div class=\"product-bio\">\n                        <img :src=\"cartItem.img\" alt=\"Some image\">\n                        <div class=\"product-desc\">\n                            <p class=\"product-title\">{{cartItem.title}}</p>\n                            <p class=\"product-quantity\">Quantity: {{cartItem.quantity}}</p>\n                            <p class=\"product-single-price\">$ {{cartItem.price}} each</p>\n                        </div>\n                    </div>\n                    <div class=\"right-block\">\n                        <p class=\"product-price\">{{cartItem.quantity*cartItem.price}}</p>\n                        <button class=\"del-btn\" @click=\"$emit('remove', cartItem)\">&times;</button>\n                    </div>\n                </div>\n    "
});