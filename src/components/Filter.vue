<template>
    <section>
        <h1>Filter books by:</h1>
        <label>Title:</label>
        <input type="text" @input="setFilter" v-model="filterBy.title" />
        <label>Minimum Price:</label>
        <input type="number" min="0" @keyup="setFilter" v-model="filterBy.minPrice" />
    </section>
</template>

<script>

export default {
    name: 'book-filter',
    data() {
        return {
            filterBy: {
                title: '',
                minPrice: 0
            }
        }
    },
    methods: {
        setFilter() {
            this.$emit('filter', this.filterBy);
        }
    }
}
</script>
