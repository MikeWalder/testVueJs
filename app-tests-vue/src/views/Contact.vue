<script>
export default {
	name: "Contact",
	data() {
		return {
			adresse: "6 rue des Terrasses, Lyon, France",
      codePostal: "69000",
			email: "coffe@gmail.com",
			phone: "04 88 65 00 88",
      logoVue: '../assets/logo.png',
      urlContact: '../assets/lyon-carte.png',
      titleVueLogo: 'Logo de Vue JS',
      link: 'http://google.fr'
		}
	}
}
</script>


<template>
    <div class="centerImg">
      <img alt="Vue logo" src='../assets/logo.png' :title="titleVueLogo"> 
    </div>
    <br>
    <div class="about">
        <h1 id="title">Nous contacter</h1>
    </div>
    <br><br>
    <div id="contacter">
      <div id="infosContact">
        <p>Adresse : {{adresse}}</p>
        <p>Code postal : {{codePostal}}</p>
        <p>E-mail : {{email}}</p>
        <p>Tel : {{phone}}</p>
        <p><a :href="link">mon mail</a></p>
      </div>
      <div id="imgContact">
        <img v-bind:src='logoVue'>
      </div>
    </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

#contacter {
  border: 2px inset black;
  width: 50vw;
  margin: 0 auto;
}

#infosContact {
  float: left;
}

#imgContact img {
  float: right;
  width: 300px;
  padding: 4px;
}
</style>