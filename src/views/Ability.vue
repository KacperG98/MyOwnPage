<template>
  <div class="container jumbotron">
      <h1>Ability</h1>
      <div class="container">
        <h2>
          <code>
            My technologies: 
            <span class="text-success" v-if="showAbilitys" v-on:click="showAbilitys = !showAbilitys"><i class="fas fa-chevron-up"></i></span>
            <span class="text-success" v-if="!showAbilitys" v-on:click="showAbilitys = !showAbilitys"><i class="fas fa-chevron-down"></i></span>
          </code>
        </h2>
        <transition name="fade">
          <div v-if="showAbilitys">
            <ul class="list-group">
              <li class="list-group-item"><h5><code>HTML5 & CSS3</code></h5></li>
              <li class="list-group-item"><h5><code>PHP & Laravel</code></h5></li>
              <li class="list-group-item"><h5><code>javascript</code></h5></li>
              <li class="list-group-item"><h5><code>ES6, node.js & Vue.js</code></h5></li>
              <li class="list-group-item"><h5><code>C# .net</code></h5></li>
              <li class="list-group-item"><h5><code>NPM & GULP</code></h5></li>
              <li class="list-group-item"><h5><code>Bootstrap 4</code></h5></li>
              <li class="list-group-item"><h5><code>SQL, mySQL</code></h5></li>
            </ul>
          </div>  
        </transition>

        <!-- hobbys -->
        <h2>
          <code>
            My hobbies: 
            <span class="text-success" v-if="showHobbies" v-on:click="showHobbies = !showHobbies"><i class="fas fa-chevron-up"></i></span>
            <span class="text-success" v-if="!showHobbies" v-on:click="showHobbies = !showHobbies"><i class="fas fa-chevron-down"></i></span>
          </code>
        </h2>
        <transition name="fade">
          <div v-if="showHobbies">
            <ul class="list-group">
              <li class="list-group-item"><h5><code>Electronics ang IoT</code></h5></li>
              <li class="list-group-item"><h5><code>Psyhology</code></h5></li>
              <li class="list-group-item"><h5><code>Ilusion & Magicians</code></h5></li>
              <li class="list-group-item"><h5><code>Computer Games</code></h5></li>
              <li class="list-group-item"><h5><code>Plaing on the music instrumencs</code></h5></li>
              <li class="list-group-item"><h5><code>Programing</code></h5></li>
              <li class="list-group-item"><h5><code>Creating Games</code></h5></li>
              <li class="list-group-item"><h5><code>New Technologies</code></h5></li>
            </ul>
          </div>  
        </transition>



        <!-- END CONTAINER -->
      </div>
  </div>
</template>

<script>
export default {
  name: 'Ability',
  data() {
    return {
      showAbilitys: false,
      showHobbies: false
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.container {
  min-height: 80vh;
}
</style>


