<script>
export default ({
    name: 'Documentation',
    data() {
        return {
            documents: [
                {
                    name: 'Worldline Github',
                    link: 'https://worldline.github.io/vuejs-training/fr/',
                    language: 'Anglais',
                    available: true
                },
                {
                    name: 'Développez.com',
                    link: 'https://maurice-chavelli.developpez.com/javascript/vue-js-plus-loin/',
                    language: 'Français',
                    available: true
                },
                {
                    name: 'Udemy',
                    link: 'https://medium.com/@thibault60000/vue-js-pour-les-d%C3%A9butants-37a83aaea9c4',
                    language: 'Français',
                    available: false
                }
            ]
        }
    },
    methods: {
        changeColor() {
            this.available = true
        }
    }
})
</script>





<template>
    <div class="centerImg">
      <img alt="Vue logo" src="../assets/logo.png" title="Logo Vue JS"> 
    </div>
    <br><br>
    <h1>Documentation</h1>

    <div id="docLinks">
        <br><br>
        <ul class="list-group" v-for="item in documents" :key="item.name">
            <li class="list-group-item"
            :class="item.available ? 'list-group-item-success' : 'list-group-item-danger'">
                <span class="font-weight-bold" @click="changeColor()">{{item.name}}</span> - 
                {{item.language}} - <a v-if="item.available" :href="item.link" target="_blank">{{item.name}}</a>
            </li>
        </ul>
    </div>
</template>

<style>
    #docLinks {
        color: red;
        font-weight: bold;
        padding-left: 20px;
        width: 30vw;
        margin: 0 auto;
    }
</style>
