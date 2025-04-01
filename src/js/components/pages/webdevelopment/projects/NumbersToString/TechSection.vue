<template>
    <h3 class="mb-3">{{ $t('technologiesUsed') }}</h3>

    <div class="skill-icon-container">
        <skill-icon name="PHP" :icon="phpSvg"/>
        <skill-icon name="HTML" :icon="htmlSvg"/>
    </div>
</template>

<script>
import skillIcon from "../../../skill-icon.vue";
import phpSvg from "../../../../svg/php.vue";
import htmlSvg from "../../../../svg/html.vue";


export default {
    components: {
        skillIcon
    },
    data() {
        return {
            phpSvg,
            htmlSvg,
        }
    }
}
</script>


<style scoped>

</style>