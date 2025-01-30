<template>
    <nav class="filter-nav">
        <button @click="filteredBy('all')" :class="{active : status === 'all' }">All</button>
        <button @click="filteredBy('ongoing')" :class="{active : status === 'ongoing'}">Ongoing</button>
        <button @click="filteredBy('completed')" :class="{active : status === 'completed'}">Completed</button>
    </nav>
</template>



<script>
export default {
    // data() {
    //     return {
    //         status: "all",
    //     }
    // },

    //  methods: {
    //     filteredBy(status) {
    //         this.status = status;
    //     }
    // },

    props: [ 'status' ],

    methods: {
        filteredBy(status) {
            this.$emit("filteredStatus", status);
        }
    }
}
</script>



<style>
.filter-nav {
    margin: 20px 20px 30px 20px;
}

.filter-nav button {
    background:none;
    border: none;
    color: #bbb;
    outline: none;
    font-size: 12px;
    text-transform: uppercase;
    margin-right: 10px;
    letter-spacing: 1px;
    font-weight: bold;
    cursor: pointer;
}

.filter-nav button.active {
    color: #333;
}
</style>
