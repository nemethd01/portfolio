<template>
    <div class="container experience-section mt-4">
        <h2 class="mb-3">Szakmai Tapasztalat</h2>
        <div v-for="job in experiences" :key="job.position" class="card mb-3">
            <div class="card-body">
                <h5 class="card-title">{{ job.position }} | <span class="fw-bold">{{ job.company }}</span></h5>
                <h6 class="card-subtitle">{{ job.period }}</h6>
                <p class="card-text mt-2">{{ job.description }}</p>
            </div>
        </div>

        <h2 class="mt-4 mb-3">Tanulmányok</h2>
        <div v-for="study in studies" :key="study.institution" class="card mb-3">
            <div class="card-body">
                <h5 class="card-title">{{ study.degree }} | <span class="fw-bold">{{ study.institution }}</span></h5>
                <h6 class="card-subtitle">{{ study.period }}</h6>
                <p class="card-text mt-2">{{ study.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            experiences: [
                {
                    position: "Szoftverfejlesztő (Full Stack)",
                    company: "ZNET Telekom Zrt., Győr",
                    period: "2023 AUG. – ...",
                    description: "Vállalatirányítási szoftver fejlesztésében való részvétel, meglévő szoftverek üzemeltetése és továbbfejlesztése, tanuló projektek készítése."
                },
                {
                    position: "Informatikai értékesítő/szervizes",
                    company: "PC ABC Számítástechnika, Győr",
                    period: "2023 MÁJ. – 2023 JÚL.",
                    description: "Laptopok, számítógépek, perifériák értékesítése, építése, szervizelése. Ügyfelekkel való kapcsolattartás személyesen, telefonon és írásban."
                },
            ],
            studies: [
                {
                    degree: "Junior Frontend Fejlesztő",
                    institution: "Győri SZC Jedlik Ányos Gépipari és Informatikai Technikum, Győr",
                    period: "2022 DEC. – 2023 NOV.",
                    description: "HTML, CSS, SCSS, JavaScript, Python, Bootstrap, Vue.js keretrendszer alapszintű ismerete és webalkalmazások automatikus tesztelésének alapszintű megismerése."
                },
                {
                    degree: "Érettségi + 4123 FEOR",
                    institution: "Győri SZC Deák Ferenc Közgazdasági Technikum, Győr",
                    period: "2017 SZEPT. – 2022 JÚN.",
                    description: "Statisztikai, pénzügyi, marketinges, gazdaságinformatikai és vállalkozási ismeretek, valamint ECDL vizsga megszerzése."
                },
                {
                    degree: "ECDL Tanfolyam",
                    institution: "Győri SZC Deák Ferenc Közgazdasági Technikum, Győr",
                    period: "2017 DEC. – 2019 MÁJ.",
                    description: "ECDL - European Computer Driving Licence"
                }
            ]
        };
    }
};
</script>

<style>
.container {
    max-width: 800px;
}
.experience-section .card {
    border-left: 5px solid var(--highlight-color) !important;
}
</style>
