<template>
    <div :class="[classes]">
        <div class="scrolling-text">
            <span v-for="i in 10" :key="i">{{ projectTitle }} &nbsp; // &nbsp;</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    props: {
        classes: {
            type: Array,
            default: []
        },
        projectTitle: {
            type: String,
            default: 'PROJECTS'
        }
    }
}
</script>


<style scoped>

</style>