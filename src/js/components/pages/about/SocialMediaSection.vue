<template>
    <div class="container">
        <div class="row">
            <div>
                <social-media-icon title="Instagram" :icon="instagramSvg" socialLink="https://www.instagram.com/_domec/"/>
                <social-media-icon title="GitHub" :icon="githubSvg" socialLink="https://github.com/nemethd01"/>
                <social-media-icon title="LinkedIn" :icon="linkedinSvg" socialLink="https://www.linkedin.com/in/dominik-n%C3%A9meth-157465321/"/>
                <social-media-icon title="ArtStation" :icon="artstationSvg" socialLink="https://www.artstation.com/domec"/>
            </div>
        </div>
    </div>
</template>

<script>
// components
import socialMediaIcon from "./social-media-icon.vue";

// icons
import instagramSvg from '../../svg/instagram.vue';
import githubSvg from '../../svg/github.vue';
import linkedinSvg from '../../svg/linkedin.vue';
import artstationSvg from '../../svg/artstation.vue';


export default {
    components: {
        socialMediaIcon,
    },
    data() {
        return {
            instagramSvg,
            githubSvg,
            linkedinSvg,
            artstationSvg,
        };
    }
}
</script>


<style scoped>


</style>