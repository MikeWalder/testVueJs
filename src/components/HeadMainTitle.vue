<template>
    <h1 v-bind:class="stylisation">{{mainTitle}}</h1>
</template>

<script>
export default {
    name: 'HeadMainTitle',
    props: ['mainTitle', 'stylisation']
}
</script>
