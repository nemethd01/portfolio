<template>
    <div class="home-page" :style="{ minHeight: `calc(100vh - ${navbarHeight}px)` }">
        <div class="container-fluid">
            <div class="row align-items-center justify-content-center">
                <div class="col-md-7 col-sm-8 d-flex flex-column">
                    <h1 class="mb-3">{{ $t('name') }}</h1>
                    <p>
                        {{ $t('introduction') }}
                    </p>
                </div>
                <div class="col-md-3 col-sm-4 d-flex justify-content-center">
                    <img :src="profile" class="profile-pic" alt="Profile">
                </div>
            </div>

            <div class="mt-5 d-flex justify-content-center">
                <router-link to="/work/web-development" class="btn mx-3 custom-button">{{ $t('webDevelopment') }}
                </router-link>
                <router-link to="/work/game-development" class="btn mx-3 custom-button">{{ $t('gameDevelopment') }}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import profile from "/media/imgs/pf.jpg";

export default {
    components: {},
    data() {
        return {
            profile,
            navbarHeight: 56,
        }
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
}
</script>

<style scoped>

</style>