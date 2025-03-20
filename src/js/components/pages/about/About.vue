<template>
    <div class="about-page">
        <div class="about-wrapper">
            <div class="container my-5">
                <div class="row">
                    <div class="text-center">
                        <h1 class="mb-5">{{ $t('about')}}</h1>
                    </div>

                    <div class="col-md-4 text-center">
                        <img :src="pf" alt="Profile Image" class="img-fluid mb-4 profile-picture">
                        <div class="px-2">
                            <div class="profile-info py-3">
                                <h2 class="mt-1">{{ $t('name') }}</h2>
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
                            {{ $t('introduction') }}
                        </p>

                        <div class="my-5 motivation">
                            <h4 class="mb-4">{{ $t('motivationTitle') }}</h4>
                            <p>
                                {{ $t('motivationFirstP') }}
                            </p>
                            <p>
                                {{ $t('motivationSecondP') }}
                            </p>
                        </div>

                        <!-- Experience and Studies section -->
                        <experience-and-studies/>

                        <div class="my-5 future-goals">
                            <h4 class="my-4">{{ $t('futureGoals') }}</h4>
                            <p>{{ $t('futureGoalsDescription') }}</p>
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
            location: "Győr",
            birth: "2002. 01. 01.",
            personality: "INTJ",
            pf
        }
    }
}

</script>

<style scoped>

</style>