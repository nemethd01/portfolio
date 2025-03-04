import queue from "/media/imgs/projects/web/queue_main.png"
import kiosk from "/media/imgs/projects/web/kiosk_main.png"
import filemanager from "/media/imgs/projects/web/filemanager_main.png"
import numbersToString from "/media/imgs/projects/web/numbersToString_main.png"
import calcAndRandomNum from "/media/imgs/projects/web/CalcAndRandomNum_main.png"

const webProjectsData = [
    {
        name: "Beosztás naptár lefedettség jelzéssel",
        image: queue,
        navigateTo: "/work/web-development/queue-schedule",
        technologies: "HTML, JavaScript, CSS"
    },
    {
        name: "Vásárlói Tájékoztató Kiosk",
        image: kiosk,
        navigateTo: "/work/web-development/kiosk",
        technologies: "Vue, JavaScript, Tailwind"
    },
    {
        name: "File Manager",
        image: filemanager,
        navigateTo: "/work/web-development/filemanager",
        technologies: "Vue, PHP, MariaDB, Bootstrap"
    },
    {
        name: "Számok kiírása string-el",
        image: numbersToString,
        navigateTo: "/work/web-development/numbers-to-string",
        technologies: "PHP, HTML"
    },
    {
        name: "Számológép és random szám generátor PHP-vel",
        image: calcAndRandomNum,
        navigateTo: "/work/web-development/calc-and-random-number",
        technologies: "PHP, HTML"
    },
];


export default webProjectsData;