<template>
    <section class="popup book-edit">
    
        <h1 v-if="book">Edit: {{book.title}}</h1>
        <h1 v-else>New Book</h1>
        <label>Title:</label>
        <input type="text" v-model="bookToEdit.title" />
        <br/>
        <label>Price:</label>
        <input type="text" v-model="bookToEdit.price" />
        <br/>
        <label>Description:</label>
        <input type="text" v-model="bookToEdit.description" />
        <br/>
        <button @click="save">Save</button>
        <button @click="cancel">Cancel</button>
    </section>
</template>

<script>
export default {
    name: 'book-edit',
    props: ['book'],
    data() {
        return {
            bookToEdit: null
        }
    },
    created() {
        this.bookToEdit = Object.assign({}, this.book)
    },
    methods: {
        save() {
            console.log('Saving', this.bookToEdit)
            this.$emit('save', this.bookToEdit);
        },
        cancel() {
            console.log('Cancel');
            this.$emit('cancel');
        }
    }
}
</script>

<style scoped>
</style>