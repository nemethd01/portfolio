<template>
    <div class="main-theme">
        <navbar/>
        <router-view></router-view>
        <footer-component/>
    </div>
</template>

<script>
import Navbar from "./js/components/Navbar.vue";
import FooterComponent from "./js/components/FooterComponent.vue";

export default {
    components: {Navbar, FooterComponent},
    data() {
        return {
        }
    },
    methods: {},

}
</script>

<style scoped>

</style>