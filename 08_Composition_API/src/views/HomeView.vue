<template>
    <div class="home">
        <div v-if="showPosts">
            <PostList :posts="posts"></PostList>
        </div>

        <button @click="showPosts=!showPosts">Toggle Post List</button>
    </div>
</template>



<script>
import PostList from '../components/PostList'
import { ref } from 'vue';

export default {
    components: { PostList },

    setup() {
        let body  = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit asperiores nam doloribus sint nisi facere pariatur magni dolorum, quis deserunt. Illum commodi, asperiores provident unde molestias, doloremque recusandae cupiditate laboriosam sequi voluptatem ut dolores necessitatibus modi temporibus odio officiis ipsum error ullam a labore aliquam. Expedita quae facilis velit facere."
        let showPosts = ref(true);

        let posts = ref([
            { id: 1, title: 'Post Title 1', body: body },
            { id: 2, title: 'Post Title 2', body: body },
            { id: 3, title: 'Post Title 3', body: body },
        ]);

        return {posts, showPosts}
    }
}
</script>
