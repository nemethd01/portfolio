<template>
    <div>
        <project-card
            v-for="project in projects"
            :navigateTo="project.navigateTo"
            :projectImage="project.image"
            :projectTitle="project.title"
            :projectTechnologies="project.technologies"
            :routerClasses="['game-project-card']"
            :imgClasses="['game-card-img']"
            :cardBodyClasses="['game-card-body']"
            :cardTextClasses="['game-card-text']"
        />
    </div>
</template>
<script>
import projectCard from "../ProjectCard.vue";
import gameProjectsData from "../../../data/game-projects.js";


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
            projects: gameProjectsData,
        };
    }
};
</script>


<style scoped>

</style>