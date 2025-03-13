<template>
    <div class="row other-skills web-other-skills">
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
                    title: "Vue",
                    text: [
                        "Router",
                        "Option API",
                        "Props",
                        "Regex",
                        "Components",
                        "Slots",
                        "Provide - Inject",
                        "Input validation",
                    ]
                },
                {
                    title: "PHP/Laravel",
                    text: [
                        "Blade",
                        "MVC (Model-View-Controller)",
                        "OOP",
                        "PDO",
                        "Single Page Applications (SPA)",
                        "Autoload",
                        "Validation",
                        "Eloquent"
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
