<template>
    <div class="container">
        <div class="row">
            <h4>Programozási nyelvek és Technológiák</h4>
            <div class="skill-icon-container">
                <skill-icon name="HTML" :icon="htmlSvg"/>
                <skill-icon name="CSS" :icon="cssSvg"/>
                <skill-icon name="JavaScript" :icon="jsSvg"/>
                <skill-icon name="SCSS" :icon="scssSvg"/>
                <skill-icon name="PHP" :icon="phpSvg"/>
                <skill-icon name="C++" :icon="cppSvg" level="Alapszint"/>
                <skill-icon name="Python" :icon="pythonSvg" level="Alapszint"/>
                <skill-icon name="Bash" :icon="bashSvg" level="Alapszint"/>
                <skill-icon name="MariaDB (MySQL)" :icon="mariadbSvg"/>
            </div>

            <h4>Keretrendszerek és Könyvtárak</h4>
            <div class="skill-icon-container">
                <skill-icon name="Vue" :icon="vueSvg"/>
                <skill-icon name="Laravel" :icon="laravelSvg" level="Alapszint"/>
                <skill-icon name="Bootstrap" :icon="bootstrapSvg"/>
                <skill-icon name="TailwindCSS" :icon="tailwindSvg"/>
                <skill-icon name="Selenium" :icon="seleniumSvg" level="Alapszint"/>
            </div>

            <h4>Fejlesztői Eszközök és Környezetek</h4>
            <div class="skill-icon-container">
                <skill-icon name="Docker" :icon="dockerSvg"/>
                <skill-icon name="CMake" :icon="cmakeSvg" level="Alapszint"/>
                <skill-icon name="Yarn" :icon="yarnSvg"/>
                <skill-icon name="NPM" :icon="npmSvg"/>
                <skill-icon name="Oracle VirtualBox" :icon="virtualboxSvg"/>
                <skill-icon name="PhpStorm" :icon="phpstormSvg"/>
                <skill-icon name="WebStorm" :icon="webstormSvg"/>
                <skill-icon name="CLion" :icon="clionSvg"/>
                <skill-icon name="Visual Studio Code" :icon="vscodeSvg"/>
                <skill-icon name="Visual Studio" :icon="vsSvg"/>
                <skill-icon name="SublimeText" :icon="sublimeSvg"/>
            </div>

            <h4>Verziókezelés és Project Management</h4>
            <div class="skill-icon-container">
                <skill-icon name="Git" :icon="gitSvg"/>
                <skill-icon name="GitHub" :icon="githubSvg"/>
                <skill-icon name="ClickUp" :icon="clickupSvg"/>
                <skill-icon name="Notion" :icon="notionSvg"/>
            </div>

            <div class="col-md-6 col-sm-12">
                <h4>Egyéb Eszközök</h4>
                <div class="skill-icon-container">
                    <skill-icon name="Figma" :icon="figmaSvg"/>
                    <skill-icon name="Photoshop" :icon="photoshopSvg"/>
                    <skill-icon name="Premiere Pro" :icon="premiereSvg"/>
                    <skill-icon name="DaVinci Resolve" :icon="davinciSvg"/>
                    <skill-icon name="GitBook" :icon="gitbookSvg"/>
                </div>
            </div>

            <div class="col-md-6 col-sm-12">
                <h4>Operációs rendszerek</h4>
                <div class="skill-icon-container">
                    <skill-icon name="Windows" :icon="windowsSvg"/>
                    <skill-icon name="Linux" :icon="linuxSvg"/>
                    <skill-icon name="Raspberry (Raspbian)" :icon="raspberrySvg"/>
                    <skill-icon name="Kali Linux" :icon="kaliSvg"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import skillIcon from "./skill-icon.vue";
import htmlSvg from '../../svg/html.vue';
import cssSvg from '../../svg/css.vue';
import jsSvg from '../../svg/js.vue';
import vueSvg from '../../svg/vue.vue';
import scssSvg from '../../svg/scss.vue';
import phpSvg from '../../svg/php.vue';
import cppSvg from '../../svg/cpp.vue';
import mariadbSvg from '../../svg/mariadb.vue';
import laravelSvg from '../../svg/laravel.vue';
import bootstrapSvg from '../../svg/bootstrap.vue';
import tailwindSvg from '../../svg/tailwind.vue';
import dockerSvg from '../../svg/docker.vue';
import gitSvg from '../../svg/git.vue';
import yarnSvg from '../../svg/yarn.vue';
import npmSvg from '../../svg/npm.vue';
import githubSvg from '../../svg/github.vue';
import phpstormSvg from '../../svg/phpstorm.vue';
import webstormSvg from '../../svg/webstorm.vue';
import clionSvg from '../../svg/clion.vue';
import vscodeSvg from '../../svg/vscode.vue';
import vsSvg from '../../svg/vs.vue';
import sublimeSvg from '../../svg/sublime.vue';
import virtualboxSvg from '../../svg/virtualbox.vue';
import pythonSvg from '../../svg/python.vue';
import cmakeSvg from '../../svg/cmake.vue';
import seleniumSvg from '../../svg/selenium.vue';
import premiereSvg from '../../svg/premiere.vue';
import photoshopSvg from '../../svg/photoshop.vue';
import davinciSvg from '../../svg/davinci.vue';
import figmaSvg from '../../svg/figma.vue';
import gitbookSvg from '../../svg/gitbook.vue';
import notionSvg from '../../svg/notion.vue';
import clickupSvg from "../../svg/clickup.vue";
import windowsSvg from "../../svg/windows.vue";
import linuxSvg from "../../svg/linux.vue";
import raspberrySvg from "../../svg/raspberry.vue";
import kaliSvg from "../../svg/kali.vue";
import bashSvg from "../../svg/bash.vue";


export default {
    components: {
        skillIcon,
    },
    data() {
        return {
            jsSvg,
            vueSvg,
            htmlSvg,
            cssSvg,
            scssSvg,
            phpSvg,
            cppSvg,
            mariadbSvg,
            laravelSvg,
            bootstrapSvg,
            tailwindSvg,
            dockerSvg,
            gitSvg,
            yarnSvg,
            npmSvg,
            githubSvg,
            phpstormSvg,
            webstormSvg,
            clionSvg,
            vscodeSvg,
            vsSvg,
            sublimeSvg,
            virtualboxSvg,
            pythonSvg,
            cmakeSvg,
            seleniumSvg,
            photoshopSvg,
            premiereSvg,
            davinciSvg,
            figmaSvg,
            gitbookSvg,
            clickupSvg,
            notionSvg,
            windowsSvg,
            linuxSvg,
            raspberrySvg,
            kaliSvg,
            bashSvg,
        };
    }
}
</script>


<style scoped>

</style>