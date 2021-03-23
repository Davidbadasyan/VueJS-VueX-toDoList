<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/david">David</router-link> |
      <router-link to="/Names">Names</router-link> |
      <router-link to="/asynchronous">Asynchronous</router-link> |
      <router-link to="/test">Test</router-link> |
      <router-link to="/Form">Form</router-link> |
      <router-link to="/FormSecond">FormSecond</router-link> |
      <router-link to="/inputAddDelete">inputAddDelete</router-link> |
      <router-link to="/todoList">Todo</router-link>

      <!-- <br />
      <br />
      <slots />
      <slots>
        <div>
          <p>Открыт набор на бесплатные курсы Udacity.</p>
          <p>Заявки принимаются до 16 октября</p>
        </div>
      </slots>
      <Button>
        <span @click="test('Hello Dave')" class="text-one">
          {{ label }}
        </span>
      </Button> -->
    </div>
    <router-view />
  </div>
</template>
<script>
// import Button from "./views/ButtonsCounterPage/Button.vue";
// import Slots from "./views/slots/slots.vue";

export default {
  data() {
    return {
      label: "Buy Now",
    };
  },
  components: {
    // Button,
    // Slots,
  },
  // Sahakin harcnel xi chi computed i mej toghum grem
  methods: {
    test(val) {
      console.log(val);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
