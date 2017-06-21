<template>
    <section class="flex-2" v-if="books">
        <div>
            <h2>We have {{books.length}} Books</h2>
            <button @click="isCreateMode=true">Add new book</button>
            <book-filter @filter="setFilter">
            </book-filter>
            <ul>
                <book-preview v-for="currBook in booksToDisplay" @click.native="selectBook(currBook)" @edit="editBook(currBook)" :book="currBook">
                </book-preview>
            </ul>
            <book-details v-if="selectedBook" @close="resetSelected" @next="selectNext" :book="selectedBook">
            </book-details>
    
            <book-edit v-if="editedBook || isCreateMode" :book="editedBook" @save="saveBook" @cancel="closeEdit">
            </book-edit>
        </div>
    </section>
</template>

<script>
import bookService from '../services/book.service';
import bookFilter from './Filter';
import bookPreview from './BookPreview';
import bookEdit from './BookEdit';
import bookDetails from './BookDetails';

export default {
    name: 'book-list',
    components:{
        bookFilter,
        bookPreview,
        bookEdit,
        bookDetails
    },
    created() {
        bookService.getBooks().then(books => {
            this.books = books;
        })
    },
    data() {
        return {
            books: null,
            selectedBook: null,
            editedBook: null,
            isCreateMode: false,
            filterBy: null
        }
    },
    computed: {
        booksToDisplay: function () {
            if (this.filterBy) {
                return this.books.filter(book =>
                    book.title.toLowerCase().includes(this.filterBy.title.toLowerCase()) &&
                    book.price >= this.filterBy.minPrice
                );
            }
            else return this.books;
        }
    },
    methods: {
        selectBook(book) {
            this.selectedBook = book;
        },
        resetSelected() {
            this.selectedBook = null;
        },
        selectNext() {
            this.selectedBook = bookService.getNext(this.selectedBook);
        },
        editBook(book) {
            console.log('Editing the book', book)
            this.editedBook = book;
        },
        saveBook(book) {
            bookService.saveBook(book);
            this.closeEdit();
        },
        closeEdit() {
            this.editedBook = null;
            this.isCreateMode = false;
        },
        setFilter(ev) {
            this.filterBy = ev;
        }
    }
}

</script>

<style scoped>
        ul{
            list-style: none;
            display: flex;
            flex-flow: row wrap;
            justify-content: space-around;
        }
        li{
            margin: 10px;
            padding: 10px;  
            border: 1px solid black;
            border-radius: 5px;
        }
        
</style>
