<template>
  <div id="nav">
    <router-link to="/">Accueil</router-link> |
    <router-link to="/about">A propos</router-link> |
    <router-link :to="{name: 'Product', params: {name: 'Skate'}}">Produits</router-link> |
    <router-link to="/doc">Documentation</router-link> |
    <router-link to="/contact">Contact</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

h1 {
  text-align: center;
}

.centerImg {
    text-align: center;
  }


#nav {
  padding: 30px;
  text-align: center;
  background-image: linear-gradient(to bottom, green 0%, lightgreen 100%);
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: blue;
}
</style>
