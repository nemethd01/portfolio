<template>
    <div class="about-page">
        <div class="about-wrapper">
            <div class="container my-5">
                <div class="row">
                    <h1 class="text-center mb-5">About</h1>

                    <div class="col-md-4 text-center">
                        <img :src="pf" alt="Profile Image" class="img-fluid mb-3 profile-picture">
                        <h2>{{ name }}</h2>
                        <p>{{ bio }}</p>
                    </div>

                    <div class="col-md-8">
                        <p>
                            Szenvedélyem a játékfejlesztés és a programozás. Különösen érdekel a
                            <strong>Unreal Engine 5, C++, és a játéktervezés</strong>. Az utóbbi időben egy cyber-horror walking simulator projekten dolgozom.
                        </p>

                        <h4 class="mt-4">Készségek és Eszközök</h4>
                        <div class="d-flex flex-wrap">
                            <span class="badge bg-primary me-2 mb-2">C++</span>
                            <span class="badge bg-secondary me-2 mb-2">Unreal Engine 5</span>
                            <span class="badge bg-success me-2 mb-2">Vue.js</span>
                            <span class="badge bg-warning text-dark me-2 mb-2">Laravel</span>
                            <span class="badge bg-danger me-2 mb-2">Game Design</span>
                        </div>

                        <experience-and-studies/>

                        <div>
                            <h4>Közösségi oldalak</h4>
                        </div>

                        <social-media-section/>

                        <h4 class="mt-4">Inspirációk</h4>
                        <ul>
                            <li><strong>Kedvenc játékok:</strong> Sekiro, SOMA, Outer Wilds</li>
                            <li><strong>Kedvenc könyvek:</strong> Blood, Sweat, and Pixels</li>
                            <li><strong>Idézet:</strong> "A delayed game is eventually good, but a rushed game is forever bad." - Shigeru Miyamoto</li>
                        </ul>

                        <h4 class="mt-4">Jövőbeli Célok</h4>
                        <p>Folyamatosan fejlesztem a tudásom, és hosszú távú célom egy egyedi atmoszférájú játék létrehozása.</p>
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
            bio: "sdgfgszd",
            pf
        }
    }
}

</script>

<style scoped>
.profile-picture {
    height: 250px;
    width: 250px;
    object-fit: cover;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease;
}

.profile-picture:hover {
    transform: scale(1.05);
}
</style>