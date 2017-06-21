Vue.component('cart-details', {
    // created() {
    //     this.cartItems = cartService.getCartItems();
    // },
    data() {
        return {
            cartItems: cartService.getCartItems(),
            isCheckout: false            
        }
    },
    computed:{
        totalPrice: function(){ 
            //I send "this.cartItems" in order for this prop to be reactive
            return cartService.getCartTotal(this.cartItems);
        }
    },
    methods: {
        doCheckout(){
            this.isCheckout = true;
        },
        closeCheckout(){
            this.isCheckout = false;
        }
    },
    template: `
       
        <section>
            <p class="margin" v-if="cartItems.length === 0">Your shopping cart is empty</p>
            
            <cart-item v-for="cartItem in cartItems"
                :cartItem="cartItem"
                >
            </cart-item>


            <p class="title is-3">Total of: {{totalPrice}} $</p>
             <button class="button is-success is-medium" @click="doCheckout">Checkout</button>

             <checkout v-if="isCheckout"
                :totalPrice="totalPrice"
                @close="closeCheckout"
             >
             </checkout>

        </section>        
    `
})
