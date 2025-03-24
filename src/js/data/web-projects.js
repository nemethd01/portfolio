import queue from "/media/imgs/projects/web/queue_main.png";
import kiosk from "/media/imgs/projects/web/kiosk_main.png";
import filemanager from "/media/imgs/projects/web/filemanager_main.png";
import numbersToString from "/media/imgs/projects/web/numbersToString_main.png";
import calcAndRandomNum from "/media/imgs/projects/web/CalcAndRandomNum_main.png";

const webProjectsData = [
    {
        key: 'webProjects.queueScheduleTitle',
        image: queue,
        navigateTo: "/work/web-development/queue-schedule",
        technologies: "HTML, JavaScript, CSS"
    },
    {
        key: 'webProjects.kioskTitle',
        image: kiosk,
        navigateTo: "/work/web-development/kiosk",
        technologies: "Vue, JavaScript, Tailwind"
    },
    {
        key: 'webProjects.fileManagerTitle',
        image: filemanager,
        navigateTo: "/work/web-development/filemanager",
        technologies: "Vue, PHP, MariaDB, Bootstrap"
    },
    {
        key: 'webProjects.numbersToStringsTitle',
        image: numbersToString,
        navigateTo: "/work/web-development/numbers-to-string",
        technologies: "PHP, HTML"
    },
    {
        key: 'webProjects.calcAndRandomNumberTitle',
        image: calcAndRandomNum,
        navigateTo: "/work/web-development/calc-and-random-number",
        technologies: "PHP, HTML"
    },
];

export default webProjectsData;