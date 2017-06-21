Vue.component('book-preview', {
    props: ['book'],
    template: `
        <li class="card product book-preview">
            <h2>{{book.title}}</h2>
            <img src="http://via.placeholder.com/250x150">
            <h3>\${{book.price}}</h3>
            <button @click.stop="editBook">&#9998;</button>
            <button @click.stop="deleteBook">x</button>
            <button @click.stop="addToCart">+</button>
            <button @click.stop="subtractFromCart">-</button>
          
        </li>
    `,
    methods: {

        editBook() {
            console.log('Request Edit');
            this.$emit('edit');
        },
        deleteBook() {
            console.log('Request Delete');
            // this.$emit('delete');
            bookService.deleteBook(this.book);
        },
        addToCart() {
            console.log('Adding to Cart');
            // this.$emit('add');
            cartService.addToCart(this.book);
        },
        subtractFromCart() {
            console.log('Subtracting from Cart');
            // this.$emit('subtract');
            cartService.subtractFromCart(this.book.id);
        }
    }
});
