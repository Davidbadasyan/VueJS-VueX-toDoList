<template>
  <!-- <v-app>
    <v-toolbar >
        <v-btn>
            Button 1
        </v-btn>
    </v-toolbar>
</v-app> -->

  <div>
    <ul v-for="(set, index) in sets" :key="index">
      <li v-for="n in even(set)" :key="n">
        {{ n }}
      </li>
    </ul>
    <!-- <span
        v-for="n in 19"
        :key="narek">
        {{n}}
    </span> -->
    <input v-model="text" type="text" />
    <!-- <button @click="alertAction(text)">Alert text</button> -->
    <br />
    <br />
    <input type="number" v-model="obj.b.c" />
  </div>
</template>

<script>
import { alertAction } from "./mixins/newMixinExample";

export default {
  name: "David",
  mixins: [alertAction],
  data() {
    return {
      sets: [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
      ],
      text: "Hi",
      obj: {
        a: 15,
        b: {
          c: 45,
          d: {
            e: 15,
          },
        },
      },
    };
  },
  watch: {
    text: {
      handler(newValue, oldValue) {
        console.log(newValue, oldValue);
        // this.alertAction(newValue);
      },
      // immediate: true,
    },
    "obj.b.c": {
      // obj: {
      handler(newVal) {
        console.log(this.obj.b.c, "from obj");
        console.log(newVal, "from watch");
      },
      // deep: true,
    },
  },
  methods: {
    even: function (numbers) {
      return numbers.filter(function (number) {
        return number % 2 === 0;
      });
    },
    // alertAction(text) {
    //   alert(text);
    // },
  },
  // change reference of object in the second meeting related to Watchers
};
</script>
