<template>
    <h3 class="mb-3">Használt techológiák</h3>

    <div class="skill-icon-container">
        <skill-icon name="VUE" :icon="vueSvg"/>
        <skill-icon name="PHP" :icon="phpSvg"/>
        <skill-icon name="HTML" :icon="htmlSvg"/>
        <skill-icon name="CSS" :icon="cssSvg"/>
        <skill-icon name="Bootstrap" :icon="bootstrapSvg"/>
        <skill-icon name="JavaScript" :icon="javascriptSvg"/>
        <skill-icon name="MySQL" :icon="sqlSvg"/>
        <skill-icon name="Docker" :icon="dockerSvg"/>
    </div>
</template>

<script>
import skillIcon from "../../../skill-icon.vue";
import phpSvg from "../../../../svg/php.vue";
import vueSvg from "../../../../svg/vue.vue";
import htmlSvg from "../../../../svg/html.vue";
import bootstrapSvg from "../../../../svg/bootstrap.vue";
import javascriptSvg from "../../../../svg/js.vue";
import sqlSvg from "../../../../svg/sql.vue";
import dockerSvg from "../../../../svg/docker.vue";
import cssSvg from "../../../../svg/css.vue";

export default {
    components: {
        skillIcon
    },
    data() {
        return {
            phpSvg,
            vueSvg,
            htmlSvg,
            bootstrapSvg,
            javascriptSvg,
            sqlSvg,
            dockerSvg,
            cssSvg,
        }
    }
}
</script>


<style scoped>

</style>