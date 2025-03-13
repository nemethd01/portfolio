<template>
    <div>
        <project-card
            v-for="project in projects"
            :navigateTo="project.navigateTo"
            :projectImage="project.image"
            :projectName="project.name"
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
    components: {projectCard},
    data() {
        return {
            projects: gameProjectsData,
        }
    }
}
</script>


<style scoped>

</style>