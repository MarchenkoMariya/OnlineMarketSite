const API = 'https://raw.githubusercontent.com//MarchenkoMariya/OnlineMarketCatalogApi/master/responses';

const app = new Vue ({
    el: '#app',
    data: {
      userFilter: '',
      catalogUrl: '/CatalogData.json',
      cartUrl: '/GetBasket.json',
      addBasketURL: '/AddToBasket.json',
      removeBasketURL: '/deleteFromBasket.json',
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
        addProduct(item){
          this.getJson(`${API + this.addBasketURL}`)
              .then(data => {
                  if(data.result === 1){
                     let find = this.cartItems.find(el => el.id === item.id);
                     if(find){
                         find.quantity++;
                     } else {
                         const prod = Object.assign({quantity: 1}, item);
                         this.cartItems.push(prod)
                     }
                  }
              })
      },
      remove(item){
          this.getJson(`${API + this.removeBasketURL}`)
              .then(data => {
                  if (data.result === 1) {
                      if(item.quantity>1){
                          item.quantity--;
                      } else {
                          this.cartItems.splice(this.cartItems.indexOf(item), 1);
                      }
                  }
                  
              })
      },
        filter(){
          let regexp = new RegExp(this.userFilter, 'i');
          this.filtered = this.products.filter(el => regexp.test(el.title));
        },
    },
    

    mounted() {
        this.getJson(`${API + this.cartUrl}`)
        .then(data => {
            for (let el of data.contents) {
                this.$data.cartItems.push(el);
            }
        });
        this.getJson(`${API + this.catalogUrl}`)
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
