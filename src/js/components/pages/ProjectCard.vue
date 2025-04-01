<template>
    <div class="container w-75 mb-4">
        <router-link :to="navigateTo" :class="[routerClasses]">
        <div class="card game-card d-flex flex-row align-items-center mb-3">
            <img :src="projectImage" :class="[imgClasses]" alt="Project Image">
            <div :class="[cardBodyClasses]">
                <h5 class="card-title">{{ projectTitle }}</h5>
                <p :class="['card-text', 'fst-italic', cardTextClasses]">{{ projectTechnologies }}</p>
            </div>
        </div>
        </router-link>
    </div>
</template>

<script>
export default {
    props: {
        projectTitle: {
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
        },
        cardTextClasses: {
            type: Array,
            default: []
        }
    }
}
</script>


<style scoped>



</style>