<template>
  <div>
    <input type="text" placeholder="Some text" v-model="text" />
    <button v-if="showCreateButton" type="submit" @click="addText">
      Create
    </button>
    <ol>
      <li v-for="(value, index) in list" :key="index">
        {{ value }}
        <button @click="dellText(index)">Remove</button>
      </li>
    </ol>
    <!-- <div class="post" v-for="post in posts" :key="post.id">
      <h1>
        {{ post.title }}
      </h1>
      <p>
        {{ post.body }}
      </p>
    </div>
    <br /><br /><br /><br /> -->
  </div>
  
</template>

<script>
import { mapActions,mapState } from 'vuex';
export default {
  data() {
    return {
      list: [],
      text: null,
    };
  },
  computed: {
    showCreateButton() {
      return this.list.length < 5;
    },
    ...mapState({
      posts: (state) => state.modulePosts.posts,
    }),
  },
  methods: {
    ...mapActions([
      'getPosts'
    ]),
    addText() {
      if (this.text?.trim().length) {
        this.list.push(this.text.trim());
        this.text = "";
      }
    },
    dellText(index) {
      this.list = this.list.filter((el, i) => i != index);
    },
    increment() {
      this.$store.commit("increment");
      console.log(this.$store.state.count);
    },
  },
  async created() {
    // debugger;
    if (this.posts && !this.posts.length) {
      await this.getPosts();
    }
    console.log('Created');
  },
};
</script>
<style >
.post {
  width: 500px;
  margin: 0 auto;
  border: 2px solid #ccc;
  border-radius: 5px;
  margin-top: 10px;
}
</style>