const API = 'https://raw.githubusercontent.com//MarchenkoMariya/OnlineMarketCatalogApi/master/responses';

const app = new Vue ({
    el: '#app',
    data: {
      userFilter: '',
      imgCart: [],
      cartItems: [],
      products: [],
      filtered: [],
      showCart: false,
    },

    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())

            .catch(error => {
                console.log(error);
            })
        },

        postJson(url, data){
            return fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    // console.log(error)
                    this.$refs.error.text = error;
                })
        },
        putJson(url, data){
            return fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    this.$refs.error.text = error;
                })
        },

        addProduct(item) {
            let find = this.cartItems.find(el => el.id === item.id);
            if (find) {

                find.quantity++

                this.putJson(`/api/cart`, find);

            }
            else {
                const prod = Object.assign({quantity: 1}, item);
                this.postJson(`/api/cart`, prod)
                    .then(data => {
                        if (data.result === 1) {
                            this.cartItems.push(prod)
                        }
                    })
            }
        },

        remove(item){
            let find = this.cartItems.find(el => el.id === item.id);
            if (find) {
                find.quantity--
                this.putJson(`/api/cart`, find);
                if (find.quantity < 1){
                    this.cartItems.splice(this.cartItems.indexOf(item), 1);
                }
            }
            else{
                console.log("ERROR");
            }
        },

        filter(){
          let regexp = new RegExp(this.userFilter, 'i');
          this.filtered = this.products.filter(el => regexp.test(el.title));
        },
    },
    

    mounted() {
        this.getJson(`/api/cart`)
        .then(data => {
            for (let el of data) {
                this.$data.cartItems.push(el);
            }
        });

        this.getJson(`/api/products`)
        .then(data => {
            for (let el of data) {
                this.$data.products.push(el);
                this.$data.filtered.push(el);
            }
        });
    },
    
    computed: {
      filteredList() {
        return this.postList.filter(post => {
          return post.title.toLowerCase().includes(this.search.toLowerCase())
        })
      }
    }
  })


