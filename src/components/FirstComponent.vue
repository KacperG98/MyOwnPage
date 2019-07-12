<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'mineComponent',
  props: {
    msg: String
  }
}
</script>

<style scoped>
h1{
  transition: 0.3s;
}
h1:hover{
  transform: scale(1.5);
}
</style>
