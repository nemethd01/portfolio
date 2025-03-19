<template>
    <div class="about-page">
        <div class="about-wrapper">
            <div class="container my-5">
                <div class="row">
                    <div class="text-center">
                        <h1 class="mb-5">About</h1>
                    </div>

                    <div class="col-md-4 text-center">
                        <img :src="pf" alt="Profile Image" class="img-fluid mb-4 profile-picture">
                        <div class="px-2">
                            <div class="profile-info py-3">
                                <h2 class="mt-1">{{ name }}</h2>
                                <p class="location fw-bold m-0">{{ location }}</p>
                                <p class="date-of-birth m-0">{{ birth }}</p>
                                <p class="personality mb-1">{{ personality }}</p>
                            </div>
                        </div>

                        <div class="my-5">
                            <social-media-section/>
                        </div>
                    </div>

                    <div class="col-md-8">
                        <p class="mt-2 introduction">
                            Hello! Dominik vagyok, webfejlesztő és digitális alkotó.
                            Imádok kreatív projekteken dolgozni, legyen szó <a href="/work/web-development" target="_self">webfejlesztésről</a>, <a href="/work/game-development" target="_self">játékfejlesztésről</a> vagy akár cinematográfiáról.
                            Szeretem a művészeteket, és igyekszem én is művész szemmel nézni a világot.
                            Mindig keresem az új kihívásokat és lehetőségeket, hogy fejlődjek és valami egyedit hozzak létre.
                            Amikor nem a kódsorok között vagyok, általában valami újat tanulok, vagy egy kreatív ötleten dolgozom.
                        </p>

                        <div class="my-5 motivation">
                            <h4 class="mb-4">Motivációm</h4>
                            <p>
                                Szabadidőmben szeretek olvasni, filmeket nézni és videojátékozni, ezekből a tartalmakból merítek inspirációt.
                                Különösen a thriller, sci-fi és a horror műfajok állnak hozzám közel, mert ezek gyakran olyan mélyebb gondolatokkal, filozófiai kérdésekkel és emberi érzelmekkel foglalkoznak, amik hatással vannak arra (még ha tudat alatt is), ahogyan éljük az életünket.
                            </p>
                            <p>
                                Szeretnék én is olyan alkotásokat létrehozni, amelyek valódi hatással vannak az emberek életére. Nem csupán szórakoztatni szeretnék, hanem elgondolkodtatni, érzéseket kiváltani, és akár megváltoztatni valakinek a gondolkodását.
                                Tudom azt, hogy egy jól megalkotott történet vagy élmény képes inspirálni, irányt mutatni, és akár életre szóló nyomot hagyni valakiben.
                            </p>
                        </div>

                        <!-- Experience and Studies section -->
                        <experience-and-studies/>

                        <div class="my-5 future-goals">
                            <h4 class="my-4">Jövőbeli Célok</h4>
                            <p>Folyamatosan fejlesztem a tudásom, szeretnék magas szintű ismereteket elsajátítani mind a programozás, mind a játékfejlesztés egyes részein belül.
                                Hosszú távú célom, hogy egyedi, nagy hatású, kiemelkedő történettel és atmoszférával rendelkező játékokat hozzak létre.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import experienceAndStudies from "./ExperienceAndStudies.vue";
import socialMediaSection from "./SocialMediaSection.vue";
import pf from '/media/imgs/pf.jpg'


export default {
    components: {
        experienceAndStudies,
        socialMediaSection,
    },
    data() {
        return {
            name: "Németh Dominik",
            location: "Győr",
            birth: "2002. 01. 01.",
            personality: "INTJ",
            pf
        }
    }
}

</script>

<style scoped>
.profile-picture {
    width: 220px;
    height: 220px;
    border-radius: 50%;
    object-fit: cover;
    transition: all 0.3s ease-in-out;
}

.profile-picture:hover {
    transform: scale(1.05);
}

.profile-info {
    background-color: rgba(122, 145, 152, 0.2);
    border-radius: 10px;
    backdrop-filter: blur(5px);
    transition: all 0.3s ease-in-out;
}

.profile-info:hover {
    transform: scale(1.03);
}


</style>