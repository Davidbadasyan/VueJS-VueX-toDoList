<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <hello-world
      id="Hello Id"
      msg="Welcome to Your Vue.js App"
      v-on:save="handleSave"
    >
      <template>
        <div :id="id">
           <span>read docs</span>
        </div>
      </template>
      <!-- <template #IMG> -->
      <template v-slot:IMG="{ someText }">
        <img alt="Vue logo" src="../assets/logo.png" />
        {{ someText }}
      </template>
    </hello-world>
    <span v-show="false"> AAAA </span>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      id: "Helllo ID",
    };
  },
  methods: {
    handleSave(data) {
      console.log(data, "Arrived");
    },
  },
};
</script>
