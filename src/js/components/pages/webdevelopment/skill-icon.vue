<template>
    <div class="skill-icon">
        <component :is="icon" class="icon" />
        <div class="skill-info-card">
            <h3>{{ name }}</h3>
            <p>{{ level }}</p>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        icon: {
            type: Object,
            default: {}
        },
        name: {
            type: String,
            default: ""
        },
        level: {
            type: String,
            default: ""
        },
    },
};
</script>

<style scoped>

</style>
