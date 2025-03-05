<template>
    <div class="web-projects-page">
        <div class="header">
            <h1>Számológép és random szám generálása PHP-vel</h1>
            <p>Egyszerű matematikai műveletekkel operáló számológép és meghatározható mennyiségű páros szám generátor</p>
            <a href="https://github.com/nemethd01/CalcAndRandomNumberGenerator.git" target="_blank" class="btn custom-button">Nézd meg GitHubon</a>
        </div>
        <div class="project-content-wrapper">
            <div class="container">
                <div class="container py-5">
                    <h3 class="mb-3">Projekt funkciók</h3>
                    <div class="row align-items-center">
                        <div class="col-12 col-md-7 text-center">
                            <a :href="CalcAndRandomNum_main" class="glightbox">
                                <img
                                    :src="CalcAndRandomNum_main"
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
                                A projekt elkészítésének célja a PHP nyelv tanulása volt. Ez az oldal két interaktív programot tartalmaz: egy véletlenszám-generátort és egy számológépet.
                            </div>
                            <div class="mb-2">
                                A véletlenszám-generátor lehetővé teszi a felhasználó számára, hogy egy számot adjon meg, ami meghatározza, hány véletlenszerű számot szeretne generálni.
                                A rendszer csak a páros számokat jeleníti meg.
                            </div>
                            <div class="mb-2">
                                A számológép lehetővé teszi, hogy a felhasználó egyszerű műveleteket végezzen (összeadás, kivonás, szorzás, osztás).
                                Számokat és műveleti jeleket adhatunk hozzá, és a program automatikusan kiszámolja az eredményt a megfelelő műveleti sorrendben.
                                A számológép a nullával történő osztás megkísérlése esetén hibát jelez.
                            </div>
                            <div class="mb-2">
                                Mindkét program kiszűri a nem számjegyeket a bevitelből, így csak érvényes számokat fogad el, továbbá mindegyik GET-alapú bevitel segítségével dolgozza fel a felhasználó által megadott számot, és a megfelelő formátumban jeleníti meg az eredményt.
                                Ha a felhasználó érvénytelen számot ad meg, akkor hibaüzenet figyelmezteti,
                            </div>
                            <div class="mb-2">
                                A fejlesztés során a legnagyobb kihívást az adta, hogy biztosítani kellett, hogy a felhasználók által megadott adatok mindig a megfelelő formátumban legyenek, és a műveletek a várt eredményt adják.
                                A véletlenszám-generátor esetében a számok kiszűrése és a páratlan számok megjelenítése, míg a számológépnél a műveletek megfelelő sorrendje és a hibák kezelése volt a legnagyobb munka.
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
                        <a href="https://github.com/nemethd01/CalcAndRandomNumberGenerator.git" target="_blank" class="btn custom-button">Nézd meg GitHubon</a>
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
            { src: "/media/imgs/projects/web/CalcAndRandomNum_1.png", alt: "Számológép és random számgenerátor kép 1" },
            { src: "/media/imgs/projects/web/CalcAndRandomNum_2.png", alt: "Számológép és random számgenerátor kép 2" },
            { src: "/media/imgs/projects/web/CalcAndRandomNum_3.png", alt: "Számológép és random számgenerátor kép 3" },
            { src: "/media/imgs/projects/web/CalcAndRandomNum_4.png", alt: "Számológép és random számgenerátor kép 4" },
            { src: "/media/imgs/projects/web/CalcAndRandomNum_5.png", alt: "Számológép és random számgenerátor kép 5" },
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
                "Véletlenszám-generálás (csak páros)",
                "Validált beviteli mezők",
                "Regex használata",
                "GET-alapú űrlapkezelés",
                "Reset funkció",
                "Dinamikus HTML-kimenet",
                "Nullával való osztás ellenőrzött és kezelve van",
                "Törölhető művelet",
                "Eredmény kiszámítása az alapműveletek prioritásának megfelelően",
                "Egyszerű matematikai műveletek végrehajtása (+, -, *, /).",
            ],
        };
    },
}
</script>

<style scoped>

</style>