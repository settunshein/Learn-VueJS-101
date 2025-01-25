<template>
    <h2 style="margin-bottom: 42px;">
        <font color="crimson">JOB DETAILS PAGE / {{$route.params.id}}</font>
    </h2>

    <h1>{{id}}</h1>
</template>



<script>
export default {
    props: [
        'id'
    ],

    /*
    data() {
        return {
            id: this.$route.params.id
        }
    }
    */
}
</script>



<style>

</style>
