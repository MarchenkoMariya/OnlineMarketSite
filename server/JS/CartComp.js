Vue.component('cart', {   
    props:['cartItems', 'visibility'], 
    template: `
        <div>
            <div class="cart-block" v-show="visibility">
                <p v-if="!cartItems.length">Cart is empty</p>
                <cart-item class="cart-item" 
                v-for="item of cartItems" 
                :key="item.id"
                :cart-item="item" >
                </cart-item>
            </div>
        </div>`
});


Vue.component('cart-item', {
    props: ['cartItem', 'img'],
    template: `
        <div class="cart-item">
            <div class="product-bio">
                <img :src="cartItem.img" alt="Some image">
                <div class="product-desc">
                    <p class="product-title">{{cartItem.title}}</p>
                    <p class="product-quantity">Quantity: {{cartItem.quantity}}</p>
                    <p class="product-single-price">$ {{cartItem.price}} each</p>
                </div>
            </div>
            <div class="right-block">
                <p class="product-price">{{cartItem.quantity*cartItem.price}}</p>
                <button class="del-btn" @click="$parent.$emit('remove', cartItem)">&times;</button>
            </div>
        </div>`
});