<template>
    <div class="web-projects-page">
        <div class="header">
            <h1>Vásárlói Tájékoztató Kiosk</h1>
            <p>Érintőképernyős vásárlói tájékoztató Raspberry Pi-re</p>
        </div>
        <div class="project-content-wrapper">
            <div class="container">
                <div class="container py-5">
                    <h3 class="mb-3">Projekt funkciók</h3>
                    <div class="row align-items-center">
                        <div class="col-12 col-md-7 text-center">
                            <a :href="kiosk_main" class="glightbox">
                                <img
                                    :src="kiosk_main"
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
                            <div class="mb-2">A projekt célja egy érintőképernyős, webes alapú vásárlói tájékoztató létrehozása volt Raspberry Pi alapokon, amelyet később az ügyfélszolgálati irodákban helyeztek el.
                                A rendszer kizárólag a megadott információk megjelenítésére szolgál, nem engedi a felhasználóknak, hogy külső oldalakra navigáljanak vagy az eszköz operációs rendszeréhez hozzáférjenek.
                                A felületet VUE és Tailwind CSS segítségével építettem fel.
                            </div>
                            <div class="mb-2">
                                A főoldalra egy folyamatosan futó, egyedi háttérvideót készítettem, amit a ZNET Telekom meglévő videóiból állítottam össze 30 másodpercben.
                                A kiosk létrehozása közben több olyan problémába is belebotlottam, amik megoldásával sokat tanultam mind a böngésző, mind a Raspbian OS rendszerről.
                            </div>
                            <div class="mb-2">
                                Többek között: fontos volt, hogy a felhasználó ne tudja semmilyen körülmények között elhagyni a kiosk felületét. A PDF-ekben található :mailto linkek (e-mail címek) és az egyéb külső oldalakra mutató linkek azonban ezt nem tették lehetővé, ezért elő kellett állnom egy megoldással.
                                A mailto linkek tiltására Írtam egy bash scriptet, ami megakadályozza, hogy a Chromium böngészőből e-mail kliens nyíljon meg, így a felhasználók nem tudnak külső programokat elérni.
                                A külső weboldalak megnyílása egy öszetettebb probléma volt, így összetettebb megoldást is igényelt. JavaScript alapokon készítettem egy saját Chrome extensiont, amely tilt minden olyan próbálkozást, ami egy másik weboldal megnyitására irányul. Ha ilyen történne, a rendszer azonnal visszanavigál a főoldalra.
                            </div>
                            <div>
                                Az oldalak adatainak többsége egy könnyen hozzáférhető külső JavaScript tömbből töltődik.
                            </div>
                            <div class="mb-2">
                                Mivel érintőképernyős, fizikai billentyűzet nélüli rendszerre kellett tervezni, ezért szükség volt a panaszkezelési "form" miatt beépíteni egy moduláris virtuális billentyűzetet, ami kompatibilis VUE-vel. Erre a célra a legalkalmasabbnak a <a class="toOutsideLink" href="https://furcan.github.io/KioskBoard/" target="_blank">KioskBoard</a> minősült.
                            </div>
                            <div>
                                A panaszkezelés "form" validációval van ellátva. A küldés gomb megnyomásával Axios kéréssel API-n keresztül kommunikál a weboldal megfelelő backend szegmensével.
                            </div>
                            <div>
                                Kérés volt az ügyfélszolgálat felől az is, hogy ha az ügyfelek használat után otthagyják a kioskokat, akkor egy bizonyos idő után álljanak vissza alapállapotba.
                                Ezért, úgy hozam létre a projektet, hogy az oldal 15 perc inaktivitás után automatikusan visszatér a főoldalra.
                            </div>
                        </div>
                    </div>
                    <!-- Screenshots -->
                    <div class="row py-4">
                        <h3 class="mb-5">Képernyőképek</h3>
                        <div class="row justify-content-center">
                            <div v-for="(image, index) in images" :key="index" class="col-md-4 col-sm-6 mb-4">
                                <a :href="image.src" class="glightbox" :data-gallery="'gallery1'">
                                    <img :src="image.src" class="img-fluid rounded shadow" :alt="image.alt">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div> végén iframe nem listázott - 4. Még jobb lenne egy videós bemutató
                    Egy rövid videó (30-60 mp) a projekt működéséről
                    OBS Studio vagy Screenity bővítménnyel felveheted
                    Ha YouTube-ra feltöltöd, beágyazhatod az oldalra
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
            { src: "/media/imgs/projects/web/kiosk_1.png", alt: "Kiosk kép 1" },
            { src: "/media/imgs/projects/web/kiosk_2.png", alt: "Kiosk kép 2" },
            { src: "/media/imgs/projects/web/kiosk_8.png", alt: "Kiosk kép 8" },
            { src: "/media/imgs/projects/web/kiosk_3.png", alt: "Kiosk kép 3" },
            { src: "/media/imgs/projects/web/kiosk_4.png", alt: "Kiosk kép 4" },
            { src: "/media/imgs/projects/web/kiosk_5.png", alt: "Kiosk kép 5" },
            { src: "/media/imgs/projects/web/kiosk_6.png", alt: "Kiosk kép 6" },
            { src: "/media/imgs/projects/web/kiosk_7.png", alt: "Kiosk kép 7" },
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
                "Információ átadás",
                "ÁSZF megtekintése",
                "Panaszkezelés",
                "Validált beviteli mezők",
                ":mailTo linkek letiltva",
                "Egyedi Chrome Extension a navigáció és a megnyíló oldalak korlátozására",
                "Saját készítésű háttérvideó",
                "PDF dokumentumok megnyitása modálban",
                "Automatikus visszaállás főoldalra",
                "Beépített virtuális billentyűzet (KioskBoard)",
                "Érintésre optimalizált UI",
            ],
        };
    },
}
</script>

<style scoped>

</style>