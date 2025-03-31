<template>
    <div class="container">
        <div class="row">
            <h4>{{ $t('languagesAndTechnology') }}</h4>
            <div class="skill-icon-container">
                <skill-icon name="HTML" :icon="htmlSvg"/>
                <skill-icon name="CSS" :icon="cssSvg"/>
                <skill-icon name="JavaScript" :icon="jsSvg"/>
                <skill-icon name="SCSS" :icon="scssSvg"/>
                <skill-icon name="PHP" :icon="phpSvg"/>
                <skill-icon name="C++" :icon="cppSvg" :level="$t('basics')"/>
                <skill-icon name="Python" :icon="pythonSvg" :level="$t('basics')"/>
                <skill-icon name="Bash" :icon="bashSvg" :level="$t('basics')"/>
                <skill-icon name="MariaDB" :icon="mariadbSvg"/>
                <skill-icon name="MySQL" :icon="mysqlSvg"/>
            </div>

            <h4>{{ $t('frameworksAndLibs') }}</h4>
            <div class="skill-icon-container">
                <skill-icon name="Vue" :icon="vueSvg"/>
                <skill-icon name="Laravel" :icon="laravelSvg" :level="$t('basics')"/>
                <skill-icon name="Bootstrap" :icon="bootstrapSvg"/>
                <skill-icon name="TailwindCSS" :icon="tailwindSvg"/>
                <skill-icon name="Selenium" :icon="seleniumSvg" :level="$t('basics')"/>
            </div>

            <h4>{{ $t('toolsAndEnvironments') }}</h4>
            <div class="skill-icon-container">
                <skill-icon name="Docker" :icon="dockerSvg"/>
                <skill-icon name="CMake" :icon="cmakeSvg" :level="$t('basics')"/>
                <skill-icon name="Yarn" :icon="yarnSvg"/>
                <skill-icon name="NPM" :icon="npmSvg"/>
                <skill-icon name="Navicat" :icon="navicatSvg"/>
                <skill-icon name="Oracle VirtualBox" :icon="virtualboxSvg"/>
                <skill-icon name="PhpStorm" :icon="phpstormSvg"/>
                <skill-icon name="WebStorm" :icon="webstormSvg"/>
                <skill-icon name="CLion" :icon="clionSvg"/>
                <skill-icon name="Visual Studio Code" :icon="vscodeSvg"/>
                <skill-icon name="Visual Studio" :icon="vsSvg"/>
                <skill-icon name="Sublime Text" :icon="sublimeSvg"/>
            </div>

            <h4>{{ $t('versionControlAndPm') }}</h4>
            <div class="skill-icon-container">
                <skill-icon name="Git" :icon="gitSvg"/>
                <skill-icon name="GitHub" :icon="githubSvg"/>
                <skill-icon name="GitLab" :icon="gitlabSvg"/>
                <skill-icon name="ClickUp" :icon="clickupSvg"/>
                <skill-icon name="Notion" :icon="notionSvg"/>
            </div>

            <div class="col-md-6 col-sm-12 mb-4">
                <h4>{{ $t('otherTools') }}</h4>
                <div class="skill-icon-container">
                    <skill-icon name="Figma" :icon="figmaSvg"/>
                    <skill-icon name="Photoshop" :icon="photoshopSvg"/>
                    <skill-icon name="Premiere Pro" :icon="premiereSvg"/>
                    <skill-icon name="DaVinci Resolve" :icon="davinciSvg"/>
                    <skill-icon name="GitBook" :icon="gitbookSvg"/>
                </div>
            </div>

            <div class="col-md-6 col-sm-12 mb-4">
                <h4>{{ $t('operatingSystems') }}</h4>
                <div class="skill-icon-container">
                    <skill-icon name="Windows" :icon="windowsSvg"/>
                    <skill-icon name="Linux" :icon="linuxSvg"/>
                    <skill-icon name="Raspberry (Raspbian)" :icon="raspberrySvg"/>
                    <skill-icon name="Kali Linux" :icon="kaliSvg"/>
                </div>
            </div>

            <h4 class="mb-4">{{ $t('otherSkillsAndKnowledge') }}</h4>
            <other-skills-and-knowledge/>

        </div>
    </div>
</template>

<script>
// components
import skillIcon from "../skill-icon.vue";
import otherSkillsAndKnowledge from "../webdevelopment/OtherSkillsAndKnowledge.vue";

// icons
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
import navicatSvg from "../../svg/navicat.vue";
import gitlabSvg from "../../svg/gitlab.vue";
import mysqlSvg from "../../svg/sql.vue";


export default {
    components: {
        otherSkillsAndKnowledge,
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
            navicatSvg,
            gitlabSvg,
            mysqlSvg,
        };
    }
}
</script>


<style scoped>

</style>