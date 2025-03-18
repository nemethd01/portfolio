<template>
    <div class="social-media-icon">
        <a :href="socialLink" target="_blank">
            <component :is="icon" class="icon" />
        </a>
    </div>
</template>

<script>

export default {
    props: {
        icon: {
            type: Object,
            default: {}
        },
        socialLink: {
            type: Object,
            default: {}
        }
    },
};
</script>

<style scoped>

</style>
