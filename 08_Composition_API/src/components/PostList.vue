<template>
    <h1>Post List</h1>
    <div v-for="post in posts" :key="post.id">
        <SinglePost :post="post"></SinglePost>
    </div>
</template>



<script>
import { onMounted, onUnmounted, onUpdated } from 'vue'
import SinglePost from './SinglePost'

export default {
    components: { SinglePost },
    props: ['posts'],

    setup() {
        onMounted(() => console.log('Component Mounted!'));
        onUnmounted(() => console.log('Component Unmounted!'));
        onUpdated(() => console.log('Data Updated!'));
    }
}
</script>



<style>

</style>
