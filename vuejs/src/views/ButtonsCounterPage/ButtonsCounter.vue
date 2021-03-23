<template>
  <div>
    <!-- <h3 v-for="(n, i) in evenNumbers" :key="`${i}-${n}`">
      {{ n }}
    </h3>
    <br>
    <span>
        asd
    </span>
    <h3 v-for="(n, i) in bigThanThree" :key="`${i}-${n}-numbers`">
      {{ n }}
    </h3>
    <br />
    <ul v-for="post in posts" :key="post.id">
      {{
        post.title
      }}
    </ul> -->
    <button v-on:click="count++">Счётчик кликов — {{ count }}</button>
    <br>
    <br>
    <button
        @click="addNumberMethod"
    >
        Add To Numbers
    </button>
     <p > Write: {{getNumbersList}}</p>
    <button
        @click="addNumber"
    >
        Add Numbers
    </button>
    <!--<h6 v-if="isLessThenSix">1</h6>
    <h6>2</h6>
    <h6 v-if="isLessThenSix">3</h6>
    <h6>4</h6>
    <h6 v-if="isLessThenSix">5</h6>
    <h6>6</h6> -->
  </div>
</template>

<script>
export default {
  name: "ButtonsCounter",
  data() {
    return {
      posts: [
        { id: 1, title: "My journey with Vue" },
        { id: 2, title: "My David with Vue" },
      ],
      number: [],
      numbers: [1, 2, 3, 4, 5],
      count: 0,
      flag: true,
    };
  },
  computed: {
    evenNumbers() {
      return this.numbers.filter((number) => number % 2 === 0);
    },
    bigThanThree() {
        return this.numbers.filter((number) => number > 3);
    },
    isLessThenSix() {
        console.log('numbers');
        return this.numbers.length < 6;
    },
    getNumbersList() {
      return this.number.join(', ');
    },
  },
  methods: {
      addNumberMethod() {
          this.numbers.push(this.count);
      },
      addNumber(){
        this.number.push(Math.random()*10)
      }
  },
};
</script>

