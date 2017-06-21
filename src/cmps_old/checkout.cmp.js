Vue.component('checkout', {
    props: ['totalPrice'],
    template: `
        <section class="popup">
            <button @click="closeMe">x</button>
            <h1>Purchase total price: {{totalPrice}} $</h1>
        </section>
    `,
    methods: {
        closeMe() {
            console.log('close me!');
            this.$emit('close');
        }
    }
});