const API = 'https://raw.githubusercontent.com//MarchenkoMariya/OnlineMarketCatalogApi/master/responses';

//new Vue({ el: '#products_cell' })

const app = new Vue({
    el: '#app',
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())

            .catch(error => {
                console.log(error);
            })
        },
    }
})