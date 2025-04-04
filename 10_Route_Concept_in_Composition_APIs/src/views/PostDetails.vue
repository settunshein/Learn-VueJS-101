<template>
  <!-- <h3>Post Details {{id}}</h3> -->
  <h2><u>Post Details</u></h2>

  <div v-if="post">
    <h3>{{post.title}}</h3>
    <p>{{post.body}}</p>
  </div>

  <div v-else>
    <Spinner></Spinner>
  </div>
</template>

<script>
import Spinner from '../components/Spinner'
import getPost from '../composables/getPost'
import { useRoute } from 'vue-router'

export default {
  components: { Spinner },
  props: ['id'],

  setup(props) {
    let route = useRoute();
    console.log(route.params.id);

    // let {post, error, load} = getPost(props.id);
    let {post, error, load} = getPost(route.params.id);
    load();

    return {post, error}
  }
}
</script>
