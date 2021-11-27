<template>
	<a v-bind:href="url" v-bind:title="titrer">{{text}}</a> 
</template>

<script>
export default {
	name: 'HomeApp',
    props: ['url', 'text', 'titrer']
}
</script>

<style lang="css">
	a {
        font-size: 22px;
		text-decoration: none;
        color: orange;
	}
    a:hover {
        transition: 0.8s;
        color: darkblue;
    }
</style>
