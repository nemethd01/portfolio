<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3 col-sm-12">
                <h4>{{ $t('gameEngine') }}</h4>
                <div class="skill-icon-container">
                    <skill-icon name="Unreal Engine 5" :icon="unrealSvg"/>
                </div>
            </div>

            <div>
                <h4>{{ $t('languagesAndTechnology') }}</h4>
                <div class="skill-icon-container">
                    <skill-icon name="C++" :icon="cppSvg" :level="$t('basics')"/>
                    <skill-icon name="JavaScript" :icon="jsSvg"/>
                    <skill-icon name="Python" :icon="pythonSvg" :level="$t('basics')"/>
                    <skill-icon name="PHP" :icon="phpSvg"/>
                    <skill-icon name="Bash" :icon="bashSvg" :level="$t('basics')"/>
                    <skill-icon name="MariaDB" :icon="mariadbSvg"/>
                    <skill-icon name="MySQL" :icon="mysqlSvg"/>
                </div>
            </div>

            <h4>{{ $t('toolsAndEnvironments') }}</h4>
            <div class="skill-icon-container">
                <skill-icon name="Rider" :icon="riderSvg"/>
                <skill-icon name="CLion" :icon="clionSvg"/>
                <skill-icon name="Visual Studio Code" :icon="vscodeSvg"/>
                <skill-icon name="Visual Studio" :icon="vsSvg"/>
                <skill-icon name="Sublime Text" :icon="sublimeSvg"/>
            </div>

            <h4>{{ $t('graphicAnd3d') }}</h4>
            <div class="skill-icon-container">
                <skill-icon name="Blender" :icon="blenderSvg" :level="$t('basics')"/>
                <skill-icon name="Gaea" :icon="gaeaSvg" :level="$t('gaeaDescription')"/>
                <skill-icon name="PureRef" :icon="purerefSvg" :level="$t('pureRefDescription')"/>
                <skill-icon name="Substance Painter" :icon="substancepainterSvg" :level="$t('substancePainterDescription')"/>
                <skill-icon name="Photoshop" :icon="photoshopSvg" :level="$t('photoshopDescription')"/>
                <skill-icon name="Krita" :icon="kritaSvg" :level="$t('kritaDescription')"/>
            </div>

            <h4>{{ $t('narrativeAndGameplayDesign') }}</h4>
            <div class="skill-icon-container">
                <skill-icon name="GitBook" :icon="gitbookSvg"/>
                <skill-icon name="Notion" :icon="notionSvg"/>
                <skill-icon name="Figma" :icon="figmaSvg"/>
            </div>

            <div class="col-md-6">
                <h4>{{ $t('debuggingAndTranslation') }}</h4>
                <div class="skill-icon-container">
                    <skill-icon name="x64dbg" :icon="x64dbgSvg" :level="$t('basics')"/>
                    <skill-icon name="CMake" :icon="cmakeSvg" :level="$t('basics')"/>
                    <skill-icon name="Docker" :icon="dockerSvg"/>
                    <skill-icon name="Oracle VirtualBox" :icon="virtualboxSvg"/>
                </div>
            </div>

            <div class="col-md-6">
                <h4>{{ $t('versionControlAndPm') }}</h4>
                <div class="skill-icon-container">
                    <skill-icon name="Git" :icon="gitSvg"/>
                    <skill-icon name="GitHub" :icon="githubSvg"/>
                    <skill-icon name="GitLab" :icon="gitlabSvg"/>
                    <skill-icon name="ClickUp" :icon="clickupSvg"/>
                </div>
            </div>

            <div class="col-md-6 col-sm-12">
                <h4>{{ $t('multiMediaAndContentCreation') }}</h4>
                <div class="skill-icon-container">
                    <skill-icon name="Premiere Pro" :icon="premiereSvg"/>
                    <skill-icon name="DaVinci Resolve" :icon="davinciSvg"/>
                    <skill-icon name="Ableton Live" :icon="abletonSvg" :level="$t('basics')"/>
                    <skill-icon name="OBS Studio" :icon="obsSvg"/>
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
import otherSkillsAndKnowledge from "./OtherSkillsAndKnowledge.vue";

// icons
import unrealSvg from '../../svg/unreal.vue';
import jsSvg from '../../svg/js.vue';
import phpSvg from '../../svg/php.vue';
import cppSvg from '../../svg/cpp.vue';
import mariadbSvg from '../../svg/mariadb.vue';
import dockerSvg from '../../svg/docker.vue';
import gitSvg from '../../svg/git.vue';
import githubSvg from '../../svg/github.vue';
import clionSvg from '../../svg/clion.vue';
import vscodeSvg from '../../svg/vscode.vue';
import vsSvg from '../../svg/vs.vue';
import sublimeSvg from '../../svg/sublime.vue';
import virtualboxSvg from '../../svg/virtualbox.vue';
import pythonSvg from '../../svg/python.vue';
import cmakeSvg from '../../svg/cmake.vue';
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
import riderSvg from "../../svg/rider.vue";
import blenderSvg from "../../svg/blender.vue";
import substancepainterSvg from "../../svg/substancepainter.vue";
import x64dbgSvg from "../../svg/x64dbg.vue";
import kritaSvg from "../../svg/krita.vue";
import gaeaSvg from "../../svg/gaea.vue";
import purerefSvg from "../../svg/pureref.vue";
import abletonSvg from "../../svg/ableton.vue";
import obsSvg from "../../svg/obs.vue";
import gitlabSvg from "../../svg/gitlab.vue";
import mysqlSvg from "../../svg/sql.vue";


export default {
    components: {
        skillIcon,
        otherSkillsAndKnowledge,
    },
    data() {
        return {
            unrealSvg,
            jsSvg,
            phpSvg,
            cppSvg,
            mariadbSvg,
            dockerSvg,
            gitSvg,
            githubSvg,
            clionSvg,
            vscodeSvg,
            vsSvg,
            sublimeSvg,
            virtualboxSvg,
            pythonSvg,
            cmakeSvg,
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
            riderSvg,
            blenderSvg,
            gaeaSvg,
            x64dbgSvg,
            kritaSvg,
            substancepainterSvg,
            purerefSvg,
            abletonSvg,
            obsSvg,
            gitlabSvg,
            mysqlSvg,
        };
    }
}
</script>


<style scoped>


</style>