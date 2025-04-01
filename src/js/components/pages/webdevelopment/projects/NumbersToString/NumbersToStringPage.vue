<template>
    <div class="web-projects-page">
        <div class="header">
            <h1>{{ $t('webProjects.numbersToStringsTitle') }}</h1>
            <p>{{ $t('WPNumbersToStringHeading') }}</p>
            <a href="https://github.com/nemethd01/NumbersToString.git" target="_blank" class="btn custom-button">{{ $t('viewOnGitHub') }}</a>
        </div>
        <div class="project-content-wrapper">
            <div class="container">
                <div class="container py-5">
                    <h3 class="mb-3">{{ $t('projectFeatures') }}</h3>
                    <div class="row align-items-center">
                        <div class="col-12 col-md-7">
                            <div class="text-center">
                                <a :href="numbersToString_main" class="glightbox">
                                    <img
                                        :src="numbersToString_main"
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
                                {{ $t('WPNumbersToStringDevProcess1') }}
                            </div>
                            <div class="mb-2">
                                {{ $t('WPNumbersToStringDevProcess2') }}
                            </div>
                            <div class="mb-2">
                                {{ $t('WPNumbersToStringDevProcess3') }}
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
                        <a href="https://github.com/nemethd01/NumbersToString.git" target="_blank" class="btn custom-button">{{ $t('viewOnGitHub') }}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import numbersToString_main from "/media/imgs/projects/web/numbersToString_main.png";
import { onMounted, ref } from "vue";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.css";
import TechSection from "./TechSection.vue";


export default {
    components: {TechSection},
    setup() {
        const images = ref([
            { src: "/media/imgs/projects/web/numbersToString_main.png", alt: "Számok stringgel kép 1" },
            { src: "/media/imgs/projects/web/numbersToString_1.png", alt: "Számok stringgel kép 2" },
            { src: "/media/imgs/projects/web/numbersToString_2.png", alt: "Számok stringgel kép 3" },
            { src: "/media/imgs/projects/web/numbersToString_3.png", alt: "Számok stringgel kép 4" },
        ]);

        onMounted(() => {
            GLightbox({ selector: ".glightbox", closeEffect: "zoom", loop: true });
        });
        return { images };
    },
    data() {
        return {
            numbersToString_main,
            features: [
                "numbersToString",
                "getInput",
                "correctSeparation",
                "formBased",
                "reset",
                "dynamicOutput",
            ],
        };
    },
    computed: {
        translatedFeatures() {
            return this.features.map(feature => this.$t(`WPNumbersToStringFeatures.${feature}`));
        }
    }
}
</script>

<style scoped>

</style>