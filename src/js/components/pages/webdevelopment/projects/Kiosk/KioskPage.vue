<template>
    <div class="web-projects-page">
        <div class="header">
            <h1>{{ $t('webProjects.kioskTitle') }}</h1>
            <p>{{ $t('WPKioskHeading') }}</p>
        </div>
        <div class="project-content-wrapper">
            <div class="container">
                <div class="container py-5">
                    <h3 class="mb-3">{{ $t('projectFeatures') }}</h3>
                    <div class="row align-items-center">
                        <div class="col-12 col-md-7">
                            <div class="text-center">
                                <a :href="kiosk_main" class="glightbox">
                                    <img
                                        :src="kiosk_main"
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
                                {{ $t('WPKioskDevProcess1') }}
                            </div>
                            <div class="mb-2">
                                {{ $t('WPKioskDevProcess2') }}
                            </div>
                            <div class="mb-2">
                                {{ $t('WPKioskDevProcess3') }}
                            </div>
                            <div>
                                {{ $t('WPKioskDevProcess4') }}
                            </div>
                            <div class="mb-2">
                                <span>{{ $t('WPKioskDevProcess5') }}</span> <a class="toOutsideLink" href="https://furcan.github.io/KioskBoard/" target="_blank">KioskBoard</a>.
                            </div>
                            <div>
                                {{ $t('WPKioskDevProcess6') }}
                            </div>
                            <div>
                                {{ $t('WPKioskDevProcess7') }}
                            </div>
                        </div>
                    </div>
                    <!-- Screenshots -->
                    <div class="row py-4">
                        <h3 class="mb-5">{{ $t('screenshots') }}</h3>
                        <div class="row justify-content-center">
                            <div v-for="(image, index) in images" :key="index" class="col-md-4 col-sm-6 mb-4">
                                <a :href="image.src" class="glightbox" :data-gallery="'gallery1'">
                                    <img :src="image.src" class="img-fluid rounded shadow" :alt="image.alt">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import kiosk_main from "/media/imgs/projects/web/kiosk_main.png";
import { onMounted, ref } from "vue";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.css";
import TechSection from "./TechSection.vue";


export default {
    components: {TechSection},
    setup() {
        const images = ref([
            { src: "/media/imgs/projects/web/kiosk_1.png", alt: "Kiosk pic 1" },
            { src: "/media/imgs/projects/web/kiosk_2.png", alt: "Kiosk pic 2" },
            { src: "/media/imgs/projects/web/kiosk_8.png", alt: "Kiosk pic 8" },
            { src: "/media/imgs/projects/web/kiosk_3.png", alt: "Kiosk pic 3" },
            { src: "/media/imgs/projects/web/kiosk_4.png", alt: "Kiosk pic 4" },
            { src: "/media/imgs/projects/web/kiosk_5.png", alt: "Kiosk pic 5" },
            { src: "/media/imgs/projects/web/kiosk_6.png", alt: "Kiosk pic 6" },
            { src: "/media/imgs/projects/web/kiosk_7.png", alt: "Kiosk pic 7" },
        ]);

        onMounted(() => {
            GLightbox({ selector: ".glightbox", closeEffect: "zoom", loop: true });
        });
        return { images };
    },
    data() {
        return {
            kiosk_main,
            features: [
                "informationTransfer",
                "termsAndConditions",
                "complaintManagement",
                "validatedInputs",
                "mailtoDisabled",
                "chromeExtension",
                "backgroundVideo",
                "pdfModal",
                "returnToHome",
                "kioskBoard",
                "touchOptimized",
            ],
        };
    },
    computed: {
        translatedFeatures() {
            return this.features.map(feature => this.$t(`WPKioskFeatures.${feature}`));
        }
    }
}
</script>

<style scoped>

</style>