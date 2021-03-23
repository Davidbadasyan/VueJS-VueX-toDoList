<template>
  <div>
    <!-- <posts-form></posts-form> -->
    <!-- <h2>Counter</h2>
    <button v-on:click="count++">Счётчик кликов — {{ count }}</button> -->
    <div v-for="(post, index) in posts" :key="index">
      <h4>{{ post.title }}</h4>
    </div>
    <button @click="addNewPost">Add</button>
    <br /><br />
    <h3>All ToDos</h3>
    <div v-for="(todo, index) in todos" :key="`todo-${index}`">
      <h4>{{ todo.text }}</h4>
    </div>
    <br /><br />
    <h3>Done ToDos</h3>
    <div v-for="(todo, index) in doneTodos" :key="`done-todo-${index}`">
      <h4>{{ todo.text }}</h4>
    </div>
  </div>
</template>

<script>
// import FormSecond from '../views/FormSecond'
import { toUpperString } from "../helpers/helper";
import { mapActions, mapState, mapGetters } from "vuex";
// import PostsForm from '../store/modules/postsForm';

export default {
  /* eslint-disable */
  name: "Test",
  data() {
    return {
      count: 0,
    };
  },
  // components: {FormSecond},
  computed: {
    ...mapGetters(["doneTodos"]),
    ...mapState({
      posts: (state) => state.modulePosts.posts,
      todos: (state) => state.modulePosts.todos,
    }),
  },
  methods: {
    ...mapActions(["getPosts", "addPost"]),
    addNewPost() {
      const post = {
        title: "Vue js developer Badasyan",
      };
      this.addPost(post);
      console.log("Hello friend Sahak");
    },
  },
  beforeCreate() {
    // debugger;
    console.log("before create");
  },
  async created() {
    // debugger;
    if (this.posts && !this.posts.length) {
      await this.getPosts();
    }

    console.log("Created");
  },
  beforeMount() {
    // debugger;
    console.log("before mount");
  },
  mounted() {
    // debugger;
    console.log("mounted");
  },
  async mounted() {
    // asked to Sahak
    console.log(toUpperString("david"));
  },
  beforeUpdate() {
    // debugger;
    console.log("before update", "multiple time");
  },
  updated() {
    // debugger;
    console.log("updated", "multiple time");
  },
  beforeDestroy() {
    // debugger;
    console.log("before destroyed");
  },
  destroyed() {
    // debugger;
    console.log("destroyed");
  },
};
</script>