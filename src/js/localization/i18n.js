import { createI18n } from 'vue-i18n';

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


        // Projects common
        projectsHeaderTitle: 'Projektek',

        // Web Development Page
        languagesAndTechnology: 'Programozási nyelvek és Technológiák',
        frameworksAndLibs: 'Keretrendszerek és Könyvtárak',
        toolsAndEnvironments: 'Fejlesztői Eszközök és Környezetek',
        versionControlAndPm: 'Verziókezelés és Project Management',
        otherTools: 'Egyéb Eszközök',
        operatingSystems: 'Operációs rendszerek',
        otherSkillsAndKnowledge: 'Egyéb készségek és ismeretek',
        basics: 'Alapok',

        otherSkills: {
            vue: "Vue",
            router: "Router",
            optionAPI: "Option API",
            props: "Props",
            regex: "Regex",
            components: "Komponensek",
            slots: "Slotok",
            provideInject: "Provide - Inject",
            inputValidation: "Input validáció",

            phpLaravel: "PHP/Laravel",
            blade: "Blade",
            mvc: "MVC (Model-View-Controller)",
            oop: "OOP",
            pdo: "PDO",
            spa: "Single Page Applications (SPA)",
            autoload: "Autoload",
            validation: "Validáció",
            eloquent: "Eloquent",
            seeders: "Seeders",

            other: "Egyéb",
            hardware: "Hardware-es ismeretek",
            cybersecurity: "Cybersecurity alapismeretek",
            microsoftOffice: "Microsoft Office alkalmazások",
        },

        // Game Development Page
        gameEngine: 'Játék motor',
        graphicAnd3d: 'Grafikai és 3D Tervezés',
        narrativeAndGameplayDesign: 'Narratív és Játékmenet Design',
        debuggingAndTranslation: 'Debugging és Fordítás',
        multiMediaAndContentCreation: 'Multimédia és Tartalomkészítés',

        // About page
        motivationTitle: 'Motiváció',
        motivationFirstP: 'Szabadidőmben szeretek olvasni, filmeket nézni és videojátékozni, ezekből a tartalmakból merítek inspirációt.\n' +
            'Különösen a thriller, sci-fi és a horror műfajok állnak hozzám közel, mert ezek gyakran olyan mélyebb gondolatokkal, filozófiai kérdésekkel és emberi érzelmekkel foglalkoznak, amik hatással vannak arra (még ha tudat alatt is), ahogyan éljük az életünket.' ,
        motivationSecondP: 'Szeretnék én is olyan alkotásokat létrehozni, amelyek valódi hatással vannak az emberek életére. Nem csupán szórakoztatni szeretnék, hanem elgondolkodtatni, érzéseket kiváltani, és akár megváltoztatni valakinek a gondolkodását.\n' +
            'Tudom azt, hogy egy jól megalkotott történet vagy élmény képes inspirálni, irányt mutatni, és akár életre szóló nyomot hagyni valakiben.',
        experienceAndStudies: 'Szakmai Tapasztalat',
        education: 'Tanulmányok',
        experiences: {
            softwareDeveloperZNET: "Szoftverfejlesztő (Full Stack)",
            companyZNET: "ZNET Telekom Zrt., Győr",
            periodZNET: "2023 AUG. – ...",
            descriptionZNET: "Vállalatirányítási szoftver fejlesztésében való részvétel, meglévő szoftverek üzemeltetése és továbbfejlesztése, tanuló projektek készítése.",

            itSalesTechnician: "Informatikai értékesítő/szervizes",
            companyPCABC: "PC ABC Számítástechnika, Győr",
            periodPCABC: "2023 MÁJ. – 2023 JÚL.",
            descriptionPCABC: "Laptopok, számítógépek, perifériák értékesítése, építése, szervizelése. Ügyfelekkel való kapcsolattartás személyesen, telefonon és írásban.",
        },
        studies: {
            juniorFrontend: "Junior Frontend Fejlesztő",
            schoolJedlik: "Győri SZC Jedlik Ányos Gépipari és Informatikai Technikum, Győr",
            periodJedlik: "2022 DEC. – 2023 NOV.",
            descriptionJedlik: "HTML, CSS, SCSS, JavaScript, Python, Bootstrap, Vue.js keretrendszer alapszintű ismerete és webalkalmazások automatikus tesztelésének alapszintű megismerése.",

            highSchoolDiploma: "Érettségi + 4123 FEOR",
            schoolDeak: "Győri SZC Deák Ferenc Közgazdasági Technikum, Győr",
            periodDeak: "2017 SZEPT. – 2022 JÚN.",
            descriptionDeak: "Statisztikai, pénzügyi, marketinges, gazdaságinformatikai és vállalkozási ismeretek, valamint ECDL vizsga megszerzése.",

            ecdlCourse: "ECDL Tanfolyam",
            periodECDL: "2017 DEC. – 2019 MÁJ.",
            descriptionECDL: "ECDL - European Computer Driving Licence (7 modules)",
        },
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

        // Projects common
        projectsHeaderTitle: 'Projects',

        // Web Development Page
        languagesAndTechnology: 'Programming Languages and Technologies',
        frameworksAndLibs: 'Frameworks and Libraries',
        toolsAndEnvironments: 'Developer Tools and Environments',
        versionControlAndPm: 'Version Control and Project Management',
        otherTools: 'Other Tools',
        operatingSystems: 'Operating Systems',
        otherSkillsAndKnowledge: 'Other Skills and Knowledge',
        basics: 'Basics',

        otherSkills: {
            vue: "Vue",
            router: "Router",
            optionAPI: "Option API",
            props: "Props",
            regex: "Regex",
            components: "Components",
            slots: "Slots",
            provideInject: "Provide - Inject",
            inputValidation: "Input validation",

            phpLaravel: "PHP/Laravel",
            blade: "Blade",
            mvc: "MVC (Model-View-Controller)",
            oop: "OOP",
            pdo: "PDO",
            spa: "Single Page Applications (SPA)",
            autoload: "Autoload",
            validation: "Validation",
            eloquent: "Eloquent",
            seeders: "Seeders",

            other: "Other",
            hardware: "Hardware knowledge",
            cybersecurity: "Basic cybersecurity",
            microsoftOffice: "Microsoft Office applications",
        },

        // Game Development Page
        gameEngine: 'Game Engine',
        graphicAnd3d: 'Graphic and 3D Design',
        narrativeAndGameplayDesign: 'Narrative and Gameplay Design',
        debuggingAndTranslation: 'Debugging and Translation',
        multiMediaAndContentCreation: 'Multimedia and Content Creation',

        // About page
        motivationTitle: 'Motivation',
        motivationFirstP: 'In my free time, I enjoy reading, watching movies, and playing video games, from which I draw inspiration. I’m particularly drawn to the thriller, sci-fi, and horror genres, as they often explore deeper thoughts, philosophical questions, and human emotions that impact how we live our lives (even subconsciously).' ,
        motivationSecondP: 'I want to create works that have a real impact on people’s lives. I aim not only to entertain but to provoke thought, evoke emotions, and even change someone’s perspective. I know that a well-crafted story or experience can inspire, guide, and leave a lasting impression on someone.',
        experienceAndStudies: 'Professional Experience',
        education: 'Education',
        experiences: {
            softwareDeveloperZNET: "Software Developer (Full Stack)",
            companyZNET: "ZNET Telekom Zrt., Győr",
            periodZNET: "AUG 2023 – ...",
            descriptionZNET: "Participating in the development of enterprise resource planning (ERP) software, maintaining and improving existing software, and creation of student projects.",

            itSalesTechnician: "IT Sales/Technician",
            companyPCABC: "PC ABC Számítástechnika, Győr",
            periodPCABC: "MAY 2023 – JUL 2023",
            descriptionPCABC: "Sales, assembly, and servicing of laptops, computers, and peripherals. Communication with clients in person, by phone, and in writing.",
        },
        studies: {
            juniorFrontend: "Junior Frontend Developer",
            schoolJedlik: "Győri SZC Jedlik Ányos Gépipari és Informatikai Technikum, Győr",
            periodJedlik: "DEC 2022 – NOV 2023",
            descriptionJedlik: "Basic knowledge of HTML, CSS, SCSS, JavaScript, Python, Bootstrap, Vue.js framework, and basic understanding of automated web application testing.",

            highSchoolDiploma: "High School Diploma + 4123 FEOR",
            schoolDeak: "Győri SZC Deák Ferenc Közgazdasági Technikum, Győr",
            periodDeak: "SEP 2017 – JUN 2022",
            descriptionDeak: "Studies in statistics, finance, marketing, economic informatics, and entrepreneurship, as well as obtaining the ECDL certification.",

            ecdlCourse: "ECDL Course",
            periodECDL: "DEC 2017 – MAY 2019",
            descriptionECDL: "ECDL - European Computer Driving Licence (7 modules)",
        },
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
