import { createI18n } from 'vue-i18n'

const messages = {
    hu: {
        // Navbar
        home: 'Főoldal',
        work: 'Munkáim',
        webDevelopment: 'Webfejlesztés',
        gameDevelopment: 'Játékfejlesztés',
        about: "Rólam",
        switchLanguage: "Váltás másik nyelvre",

        // Home page
        name: 'Németh Dominik',
        introduction: 'Hello! Dominik vagyok, webfejlesztő és digitális alkotó.\n' +
            'Imádok kreatív projekteken dolgozni, legyen szó webfejlesztésről, játékfejlesztésről vagy akár cinematográfiáról.\n' +
            'Szeretem a művészeteket, és igyekszem én is művész szemmel nézni a világot.\n' +
            'Mindig keresem az új kihívásokat és lehetőségeket, hogy fejlődjek és valami egyedit hozzak létre.\n' +
            'Amikor nem a kódsorok között vagyok, általában valami újat tanulok, vagy egy kreatív ötleten dolgozom.',

        // Web Development Page
// nincsenek meg a skillek
        // About page
        motivationTitle: 'Motiváció',
        motivationFirstP: 'Szabadidőmben szeretek olvasni, filmeket nézni és videojátékozni, ezekből a tartalmakból merítek inspirációt.\n' +
            'Különösen a thriller, sci-fi és a horror műfajok állnak hozzám közel, mert ezek gyakran olyan mélyebb gondolatokkal, filozófiai kérdésekkel és emberi érzelmekkel foglalkoznak, amik hatással vannak arra (még ha tudat alatt is), ahogyan éljük az életünket.' ,
        motivationSecondP: 'Szeretnék én is olyan alkotásokat létrehozni, amelyek valódi hatással vannak az emberek életére. Nem csupán szórakoztatni szeretnék, hanem elgondolkodtatni, érzéseket kiváltani, és akár megváltoztatni valakinek a gondolkodását.\n' +
            'Tudom azt, hogy egy jól megalkotott történet vagy élmény képes inspirálni, irányt mutatni, és akár életre szóló nyomot hagyni valakiben.',
        experienceAndStudies: 'Szakmai Tapasztalat',
        education: 'Tanulmányok',
        futureGoals: 'Jövőbeli Célok',
        futureGoalsDescription: 'Folyamatosan fejlesztem a tudásom, szeretnék magas szintű ismereteket elsajátítani mind a programozás, mind a játékfejlesztés egyes részein belül.\n' +
            'Hosszú távú célom, hogy egyedi, nagy hatású, kiemelkedő történettel és atmoszférával rendelkező játékokat hozzak létre.',

        // 404 - Not Found Page
        notFoundMsg: 'A keresett oldal nem található.',
        backToHome: 'Vissza a főoldalra',

    },

    en: {
        // Navbar
        home: 'Home',
        work: 'Work',
        webDevelopment: 'Web Development',
        gameDevelopment: 'Game Development',
        about: "About Me",
        switchLanguage: "Switch to another language",

        // Home page
        name: 'Dominik Németh',
        introduction: 'Hello! I\'m Dominik, a web developer and digital creator.\n' +
            'I love working on creative projects, whether it\'s web development, game development, or even cinematography.\n' +
            'I\'m passionate about the arts and always strive to see the world through an artistic lens.\n' +
            'I\'m constantly seeking new challenges and opportunities to grow and create something unique.\n' +
            'When I\'m not immersed in lines of code, I’m usually learning something new or working on a creative idea.',

        // Web Development Page

        // About page
        motivationTitle: 'Motivation',
        motivationFirstP: 'In my free time, I enjoy reading, watching movies, and playing video games, from which I draw inspiration. I’m particularly drawn to the thriller, sci-fi, and horror genres, as they often explore deeper thoughts, philosophical questions, and human emotions that impact how we live our lives (even subconsciously).' ,
        motivationSecondP: 'I want to create works that have a real impact on people’s lives. I aim not only to entertain but to provoke thought, evoke emotions, and even change someone’s perspective. I know that a well-crafted story or experience can inspire, guide, and leave a lasting impression on someone.',
        experienceAndStudies: 'Professional Experience',
        education: 'Education',
        futureGoals: 'Future Goals',
        futureGoalsDescription: 'I am constantly improving my knowledge and aim to acquire advanced expertise in both programming and various aspects of game development.\n' +
            'My long-term goal is to create unique, impactful games with exceptional stories and atmospheres.',

        // 404 - Not Found Page
        notFoundMsg: 'The page you are looking for could not be found.',
        backToHome: 'Back to the homepage',
    }
}

const i18n = createI18n({
    locale: 'hu',
    fallbackLocale: 'en',
    messages,
})

export default i18n
