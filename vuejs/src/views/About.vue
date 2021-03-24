<template>
  <div>
    <div class="header">
      <button class="btn btn avelacnel">Add</button>
      <button class="btn btn hanel">Cancel</button>
    </div>
    <h2>{{ count }}</h2>
    <div v-if="state === 'edit'" class="add item form">
      <input
        v-model="newItem"
        type="text"
        placeholder="Add item"
        @keyup.enter="items.push(newItem)"
      />
      <button class="btn btn" @click="items.push(newItem)">Save item</button>
    </div>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.label }}
        <b v-if="item.title">
          {{ item.title }}
        </b>
      </li>
    </ul>
    <p v-if="items.length === 0">barev</p>
  </div>

  <!-- <div id="app">
        <div>{{ counter }}</div>
        <button v-on:click="increment">Increment</button>
    </div> -->
</template>

<script>
import { alertAction } from "../views/mixins/newMixinExample";
export default {
  mixins: [alertAction],
  data() {
    return {
      state: "add",
      header: "ShopingList",
      newItem: "",
      items: [
        {
          label: "Mandarin",
          id: 123,
          title: "Fruit",
        },
        {
          label: "Banana",
          id: 124,
        },
        {
          label: "Mandarin",
          id: 125,
        },
        {
          label: "Banana",
          id: 121,
        },
        {
          label: "orange",
          id: 129,
        },
        {
          label: "orange",
          id: 123,
        },
      ],
    };
  },
  methods: {
    saveItem() {
      this.items.push(this.newItem);
      this.newItem = "";
    },
    addMethod() {
      this.state = "cancel";
    },
    cancelMethod() {
      this.state = "add";
    },
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
};
</script>

