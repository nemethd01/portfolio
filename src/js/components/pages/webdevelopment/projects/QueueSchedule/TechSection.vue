<template>
    <h3 class="mb-3">{{ $t('technologiesUsed') }}</h3>

    <div class="skill-icon-container">
        <skill-icon name="HTML" :icon="htmlSvg"/>
        <skill-icon name="JavaScript" :icon="jsSvg"/>
        <skill-icon name="CSS" :icon="cssSvg"/>
        <skill-icon name="Figma" :icon="figmaSvg"/>
    </div>
</template>

<script>
import skillIcon from "../../../skill-icon.vue";
import htmlSvg from "../../../../svg/html.vue";
import cssSvg from "../../../../svg/css.vue";
import jsSvg from "../../../../svg/js.vue";
import figmaSvg from "../../../../svg/figma.vue";


export default {
    components: {
        skillIcon
    },
    data() {
        return {
            htmlSvg,
            cssSvg,
            jsSvg,
            figmaSvg
        }
    }
}
</script>


<style scoped>

</style>