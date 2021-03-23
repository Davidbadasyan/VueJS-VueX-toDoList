<template>
  <div class="hello">
    <h1>HELLO WORLD</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ id }}</h1>
    <slot> No Slot data </slot>
    <!-- <p>{{id}}</p> -->
    <input type="text" v-model.lazy="form.login" />
    <input type="password" v-model.lazy="form.password" />
    <br />
    <button @click="saveAction">Save</button>
    <br />
    <slot name="IMG" some-text="Hello js world"> no img </slot>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  // props: [
  //   "msg",
  //   "id"
  // ],
  props: {
    msg: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      text: "Default",
      form: {
        login: "David",
        password: "password",
      },
    };
  },
  methods: {
    saveAction() {
      console.log(this.form);
    },
  },
};
</script>


