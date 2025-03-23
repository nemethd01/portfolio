<template>
    <div class="experience-section">
        <div class="container mt-4">
            <h2 class="mb-4">{{ $t('experienceAndStudies') }}</h2>
            <div v-for="job in translatedExperiences" :key="job.position" class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title">{{ job.position }} | <span class="fw-bold">{{ job.company }}</span></h5>
                    <h6 class="card-subtitle">{{ job.period }}</h6>
                    <p class="card-text mt-2">{{ job.description }}</p>
                </div>
            </div>

            <h2 class="mt-4 mb-4">{{ $t('education') }}</h2>
            <div v-for="study in translatedStudies" :key="study.institution" class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title">{{ study.degree }} | <span class="fw-bold">{{ study.institution }}</span></h5>
                    <h6 class="card-subtitle">{{ study.period }}</h6>
                    <p class="card-text mt-2">{{ study.description }}</p>
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
            experiences: [
                {
                    position: "softwareDeveloperZNET",
                    company: "companyZNET",
                    period: "periodZNET",
                    description: "descriptionZNET"
                },
                {
                    position: "itSalesTechnician",
                    company: "companyPCABC",
                    period: "periodPCABC",
                    description: "descriptionPCABC"
                },
            ],
            studies: [
                {
                    degree: "juniorFrontend",
                    institution: "schoolJedlik",
                    period: "periodJedlik",
                    description: "descriptionJedlik"
                },
                {
                    degree: "highSchoolDiploma",
                    institution: "schoolDeak",
                    period: "periodDeak",
                    description: "descriptionDeak"
                },
                {
                    degree: "ecdlCourse",
                    institution: "schoolDeak",
                    period: "periodECDL",
                    description: "descriptionECDL"
                }
            ]
        };
    },
    computed: {
        translatedExperiences() {
            const { t } = useI18n();
            return this.experiences.map(job => ({
                position: t(`experiences.${job.position}`),
                company: t(`experiences.${job.company}`),
                period: t(`experiences.${job.period}`),
                description: t(`experiences.${job.description}`)
            }));
        },
        translatedStudies() {
            const { t } = useI18n();
            return this.studies.map(study => ({
                degree: t(`studies.${study.degree}`),
                institution: t(`studies.${study.institution}`),
                period: t(`studies.${study.period}`),
                description: t(`studies.${study.description}`)
            }));
        }
    }
};
</script>

<style>

</style>
