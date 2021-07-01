const app = Vue.createApp({
    data(){
        return{
            product: "shoes",
            description: "this is the shoes for me.",
            image: "./assets/images/socks_green.jpg",
            in_stock:true,
            inventory:100,
            on_sale:true,
            details:["50% cotton","30% wool","20% polyester"],
            variants:[
                {id:234,color:"green"},
                {id:235, color:"red"}
            ]
        }
    }
});