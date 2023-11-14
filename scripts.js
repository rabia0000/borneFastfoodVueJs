// je fais du vue js directement dans les balises script, je n'utilise pas de LPM pour l'instant
// creation de la variable products pour contenir des données de notre application
var products = [
    {
        "photo": "img/big-mac.png",
        "name": "Big Mac",
        "price": 5.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/mc-chicken.png",
        "name": "Mc Chicken",
        "price": 4.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/double-cb.png",
        "name": "Double Cheese Burger",
        "price": 2.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/fries.png",
        "name": "Fries",
        "price": 2.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/nuggets.png",
        "name": "Mc Nuggets",
        "price": 3.49,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/salad.png",
        "name": "Salad",
        "price": 2.79,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/cola.png",
        "name": "Coke",
        "price": 1.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/lipton.png",
        "name": "Ice Tea",
        "price": 1.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/water.png",
        "name": "Water",
        "price": 1.49,
        "active": false,
        "quantity": 1
    }, 
    
];
 
// cree un objet qui contient toute la logique de l'application
// toute les proprieter d'une appliation vue js vont se trouver dans une proprieter donnee il s'agit d'une fonction data()
// la declaration de retour de la fonction data va return un objet c'est l'objet de donnee de notre application
//grace a la proprieter message on peut modifier le titre dans notre HTML par des doubles {{}} 
// c'est comme ca qu'on va recuperer nos données dynamiquement cela s'appelle le RENDU DECLARATIF ( Declarative Rending)

// window.products permet de récupérer la variable crée en amont (cela evite le copier coller des données)
const SelfServiceMachine = {
data(){
    return {
        // message: "Hello World"
        products: window.products
    }
},
methods: {
    total: function(){
        var total = 0;
        this.products.forEach(function(item){
            if (item.active){
                total += item.price * item.quantity
            }
        });
        return total.toFixed(2); 
    }
}

};

// mais nous avons d'abord besoin de vue js pour monter notre application
// avec l'objet vue avec la methode createApp en argument la logique de l'application cad SelfServiceMachine
//puis on appelle la methode mount pour monter l'application dans lequel on mettre 
//en argument notre element HTML c'est a dire id "app" situer dans notre element main (voir index.html)


Vue.createApp(SelfServiceMachine).mount('#app');