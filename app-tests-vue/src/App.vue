<template>
	<div id="app">
		<HeadMainTitle stylisation="bg-success text-center p-5" mainTitle="Application Vue" />

    <nav class="navbar navbar-expand-lg navbar-light bg-info">
      <HomeApp class="navbar-brand" url="#" text="Accueil" titrer="Notre page d'accueil" />
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <HomeApp class="nav-link" url="#" text="Home" titrer="Accueil" />
          </li>
          <li class="nav-item">
            <HomeApp class="nav-link" url="#" text="Features" titrer="Features" />
          </li>
          <li class="nav-item">
            <HomeApp class="nav-link" url="#" text="Pricing" titrer="Nos tarifs en cours" />
          </li>
          <li class="nav-item dropdown">
            <HomeApp class="nav-link dropdown-toggle" 
            url="#" id="navbarDropdownMenuLink" data-toggle="dropdown" 
            aria-haspopup="true" aria-expanded="false" text="Dropdown link" 
            titrer="Menu déroulant" />
            
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <HomeApp class="dropdown-item" url="#" text="Action" titrer="Action" />
              <HomeApp class="dropdown-item" url="#" text="Another action" titrer="Un autre sous titre" />
              <HomeApp class="dropdown-item" url="#" text="Something else here" />
            </div>
          </li>
        </ul>
      </div>
    </nav>  
  
  </div>
</template>

<script>
import HomeApp from './components/HomeApp.vue'
import HeadMainTitle from './components/HeadMainTitle.vue'

export default {
	name: 'App',
	components: {
		HomeApp,
    HeadMainTitle
	}
}
</script>

