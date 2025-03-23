<template>
    <div class="row other-skills web-other-skills">
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
            otherSkills: [
                {
                    title: "vue",
                    text: [
                        "router",
                        "optionAPI",
                        "props",
                        "regex",
                        "components",
                        "slots",
                        "provideInject",
                        "inputValidation",
                    ]
                },
                {
                    title: "phpLaravel",
                    text: [
                        "blade",
                        "mvc",
                        "oop",
                        "pdo",
                        "spa",
                        "autoload",
                        "validation",
                        "eloquent",
                        "seeders",
                    ]
                },
                {
                    title: "other",
                    text: [
                        "hardware",
                        "cybersecurity",
                        "microsoftOffice",
                    ]
                },
            ],
        };
    },
    computed: {
        translatedSkills() {
            const { t } = useI18n();
            return this.otherSkills.map(skill => ({
                title: t(`otherSkills.${skill.title}`),
                text: skill.text.map(item => t(`otherSkills.${item}`))
            }));
        }
    }
};
</script>
