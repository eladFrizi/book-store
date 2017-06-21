Vue.component('cart-item', {
    props: ['cartItem'],
    template: `
        <div class="card is-fullwidth">
              <header class="card-header">
                <p class="card-header-title">
                  {{cartItem.item.title}}
                </p>
              </header>
              <div class="card-content">
                <div class="content">
                  Quantity: {{cartItem.quantity}}
                </div>
              </div>
              <footer class="card-footer">
                <button @click="addToCart">+</button>
                <button @click="subtractFromCart">-</button>
                <button @click="clearFromCart">Clear</button>
              </footer>
        </div>
    `,
    methods: {
        addToCart() {
            console.log('Adding to Cart');
            // this.$emit('add');
            cartService.addToCart(this.cartItem.item);
        },
        subtractFromCart() {
            console.log('Subtracting from Cart');
            cartService.subtractFromCart(this.cartItem.item.id);
        },
        clearFromCart() {
            console.log('Clearing from Cart');
            cartService.clearItem(this.cartItem.item.id);
        },

    }
});