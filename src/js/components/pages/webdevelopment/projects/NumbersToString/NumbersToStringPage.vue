<template>
    <div class="web-projects-page">
        <div class="header">
            <h1>Számok kiírása string-el</h1>
            <p>Számok szöveggé alakítása a magyar helyesírás szabályai szerint</p>
            <a href="https://github.com/nemethd01/NumbersToString.git" target="_blank" class="btn custom-button">Nézd meg GitHubon</a>
        </div>
        <div class="project-content-wrapper">
            <div class="container">
                <div class="container py-5">
                    <h3 class="mb-3">Projekt funkciók</h3>
                    <div class="row align-items-center">
                        <div class="col-12 col-md-7 text-center">
                            <a :href="numbersToString_main" class="glightbox">
                                <img
                                    :src="numbersToString_main"
                                    alt="Kiosk"
                                    class="img-fluid rounded shadow-lg project-img"
                                />
                            </a>
                        </div>
                        <div class="col-12 col-md-5">
                            <ul class="list-group project-glass-list">
                                <li v-for="(item, index) in features" :key="index" class="list-group-item">
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
                        <h3 class="mb-3">Fejlesztési folyamat</h3>
                        <div class="development-process-text">
                            <div class="mb-2">
                                A projekt elkészítésének célja a PHP nyelv tanulása volt, amin belül főként a stringkezelésen, a logikán és a nagyságrendi szabályok kezelésén volt a hangsúly.
                            </div>
                            <div class="mb-2">
                                A program a megadott számot különböző helyiértékekre bontja (egységek, tizesek, százasok, ezresek, milliósok), majd a megfelelő magyar nyelvi szabályok alapján szöveggé alakítja.
                                Figyelembe veszi a magyar helyesírási szabályokat, például azt, hogy kétezerig egybeírjuk a számokat, azon túl viszont csak a kerek ezreseket és milliósokat kötjük össze.
                            </div>
                            <div class="mb-2">
                                A rendszer GET-alapú bevitel segítségével dolgozza fel a felhasználó által megadott számot, és a megfelelő formátumban jeleníti meg az eredményt.
                                Az a felület egy egyszerű HTML-űrlapot tartalmaz számbevitelhez és a kiírt szöveg megjelenítéséhez, továbbá egy Reset gombot is.
                            </div>
                        </div>
                    </div>
                    <!-- Screenshots -->
                    <div class="row mb-5 py-4">
                        <h3 class="mb-5">Képernyőképek</h3>
                        <div class="row justify-content-center">
                            <div v-for="(image, index) in images" :key="index" class="col-md-4 col-sm-6 mb-4">
                                <a :href="image.src" class="glightbox" :data-gallery="'gallery1'">
                                    <img :src="image.src" class="img-fluid rounded shadow" :alt="image.alt">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="text-center">
                        <a href="https://github.com/nemethd01/NumbersToString.git" target="_blank" class="btn custom-button">Nézd meg GitHubon</a>
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
                "Számok szöveggé alakítása a magyar helyesírás szabályai szerint",
                "GET-alapú bevitel és feldolgozás",
                "Számok helyes elválasztása (kétezerig egybeírva, azon túl csak a kerek ezresek és milliók kötőjelesek)",
                "Űrlap alapú (számbevitel és kiírás)",
                "Reset funkció",
                "Dinamikus HTML-kimenet",
            ],
        };
    },
}
</script>

<style scoped>

</style>