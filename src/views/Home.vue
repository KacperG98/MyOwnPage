<template>
  <div class="text-light container">
    <mineComponent msg="Welcome in My WebSite"/>
    <h1>I'm Kacper</h1>
    <div id="content" class="jumbotron text-dark">
      <p>I created this page with only frontend.</p>
      <p>
        Let me show you the power and magic of the Javascript <br> 
        and <br> 
        other client sode technologies
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home'
}
</script>

<style scoped>
#content{
  background: rgba(255, 255, 255, 0.7);
  margin: 0% 5% 0% 5%;
}
.jumbotron {
  min-height: 80vh;
}
</style>

