const app = Vue.createApp({
    data(){
        return{
            product: "shoes",
            description: "this is the shoes for me.",
            image: "./assets/images/socks_green.jpg",
            in_stock:true,
            inventory:10,
            on_sale:true,
            details:["50% cotton","30% wool","20% polyester"],
            variants:[
                {id:234,color:"green",image:"./assets/images/socks_green.jpg"},
                {id:235, color:"blue",image:"./assets/images/socks_blue.jpg"}
            ],
            cart:0,
            size:["S","M","L"]
        }
    },
    methods:{
        add_to_cart(){
            if(this.inventory>0){
                this.cart+=1;
            this.inventory-=1;
            }
        },
        update_image(variant_image){
            this.image=variant_image;
        }
    }
});