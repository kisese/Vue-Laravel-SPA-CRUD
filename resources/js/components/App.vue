<template>
    <div>
        <h1>Vue Router Demo App</h1>

        <p>
            <router-link :to="{name: 'createCompany'}" class="btn btn-success">Create new company</router-link>
        </p>

        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "App"
    }
</script>

<style scoped>

</style>
