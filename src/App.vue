<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Me from './views/Me.vue'
import Nav from './views/Nav.vue'

</script>

<template>
    <div>
      <Nav />
      <RouterView />
      
    </div>
  

</template>

<style>




.dot {
  height: 680px;
  width: 680px;
  position: absolute; 
  background-color: rgb(182, 97, 12);
  border-radius: 50%;
  display:block; 
  z-index: -1;
  margin-left: 45%;


}

.dot2{}



</style>
