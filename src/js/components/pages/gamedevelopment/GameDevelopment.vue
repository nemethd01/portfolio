<template>
    <div class="game-development-page">
        <div class="skill-wrapper">
            <div class="container my-5">
                <div class="row">
                    <h1 class="text-center mb-5">{{ $t('gameDevelopment') }}</h1>
                    <skill-section/>
                </div>
            </div>
        </div>
        <div class="projects-overflow">
            <project-header
                :classes="['game-projects-header']"
                :projectTitle="$t('projectsHeaderTitle')"
            />
        </div>
        <div class="game-project-wrapper">
            <div class="container my-5">
                <project-section/>
            </div>
        </div>
    </div>
</template>

<script>
import skillSection from "./SkillSection.vue";
import projectHeader from "../../project-header.vue";
import projectSection from "./ProjectSection.vue";

export default {
    components: {
        skillSection,
        projectHeader,
        projectSection,
    },
    data() {
        return {}
    }
}
</script>

<style scoped>

</style>