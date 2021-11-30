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
  },
  beforeCreate() {
      console.log('Le composant Home n\'est pas encore créé !')
  },
  created() {
      console.log('Le composant Home vient d\'être créé !')
  },
  beforeMount() {
      console.log('Le composant Home vient bientôt être monté dans le DOM !')
  },
  mounted() {
      console.log('Le composant Home est monté sur le DOM !')
  },
  beforeUnmount() {
      console.log('Le composant Home est sur le point d\'être retiré du DOM.')
  },
  unmounted() {
      console.log('Le composant Home a été détruit.')
  }
}
</script>