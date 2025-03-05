<template>
    <div class="web-projects-page">
        <div class="header">
            <h1>Beosztás naptár lefedettség jelzéssel</h1>
            <p>Beosztás megjelenítő napi és heti nézetben, lefedettségi időszak jelzéssel</p>
            <a href="https://github.com/nemethd01/QueueSchedule.git" target="_blank" class="btn custom-button">Nézd meg GitHubon</a>
        </div>
        <div class="project-content-wrapper">
            <div class="container">
                <div class="container py-5">
                    <h3 class="mb-3">Projekt funkciók</h3>
                    <div class="row align-items-center">
                        <div class="col-12 col-md-7 text-center">
                            <a :href="Queue_main" class="glightbox">
                                <img
                                    :src="Queue_main"
                                    alt="Beosztás és lefedettség jelölő táblázat"
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
                                A beosztás lefedettséget megjelenítő projekt egy kérésre készült. Az igény egy olyan heti és napi nézetben is elérhető táblázatra irányult, ami képes megfelelően kezelni a dolgozók készenléti beosztását, pontosan és átláthatóan megjeleníti az adott idő intervallumot, bármilyen jelenleg meglévő (legacy és modern) webes felületre beilleszthető legyen, valamint láthatóak a lefedett és üres idő intervallumok.
                                Első lépésként Figma-ban készítettem egy látványtervet az igénylő elképzelései alapján, majd ennek prezentálása után neki láttam a dinamikus táblázat létrehozásának.
                            </div>
                            <div class="mb-2">
                                A dolgozók beosztásai megjelenítésére kék háttérszínű kártyákat hoztam létre, amelyek a kezdőidőpont napján, megfelelő helyen és szélességben jelennek meg.
                                Problémaként merült fel, hogy a rövidebb időszakokra vonatkozó beosztások heti nézetben kisebb képernyőkön nem fértek ki megfelelően. Ezt a problémát az alábbi CSS megoldással kezeltem:
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
                                Amint a "@container" érzékeli, hogy a kártya 40px-nél kisebbre szűkül (tehát a kezdő és a befejező időpont már nem fér bele jól olvashatóan), elrejti először a string-két megjelenő időpontokat, majd 10px alatt a megjelenő svg ikonokat is eltünteti. Ezek az elemek ":hover" eseményre jelennek meg újra, biztosítva az olvashatóságot.
                            </div>
                            <div class="mb-2">
                                A legnagyobb kihívást a megfelelő dátumkezelés jelentette számomra, amit JavaScript Date objektummal valósítottam meg.
                                A heti és napi nézet közötti váltás, az aktuális dátum kiemelése, valamint az előző és következő időszakok közötti navigáció pontos működése érdekében megfelelő logikát kellett kialakítani.
                                A rendszerben az aktuális dátumhoz viszonyítva számítódnak ki a hét napjai. Például a heti nézetben a hétfő mindig az adott hét első napja, míg a napi nézetben kizárólag az adott nap kerül kijelölésre. Ehhez az alábbi módszert alkalmaztam:
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
                                Ez a függvény biztosítja, hogy a hét kezdőnapja mindig hétfő legyen, még akkor is, ha a hét bármely más napján hívjuk meg. Az így kapott kezdődátum alapján generálódik a teljes heti nézet.
                            </div>
                            <div class="mb-2">
                                A napi nézet esetén az adott naphoz rendelt beosztások kerülnek kiemelésre. Az aktuális dátum kiemelésére külön osztályt alkalmaztam, így vizuálisan is azonnal felismerhető a mai nap:
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
                                Ezzel a megoldással az aktuális nap oszlopa automatikusan kiemelődik a táblázatban.
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
                        <a href="https://github.com/nemethd01/QueueSchedule.git" target="_blank" class="btn custom-button">Nézd meg GitHubon</a>
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
                "Napi és heti nézet",
                "Időszak léptetés előre és hátra",
                "Vissza állítás a mai napra gomb",
                "Bármilyen meglévő rendszerbe beilleszthető",
                "Az adatok egy JavaScript fájlból érkező tömbből származnak, így bármilyen struktúrált eseménylistát képes kezelni",
                "Aktuáls nap kiemelve",
                "Lefedett és lefedetlen időszakok megjelenítése",
                "Kis képernyőn \":hover\"-re megjelenő időpontok",
            ],
        };
    },
}
</script>

<style scoped>


</style>