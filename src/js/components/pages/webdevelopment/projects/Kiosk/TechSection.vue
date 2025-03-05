<template>
    <h3 class="mb-3">Használt techológiák</h3>

    <div class="skill-icon-container">
        <skill-icon name="VUE" :icon="vueSvg"/>
        <skill-icon name="HTML" :icon="htmlSvg"/>
        <skill-icon name="CSS" :icon="cssSvg"/>
        <skill-icon name="Tailwind CSS" :icon="tailwindSvg"/>
        <skill-icon name="JavaScript" :icon="javascriptSvg"/>
        <skill-icon name="Raspberry Pi" :icon="raspberrySvg"/>
        <skill-icon name="Bash" :icon="bashSvg"/>
        <skill-icon name="Docker" :icon="dockerSvg"/>
        <skill-icon name="Figma" :icon="figmaSvg"/>
    </div>
</template>

<script>
import skillIcon from "../../../skill-icon.vue";
import vueSvg from "../../../../svg/vue.vue";
import htmlSvg from "../../../../svg/html.vue";
import javascriptSvg from "../../../../svg/js.vue";
import dockerSvg from "../../../../svg/docker.vue";
import cssSvg from "../../../../svg/css.vue";
import tailwindSvg from "../../../../svg/tailwind.vue";
import raspberrySvg from "../../../../svg/raspberry.vue";
import bashSvg from "../../../../svg/bash.vue";
import figmaSvg from "../../../../svg/figma.vue";


export default {
    components: {
        skillIcon
    },
    data() {
        return {
            vueSvg,
            htmlSvg,
            javascriptSvg,
            dockerSvg,
            cssSvg,
            tailwindSvg,
            raspberrySvg,
            bashSvg,
            figmaSvg
        }
    }
}
</script>


<style scoped>

</style>