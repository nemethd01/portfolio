<template>
    <div class="row other-skills game-other-skills">
        <div class="col-md-4 col-sm-12" v-for="(skill, index) in translatedSkills" :key="index">
            <div class="card skill-card mb-3">
                <div class="card-body">
                    <h5 class="card-title">{{ skill.title }}</h5>
                    <ul class="card-text">
                        <li v-for="(item, i) in skill.text" :key="i">{{ item }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
    data() {
        return {
            gameOtherSkills: [
                {
                    title: "cinematography",
                    text: [
                        "ruleOfThirds",
                        "lighting",
                        "composition",
                        "blocking",
                        "cameraAngles",
                    ]
                },
                {
                    title: "levelDesign",
                    text: [
                        "blockout",
                        "psychologicalTriggers",
                        "layout",
                        "environmentalStorytelling",
                        "playerGuidance",
                    ]
                },
                {
                    title: "gameDesign",
                    text: [
                        "mechanics",
                        "gameDesignDocument",
                        "cognitiveBiases",
                        "prototyping"
                    ]
                },
                {
                    title: "storytelling",
                    text: [
                        "narrativeDesign",
                        "emotionalHooksAndPlayerEngagement",
                        "characterDevelopment",
                        "worldBuilding"
                    ]
                },
                {
                    title: "other",
                    text: [
                        "hardwareKnowledge",
                        "cybersecurityKnowledge",
                        "microsoftOffice",
                    ]
                },
            ],
        }
    },
    computed: {
        translatedSkills() {
            const { t } = useI18n();
            return this.gameOtherSkills.map(skill => ({
                title: t(`gameOtherSkills.${skill.title}`),
                text: skill.text.map(item => t(`gameOtherSkills.${item}`))
            }));
        }
    }
}
</script>

<style scoped>




</style>
