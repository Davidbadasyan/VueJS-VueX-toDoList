<template>
  <div>
    <p>
        IMYA: {{message}}
    </p>
    <input
      v-model="message"
      placeholder="Napishi imya"
    >
    <br>
    <input
      type="checkbox"
      v-model="NamePople"
      id="David"
      value="David"
    >
    <label
      for="David"
    >
      David
    </label>
    <input
      type="checkbox"
      v-model="NamePople"
      id="Armen"
      value="Armen"
    >
     <label
      for="Armen"
    >
      Armen
    </label>
    <input
      type="checkbox"
      v-model="NamePople"
      id="Karen"
      value="Karen"
    >
     <label
      for="Karen"
    >
      Karen
    </label>
    <p>
      Write Name:
      {{namelist}}
    </p>
    <p>
      {{property}}
    </p>
    <p>
      {{propertyComputed}}
    </p>
  <buttons-counter-grup></buttons-counter-grup>
  </div>

</template>

<script>
import ButtonsCounterGrup from './ButtonsCounterPage/ButtonsCounterGrup.vue';
export default {
    components: {
      ButtonsCounterGrup
      },
    data(){
      return{
        button: '',
        count: 0,
        message: "",
        NamePople: [],
        property: 'I will go to sleep in  hours '
      }
    },
    computed:{
      namelist() {
        return  this.NamePople.join(', ');
      },
      //propertyComputed inch dera tanum stex
      propertyComputed(){
        console.log("I change ");
        return this.property;
      }
    },
    created(){
      this.property = "isn't it";
      console.log("Good night");
    }
}

</script>

