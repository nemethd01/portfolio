<template>
    <div class="web-projects-page">
        <div class="header">
            <h1>Vue File Manager</h1>
            <p>Egyszerű és modern fájlkezelő Vue + PHP alapokon.</p>
            <a href="https://github.com/nemethd01/php_vue_filemanager.git" target="_blank" class="btn custom-button">Nézd meg GitHubon</a>
        </div>
        <div class="project-content-wrapper">
            <div class="container">
                <div class="container py-5">
                    <h3>Projekt funkciók</h3>
                    <div class="row align-items-center">
                        <div class="col-12 col-md-7 text-center">
                            <a :href="filemanagerImg1" class="glightbox">
                                <img
                                    :src="filemanagerImg1"
                                    alt="File Manager"
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
                            <div class="mb-2">A File Manager projektem elsősorban PHP tanulási céllal készült. Megismerkedtem az objektum-orientált programozás (OOP) alapjaival,
                                valamint az MVC-vel és a PDO-val, miközben az alkalmazás backend-jét fejlesztettem. A projekt frontend
                                Vue.js alapú, a backend pedig PHP-ban készült. Az MVC architektúra segített abban, hogy kód egyes részeit jól elkülöníthessem, ezzel tisztábbá és olvashatóbbá téve azt.
                            </div>
                            <div class="mb-2">Az alkalmazás létrehozásakor a célom az volt, hogy egy egyszerű fájlkezelő rendszert
                                hozzak
                                létre, ami lehetővé teszi a felhasználók számára a fájlok feltöltését, letöltését,
                                valamint
                                mappák kezelését (létrehozás, törlés). A fájlok feltöltését több részből álló
                                chunk-alapú
                                feltöltési megoldással valósítottam meg, amelyet a FileController osztály kezeli.
                                Emellett a
                                mappák megfelelő kezelése is fontos része a projektnek, amit a FolderController osztály
                                biztosít.
                            </div>
                            <div class="mb-2">A fájlok kezelését egy adatbázis-alapú megoldás biztosítja, amely a fájlok nevét,
                                méretét
                                és egyedi azonosítóját tárolja. Az adatbázis kapcsolatot a DB.php fájlban hoztam létre,
                                ami
                                PDO-t használ.
                            </div>
                            <div>A projekt készítése során ismerkedtem meg a PDO-val, amely segített a biztonságos
                                adatbázis-műveletek végrehajtásában. A PDO biztosítja a SQL injection elleni védelmet.
                            </div>
                        </div>
                    </div>

                    <!-- Screenshots -->
                    <div class="row mb-5 py-4">
                        <h3 class="mb-5">Képernyőképek</h3>
                        <div class="row justify-content-center">
                            <div v-for="(image, index) in images" :key="index" class="col-md-4 col-sm-6 mb-4">
                                <a :href="image.src" class="glightbox" :data-gallery="'gallery1'">
                                    <img :src="image.src" class="img-fluid rounded shadow project-img" :alt="image.alt">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="text-center">
                        <a href="https://github.com/nemethd01/php_vue_filemanager.git" target="_blank" class="btn custom-button">Nézd meg GitHubon</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import filemanagerImg1 from "/media/imgs/projects/web/filemanager_1.png";
import { onMounted, ref } from "vue";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.css";
import TechSection from "./TechSection.vue";



export default {
    components: {TechSection},
    setup() {
        const images = ref([
            { src: "/media/imgs/projects/web/filemanager_1.png", alt: "Projekt kép 1" },
            { src: "/media/imgs/projects/web/filemanager_2.png", alt: "Projekt kép 2" },
            { src: "/media/imgs/projects/web/filemanager_3.png", alt: "Projekt kép 3" },
            { src: "/media/imgs/projects/web/filemanager_4.png", alt: "Projekt kép 4" },
            { src: "/media/imgs/projects/web/filemanager_5.png", alt: "Projekt kép 5" },
        ]);

        onMounted(() => {
            GLightbox({ selector: ".glightbox", closeEffect: "zoom", loop: true });
        });
        return { images };
    },
    data() {
        return {
            filemanagerImg1,
            features: [
                "Fájlkezelés",
                "Fájl feltöltés és törlése",
                "Mappa létrehozása és törlése",
                "Mappákon belüli navigáció",
                "Rendezés név és dátum szerint",
                "Fájlok és mappák elválasztva",
                "Aktuális mappaszint (navigációs útvonal)",
                "Validált beviteli mezők",
                "Feltöltött fájlok feltöltési idő szerint külön mappákban elválasztva (backend)",
                "OOP - MVC",
                "PHP autoload"
            ],
        };
    },
}
</script>

<style scoped>


</style>