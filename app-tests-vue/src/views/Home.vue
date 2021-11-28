<template>
  <div class="home">
    <div class="centerImg">
      <img alt="Vue logo" src="../assets/logo.png" title="Logo Vue JS"> 
    </div>
    <br><br>
    <HelloWorld msg="Bienvenue dans notre application Vue JS !"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>