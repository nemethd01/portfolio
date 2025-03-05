<template>
    <div>
        <project-card
            v-for="project in projects"
            :navigateTo="project.navigateTo"
            :projectImage="project.image"
            :projectName="project.name"
            :projectTechnologies="project.technologies"
            :routerClasses="['web-project-card']"
            :imgClasses="['web-card-img']"
            :cardBodyClasses="['web-card-body']"
        />
    </div>
</template>
<script>
import projectCard from "../ProjectCard.vue";
import webProjectsData from "../../../data/web-projects.js";


export default {
    components: {projectCard},
    data() {
        return {
            projects: webProjectsData,
        }
    }
}
</script>


<style scoped>

</style>