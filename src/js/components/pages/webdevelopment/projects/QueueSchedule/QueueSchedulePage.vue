<template>
    <div class="web-projects-page">
        <div class="header">
            <h1>{{ $t('webProjects.queueScheduleTitle') }}</h1>
            <p>{{ $t('WPQueueHeading') }}</p>
            <a href="https://github.com/nemethd01/QueueSchedule.git" target="_blank" class="btn custom-button">{{
                    $t('viewOnGitHub')
                }}</a>
        </div>
        <div class="project-content-wrapper">
            <div class="container">
                <div class="container py-5">
                    <h3 class="mb-3">{{ $t('projectFeatures') }}</h3>
                    <div class="row align-items-center">
                        <div class="col-12 col-md-7 text-center">
                            <a :href="Queue_main" class="glightbox">
                                <img
                                    :src="Queue_main"
                                    alt="Schedule calendar with coverage indicators"
                                    class="img-fluid rounded shadow-lg project-img"
                                />
                            </a>
                        </div>
                        <div class="col-12 col-md-5">
                            <ul class="list-group project-glass-list">
                                <li v-for="(item, index) in translatedFeatures" :key="index" class="list-group-item">
                                    <span class="list-group-index">#{{ index + 1 }}</span> {{ item }}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- Used Technologies -->
                    <div class="row py-4">
                        <tech-section/>
                    </div>
                    <div class="row py-4">
                        <h3 class="mb-3">{{ $t('developmentProcess') }}</h3>
                        <div class="development-process-text">
                            <div class="mb-2">
                                {{ $t('WPQueueDevProcess1') }}
                            </div>
                            <div class="mb-2">
                                {{ $t('WPQueueDevProcess2') }}
                            </div>
                            <div class="mb-2">
                                <div class="code-block">
                                    <span class="keyword">@container</span> (max-width: 40px) {<br>
                                    <span class="selector">.start-time span, .end-time span</span> {<br>
                                    &nbsp;&nbsp;display: none;<br>
                                    }<br>
                                    }<br><br>

                                    <span class="keyword">@container</span> (max-width: 10px) {<br>
                                    <span class="selector">.start-time img, .end-time img</span> {<br>
                                    &nbsp;&nbsp;display: none;<br>
                                    }<br>
                                    }
                                </div>
                            </div>
                            <div class="mb-2">
                                {{ $t('WPQueueDevProcess3') }}
                            </div>
                            <div class="mb-2">
                                {{ $t('WPQueueDevProcess4') }}
                            </div>
                            <div class="mb-2">
                                <div class="code-block">
                                    <span class="keyword">function</span> getWeekStart(date) {<br>
                                    &nbsp;&nbsp;<span class="keyword">const</span> day = date.getDay();<br>
                                    &nbsp;&nbsp;<span class="keyword">const</span> diff = date.getDate() - day + (day === 0 ? -6 : 1); <span class="comment">// Monday is the first day</span><br>
                                    &nbsp;&nbsp;<span class="keyword">return</span> <span class="keyword">new</span> Date(date.setDate(diff));<br>
                                    }
                                </div>
                            </div>
                            <div class="mb-2">
                                {{ $t('WPQueueDevProcess5') }}
                            </div>
                            <div class="mb-2">
                                {{ $t('WPQueueDevProcess6') }}
                            </div>
                            <div class="mb-2">
                                <div class="code-block">
                                    <span class="keyword">const</span> today = <span class="keyword">new</span> Date().toISOString().split(<span class="string">'T'</span>)[0];<br>
                                    <span class="keyword">const</span> headers = document.querySelectorAll(<span class="string">'.date-header'</span>);<br><br>

                                    headers.forEach(header => {<br>
                                    &nbsp;&nbsp;<span class="keyword">if</span> (header.dataset.date === today) {<br>
                                    &nbsp;&nbsp;&nbsp;&nbsp;header.classList.add(<span class="string">'today-header'</span>);<br>
                                    &nbsp;&nbsp;}<br>
                                    });
                                </div>
                            </div>
                            <div class="mb-2">
                                {{ $t('WPQueueDevProcess7') }}
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
                        <a href="https://github.com/nemethd01/QueueSchedule.git" target="_blank" class="btn custom-button">{{
                                $t('viewOnGitHub')
                            }}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Queue_main from "/media/imgs/projects/web/queue_main.png";
import { onMounted, ref } from "vue";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.css";
import TechSection from "./TechSection.vue";


export default {
    components: {TechSection},
    setup() {
        const images = ref([
            { src: "/media/imgs/projects/web/queue_main.png", alt: "Beosztás lefedettség kép 1" },
            { src: "/media/imgs/projects/web/queue_1.png", alt: "Beosztás lefedettség kép 2" },
            { src: "/media/imgs/projects/web/queue_2.png", alt: "Beosztás lefedettség kép 3" },
            { src: "/media/imgs/projects/web/queue_3.png", alt: "Beosztás lefedettség kép 4" },
            { src: "/media/imgs/projects/web/queue_4.png", alt: "Beosztás lefedettség kép 5" },
            { src: "/media/imgs/projects/web/queue_5.png", alt: "Beosztás lefedettség kép 6" },
        ]);

        onMounted(() => {
            GLightbox({ selector: ".glightbox", closeEffect: "zoom", loop: true });
        });
        return { images };
    },
    data() {
        return {
            Queue_main,
            features: [
                "dailyAndWeeklyView",
                "timePeriodNavigation",
                "resetTodayButton",
                "integratableIntoAnySystem",
                "dataFromJsArray",
                "highlightCurrentDay",
                "displayCoveredPeriods",
                "hoverOnSmallScreens"
            ],
        };
    },
    computed: {
        translatedFeatures() {
            return this.features.map(feature => this.$t(`WPQueueFeatures.${feature}`));
        }
    }
}
</script>

<style scoped>


</style>