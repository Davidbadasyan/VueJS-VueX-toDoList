<template>
  <form @submit.prevent="submit">
    <input type="text" v-model="title" />
    <br />
    <br />
    <input type="text" v-model="body" />
    <br />
    <br />
    <button type="sumbit">Creat Post</button>
    <br /><br /><br />
    <div v-for="(item, index) in nameAndAddresses" :key="index">
      <span>{{ item.title }} </span>
      <br />
      <span>{{ item.body }}</span>
    </div>
  </form>
</template>

<script>
import { CREATE_POST } from "../store/mutation-types";
import { mapMutations, mapState } from "vuex";

export default {
  data() {
    return {
      title: "",
      body: "",
    };
  },
  methods: {
    ...mapMutations([CREATE_POST]),
    submit() {
      // eslint-disable-next-line
      // debugger;
      this[CREATE_POST]({
        title: this.title,
        body: this.body,
      });
    },
  },
  computed: {
    ...mapState({
      nameAndAddresses: (state) => state.modulePosts.nameAndAddresses,
    }),
  },
};
</script>