<template>
    <div>
        <!-- <buttons-counter>
          <template slot="default"  slot-scope="slotProps">
                {{slotProps}}
          </template>
        </buttons-counter> -->
        <buttons-counter />
    </div>
</template>

<script>
import ButtonsCounter from './ButtonsCounter.vue';
export default {
  components: {
    ButtonsCounter
  },
    name: "ButtonsCounterGrup",
    data(){
        return{

        }
    }
}
</script>

