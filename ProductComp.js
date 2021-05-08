Vue.component('products_cell', {
    data() {
        return {
            catalogUrl: '/CatalogData.json',
            products: [],
            filtered: [],
            imgCatalog: [],
        }
    },
    methods: {
        filter(userSearch) {
            let regexp = new RegExp(userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.title));
        }
    },
    mounted() {
        this.$parent.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
        this.$parent.getJson(`/GetProducts.json`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                    this.filtered.push(el);
                }
            })
    },
    //mounted() {
    //    this.$parent.getJson(`${API + this.catalogUrl}`)
    //        .then(data => {
    //            for (let el of data) {
    //                this.products.push(el);
    //            }
    //        });
    //},
    template: `
        <div class = "products_cell">
        
        <product-1 
            v-for="item of filtered" 
                :key="item.id"
                :content = "item">            
        </product-1>

             
        </div> 
        
         `
});

Vue.component('product-1', {
    props: ['content'],
    template: `
                <div class="product-1">
                <img :src="content.img" alt="Some img">

                <div class="desc">
                    <p class="product-title">{{content.title}}</p>
                    <p class="text1" v-html="content.description"></p>
                    <p class="price">$ {{content.price}}</p>

                    <div class="top-screen" @click="$parent.$parent.$refs.cart.addProduct(content)">
                        <button class="screen">
                        <img src="img/index/basket.svg" alt="basket">
                        <p class="add-to" type="submit" id ="submit"
                        >Add to Cart</p>
                        </button>
                    </div>



                    
                    
                </div>  
                    
                </div>
    `
});



//Vue.component('cart-item', {
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