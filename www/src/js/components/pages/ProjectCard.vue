<template>
    <div class="container w-75 mb-4">
        <router-link :to="navigateTo" :class="[routerClasses]">
        <div class="card web-card d-flex flex-row align-items-center mb-3">
            <img :src="projectImage" :class="[imgClasses]" alt="Project Image">
            <div :class="[cardBodyClasses]">
                <h5 class="card-title">{{ projectName }}</h5>
                <p class="card-text fst-italic">{{ projectTechnologies }}</p>
            </div>
        </div>
        </router-link>
    </div>
</template>

<script>
export default {
    props: {
        projectName: {
            type: String,
            default: "Example"
        },
        navigateTo: {
            type: String,
            default: "/"
        },
        projectImage: {
            type: String,
        },
        projectTechnologies: {
            type: String,
            default: "Technologies"
        },
        routerClasses: {
            type: Array,
            default: []
        },
        imgClasses: {
            type: Array,
            default: []
        },
        cardBodyClasses: {
            type: Array,
            default: []
        }
    }
}
</script>


<style scoped>



</style>