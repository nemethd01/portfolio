<template>
    <div class="row other-skills game-other-skills">
        <div class="col-md-4 col-sm-12" v-for="(skill, index) in otherSkills" :key="index">
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
export default {
    data() {
        return {
            otherSkills: [
                {
                    title: "Cinematography",
                    text: [
                        "Rule of Thirds",
                        "Lighting",
                        "Composition",
                        "Blocking",
                        "Camera Angles",
                    ]
                },
                {
                    title: "Level Design",
                    text: [
                        "Blockout/Greybox",
                        "Psychological Triggers (Priming, Foreshadowing)",
                        "Layout",
                        "Environmental Storytelling",
                        "Player Guidance",
                    ]
                },
                {
                    title: "Game Design",
                    text: [
                        "Mechanics",
                        "Game Design Documentation (GDD)",
                        "Cognitive Biases in Design (Priming, Loss Aversion, Framing Effect)\"",
                        "Prototyping"
                    ]
                },
                {
                    title: "Storytelling",
                    text: [
                        "Narrative Design",
                        "Emotional Hooks & Player Engagement",
                        "Character Development",
                        "Worldbuilding"
                    ]
                },
                {
                    title: "Egyéb",
                    text: [
                        "Hardware-es ismeretek",
                        "Cybersecurity alapismeretek",
                        "Microsoft Office alkalmazások",
                    ]
                },
            ],
        }
    }
}
</script>

<style scoped>




</style>
