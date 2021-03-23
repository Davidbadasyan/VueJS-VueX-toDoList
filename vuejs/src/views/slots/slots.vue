<template>
  <div>
    <h3>
        Объявление
    </h3>
    <slot>
        Здесь могла бы ваша реклама
    </slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "I am student"
    }
  }

};
</script>