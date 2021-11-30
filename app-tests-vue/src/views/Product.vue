<script>
export default ({
    name: 'Product',
    props: ['name'],
    data() {
        return {
            isProductAvailable: false,
            titleLogo: 'Logo de Vue JS',
            success: true,
            nombreProduits: 0,
            colorPanier: true,
            produits: [
                {
                    name: 'Effaclar Duo +',
                    volume: '50mL',
                    marque: 'La Roche Posay',
                    prix: 13.5,
                    description: 'Apaisant anti démangeaisons',
                    img: require('../assets/effaclar.png'),
                    dispo: true,
                    add: 1
                },
                {
                    name: 'XeraCalm',
                    volume: '200mL',
                    marque: 'Avène',
                    prix: 13,
                    description: 'Calme l\'eczéma rapidement',
                    img: require('../assets/xeracalm.jpg'),
                    dispo: true,
                    add: 1
                },
                {
                    name: 'Iso Urea 5+',
                    volume: '200mL',
                    marque: 'La Roche Posay',
                    prix: 13.5,
                    description: 'Apaisant anti démangeaisons',
                    img: require('../assets/isourea.png'),
                    dispo: false,
                    add: 1
                },
                {
                    name: 'Effaclar Serum',
                    volume: '30mL',
                    marque: 'La Roche Posay',
                    prix: 19.5,
                    description: 'Sérum anti irritations',
                    img: require('../assets/effaclarserum.png'),
                    dispo: true,
                    add: 1
                }
            ]
        }
    },
    methods: {
        closingElem() {
            this.isProductAvailable = true
        },
        openingElem() {
            this.isProductAvailable = false
        },
        ajouterPanier(ajoutItem) {
            this.nombreProduits += ajoutItem
            console.log(this.nombreProduits);
        }
    },
    beforeCreate() {
        console.log('Le composant Produit n\'est pas encore créé !')
    },
    created() {
        console.log('Le composant Produit vient d\'être créé !')
    },
    beforeMount() {
        console.log('Le composant Produit vient bientôt être monté dans le DOM !')
    },
    mounted() {
        console.log('Le composant Produit est monté sur le DOM !')
    },
    beforeUpdate() {
        console.log('La mise à jour du composant Produit va être exécutée')
        this.colorPanier = false
        console.log(this.colorPanier)
    },
    updated() {
        console.log('Le composant Produit vient d\'être réactualisé !')
    },
    beforeUnmount() {
        console.log('Le composant Produit est sur le point d\'être retiré du DOM.')
    },
    unmounted() {
        console.log('Le composant Produit a été détruit.')
    }
})
</script>

<template>
    <div class="centerImg">
      <img alt="Vue logo" src="../assets/logo.png" :title="titleLogo"> 
    </div>
    <br><br>
    <h1>Produits</h1>
    
    <div class="text-center">
        <button id='btn'>{{name}}</button>
        <p v-if="isProductAvailable" v-on:click="openingElem()">Produit disponible</p>
        <p v-else v-on:click="closingElem()">Voici un spoiler de notre série</p>
        <input type="checkbox" v-model="colorPanier">
    </div>
    
    <br>

    <div class="text-center">
        <button type="button" class="btn btn-lg h3" :class="colorPanier ? 'bg-info' : 'bg-success'">
            Panier  &nbsp;<span class="badge badge-light">{{nombreProduits}}</span>
        </button>
    </div>

    <br>

    <div class="container-fluid">
        <div class="row">
            <div class="col-3 shadow-lg" v-for="item in produits" :key="item.name">
                <div class="card border" :class="item.dispo ? 'border-info' : 'border-danger'">
                    <img class="card-img-top border bg-secondary" :src="item.img" alt="Card image cap">
                    <div class="card-body text-center">
                        <h5 class="card-title">{{item.name}}</h5>
                        <p class="card-text">{{item.description}}</p>
                        <p class="font-weight-bold h3" :class="item.dispo ? 'text-success' : 'text-danger'">{{item.prix}} €</p>
                        <hr>
                        <div class="btn" :class="item.dispo ? 'btn-success' : ''" @click="ajouterPanier(item.add)">
                            <span v-if="item.dispo">Ajouter</span>
                            <span v-else>Indisponible</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
.card-img-top {
    height: 450px;
}
</style>