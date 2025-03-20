<template>
    <div class="not-found-page" :style="{ minHeight: `calc(100vh - ${navbarHeight}px)` }">
        <div class="not-found-text">
            <h1 class="mb-0">404</h1>
            <p>{{ $t('notFoundMsg') }}</p>
        </div>
        <div class="mt-3 d-flex justify-content-center">
            <router-link
                to="/"
                class="btn mx-3 custom-button"
            >
                {{ $t('backToHome') }}
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navbarHeight: 56
        };
    },
    mounted() {
        this.updateNavbarHeight();
        window.addEventListener("resize", this.updateNavbarHeight);
    },
    beforeUnmount() {
        window.removeEventListener("resize", this.updateNavbarHeight);
    },
    methods: {
        updateNavbarHeight() {
            const navbar = document.querySelector(".navbar");
            this.navbarHeight = navbar ? navbar.offsetHeight : 56;
        }
    }
};
</script>

<style scoped>

</style>
