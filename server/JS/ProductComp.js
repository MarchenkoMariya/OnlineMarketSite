Vue.component('products_cell', {
    props: ['content'],
    template: `
    <div class = "products_cell">
    <product-1 
        v-for="item of content" 
            :key = "item.id"
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

                        <div class="top-screen">
                            <button class="screen" @click="$parent.$emit('add-product', content)">
                            <img src="img/index/basket.svg" alt="basket">
                            <p class="add-to" type="submit" id ="submit"
                            >Add to Cart</p>
                            </button>
                        </div>
                    </div>                      
                </div>
    `
});