<template>
    <div>
        <project-card
            v-for="project in translatedProjects"
            :navigateTo="project.navigateTo"
            :projectImage="project.image"
            :projectTitle="project.title"
            :projectTechnologies="project.technologies"
            :routerClasses="['web-project-card']"
            :imgClasses="['web-card-img']"
            :cardBodyClasses="['web-card-body']"
            :card-text-classes="['web-card-text']"
        />
    </div>
    <div class="text-center mt-5">
        <a href="https://github.com/nemethd01" target="_blank" class="btn custom-button">{{ $t('otherProjects') }}</a>
    </div>
</template>

<script>
import projectCard from "../ProjectCard.vue";
import webProjectsData from "../../../data/web-projects.js";

export default {
    components: { projectCard },
    computed: {
        translatedProjects() {
            return this.$i18n
                ? this.projects.map(project => ({
                    ...project,
                    title: this.$t(project.title)
                }))
                : this.projects;
        }
    },
    data() {
        return {
            projects: webProjectsData,
        };
    }
};
</script>
