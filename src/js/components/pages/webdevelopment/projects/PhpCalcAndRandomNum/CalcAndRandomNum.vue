<template>
    <div class="web-projects-page">
        <div class="header">
            <h1>{{ $t('webProjects.calcAndRandomNumberTitle') }}</h1>
            <p>{{ $t('WPCalcAndRandomNumHeading') }}</p>
            <a href="https://github.com/nemethd01/CalcAndRandomNumberGenerator.git" target="_blank" class="btn custom-button">{{ $t('viewOnGitHub') }}</a>
        </div>
        <div class="project-content-wrapper">
            <div class="container">
                <div class="container py-5">
                    <h3 class="mb-3">{{ $t('projectFeatures') }}</h3>
                    <div class="row align-items-center">
                        <div class="col-12 col-md-7">
                            <div class="text-center">
                                <a :href="CalcAndRandomNum_main" class="glightbox">
                                    <img
                                        :src="CalcAndRandomNum_main"
                                        alt="Kiosk"
                                        class="img-fluid rounded shadow-lg project-img"
                                    />
                                </a>
                            </div>

                            <!-- Used Technologies -->
                            <div class="row tech-section">
                                <tech-section/>
                            </div>
                        </div>
                        <div class="col-12 col-md-5">
                            <ul class="list-group project-glass-list">
                                <li v-for="(item, index) in translatedFeatures" :key="index" class="list-group-item">
                                    <span class="list-group-index">#{{ index + 1 }}</span> {{ item }}
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="row py-4">
                        <h3 class="mb-3">{{ $t('developmentProcess') }}</h3>
                        <div class="development-process-text">
                            <div class="mb-2">
                                {{ $t('WPCalcAndRandomNumDevProcess1') }}
                            </div>
                            <div class="mb-2">
                                {{ $t('WPCalcAndRandomNumDevProcess2') }}
                            </div>
                            <div class="mb-2">
                                {{ $t('WPCalcAndRandomNumDevProcess3') }}
                            </div>
                            <div class="mb-2">
                                {{ $t('WPCalcAndRandomNumDevProcess4') }}
                            </div>
                            <div class="mb-2">
                                {{ $t('WPCalcAndRandomNumDevProcess5') }}
                            </div>
                        </div>
                    </div>
                    <!-- Screenshots -->
                    <div class="row mb-5 py-4">
                        <h3 class="mb-5">{{ $t('screenshots') }}</h3>
                        <div class="row justify-content-center">
                            <div v-for="(image, index) in images" :key="index" class="col-md-4 col-sm-6 mb-4">
                                <a :href="image.src" class="glightbox" :data-gallery="'gallery1'">
                                    <img :src="image.src" class="img-fluid rounded shadow" :alt="image.alt">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="text-center">
                        <a href="https://github.com/nemethd01/CalcAndRandomNumberGenerator.git" target="_blank" class="btn custom-button">{{ $t('viewOnGitHub') }}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CalcAndRandomNum_main from "/media/imgs/projects/web/CalcAndRandomNum_main.png";
import { onMounted, ref } from "vue";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.css";
import TechSection from "./TechSection.vue";


export default {
    components: {TechSection},
    setup() {
        const images = ref([
            { src: "/media/imgs/projects/web/CalcAndRandomNum_1.png", alt: "Calc and random number generator pic 1" },
            { src: "/media/imgs/projects/web/CalcAndRandomNum_2.png", alt: "Calc and random number generator pic 2" },
            { src: "/media/imgs/projects/web/CalcAndRandomNum_3.png", alt: "Calc and random number generator pic 3" },
            { src: "/media/imgs/projects/web/CalcAndRandomNum_4.png", alt: "Calc and random number generator pic 4" },
            { src: "/media/imgs/projects/web/CalcAndRandomNum_5.png", alt: "Calc and random number generator pic 5" },
        ]);

        onMounted(() => {
            GLightbox({ selector: ".glightbox", closeEffect: "zoom", loop: true });
        });
        return { images };
    },
    data() {
        return {
            CalcAndRandomNum_main,
            features: [
                "randomNum",
                "validatedInputs",
                "regex",
                "getBasedForms",
                "reset",
                "dynamicOutput",
                "divisionByZero",
                "clearable",
                "calcByPrior",
                "simpleOperation",
            ],
        };
    },
    computed: {
        translatedFeatures() {
            return this.features.map(feature => this.$t(`WPCalcAndRandomNumFeatures.${feature}`));
        }
    }
}
</script>

<style scoped>

</style>