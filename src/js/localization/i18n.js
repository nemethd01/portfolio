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
        viewOnGitHub: 'Nézd meg GitHubon',
        projectFeatures: 'Projekt funkciók',
        developmentProcess: 'Fejlesztési folyamat',
        screenshots: 'Képernyőképek',
        technologiesUsed: "Használt technológiák",

        // Web Development Page
        languagesAndTechnology: 'Programozási nyelvek és Technológiák',
        frameworksAndLibs: 'Keretrendszerek és Könyvtárak',
        toolsAndEnvironments: 'Fejlesztői Eszközök és Környezetek',
        versionControlAndPm: 'Verziókezelés és Project Management',
        otherTools: 'Egyéb Eszközök',
        operatingSystems: 'Operációs rendszerek',
        otherSkillsAndKnowledge: 'Egyéb készségek és ismeretek',
        basics: 'Alapok',

        webOtherSkills: {
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

        webProjects: {
            queueScheduleTitle: "Beosztás naptár lefedettség jelzéssel",
            kioskTitle: "Vásárlói Tájékoztató Kiosk",
            fileManagerTitle: "File Manager",
            numbersToStringsTitle: "Számok kiírása string-el",
            calcAndRandomNumberTitle: "Számológép és random szám generátor PHP-vel",
        },
        // WP - QueueSchedule
        WPQueueHeading: "Beosztás megjelenítő napi és heti nézetben, lefedettségi időszak jelzéssel",
        WPQueueDevProcess1: "A beosztás lefedettséget megjelenítő projekt egy kérésre készült. Az igény egy olyan heti és napi nézetben is elérhető táblázatra irányult, ami képes megfelelően kezelni a dolgozók készenléti beosztását, pontosan és átláthatóan megjeleníti az adott idő intervallumot, bármilyen jelenleg meglévő (legacy és modern) webes felületre beilleszthető legyen, valamint láthatóak a lefedett és üres idő intervallumok.\n" +
            "Első lépésként Figma-ban készítettem egy látványtervet az igénylő elképzelései alapján, majd ennek prezentálása után neki láttam a dinamikus táblázat létrehozásának.",
        WPQueueDevProcess2: "A dolgozók beosztásai megjelenítésére kék háttérszínű kártyákat hoztam létre, amelyek a kezdőidőpont napján, megfelelő helyen és szélességben jelennek meg.\n" +
            "Problémaként merült fel, hogy a rövidebb időszakokra vonatkozó beosztások heti nézetben kisebb képernyőkön nem fértek ki megfelelően. Ezt a problémát az alábbi CSS megoldással kezeltem:",
        WPQueueDevProcess3: "Amint a \"@container\" érzékeli, hogy a kártya 40px-nél kisebbre szűkül (tehát a kezdő és a befejező időpont már nem fér bele jól olvashatóan), elrejti először a string-két megjelenő időpontokat, majd 10px alatt a megjelenő svg ikonokat is eltünteti. Ezek az elemek \":hover\" eseményre jelennek meg újra, biztosítva az olvashatóságot.",
        WPQueueDevProcess4: "A legnagyobb kihívást a megfelelő dátumkezelés jelentette számomra, amit JavaScript Date objektummal valósítottam meg.\n" +
            "A heti és napi nézet közötti váltás, az aktuális dátum kiemelése, valamint az előző és következő időszakok közötti navigáció pontos működése érdekében megfelelő logikát kellett kialakítani.\n" +
            "A rendszerben az aktuális dátumhoz viszonyítva számítódnak ki a hét napjai. Például a heti nézetben a hétfő mindig az adott hét első napja, míg a napi nézetben kizárólag az adott nap kerül kijelölésre. Ehhez az alábbi módszert alkalmaztam:",
        WPQueueDevProcess5: "Ez a függvény biztosítja, hogy a hét kezdőnapja mindig hétfő legyen, még akkor is, ha a hét bármely más napján hívjuk meg. Az így kapott kezdődátum alapján generálódik a teljes heti nézet.",
        WPQueueDevProcess6: "A napi nézet esetén az adott naphoz rendelt beosztások kerülnek kiemelésre. Az aktuális dátum kiemelésére külön osztályt alkalmaztam, így vizuálisan is azonnal felismerhető a mai nap:",
        WPQueueDevProcess7: "Ezzel a megoldással az aktuális nap oszlopa automatikusan kiemelődik a táblázatban.",
        WPQueueFeatures: {
            dailyAndWeeklyView: "Napi és heti nézet",
            timePeriodNavigation: "Időszak léptetés előre és hátra",
            resetTodayButton: "Vissza állítás a mai napra gomb",
            integratableIntoAnySystem: "Bármilyen meglévő rendszerbe beilleszthető",
            dataFromJsArray: "Az adatok egy JavaScript fájlból érkező tömbből származnak, így bármilyen struktúrált eseménylistát képes kezelni",
            highlightCurrentDay: "Aktuális nap kiemelve",
            displayCoveredPeriods: "Lefedett és lefedetlen időszakok megjelenítése",
            hoverOnSmallScreens: "Kis képernyőn \":hover\"-re megjelenő időpontok",
        },


        // Game Development Page
        gameEngine: 'Játék motor',
        graphicAnd3d: 'Grafikai és 3D Tervezés',
        narrativeAndGameplayDesign: 'Narratív és Játékmenet Design',
        debuggingAndTranslation: 'Debugging és Fordítás',
        multiMediaAndContentCreation: 'Multimédia és Tartalomkészítés',
        gaeaDescription: "Heightmap Generálás - alapok",
        pureRefDescription: "Referenciák és Tervezés",
        substancePainterDescription: "Textúrázás - alapok",
        photoshopDescription: "Concept Art, Sketching, Térképtervezés",
        kritaDescription: "Concept Art, Sketching",

        gameOtherSkills: {
            cinematography: "Cinematography",
            ruleOfThirds: "Rule of Thirds",
            lighting: "Világítás",
            composition: "Kompozíció",
            blocking: "Jelenetelrendezés",
            cameraAngles: "Kameraállások / Kamera szögek",

            levelDesign: "Level Design",
            blockout: "Blockout/Greybox",
            psychologicalTriggers: "Pszichológiai Tényezők (Előfeszítés - Priming, Előrevetítés)",
            layout: "Elrendezés",
            environmentalStorytelling: "Környezeti Történetmesélés",
            playerGuidance: "Játékos Útmutatás",

            gameDesign: "Game Design",
            mechanics: "Mechanikák",
            gameDesignDocument: "Játékmenet-tervezési Dokumentáció (GDD)",
            cognitiveBiases: "Kognitív Torzítások a Tervezésben (Előfeszítés, veszteségkerülés, kerethatás)",
            prototyping: "Prototípus készítés",

            storytelling: "Storytelling",
            narrativeDesign: "Narratív Tervezés",
            emotionalHooksAndPlayerEngagement: "Érzelmi Kapcsolódások és Játékos Elköteleződés",
            characterDevelopment: "Karakterfejlődés",
            worldBuilding: "Világépítés",

            other: "Egyéb",
            hardwareKnowledge: "Hardware-es ismeretek",
            cybersecurityKnowledge: "Cybersecurity alapismeretek",
            microsoftOffice: "Microsoft Office alkalmazások",
        },

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
        viewOnGitHub: 'View on GitHub',
        projectFeatures: 'Project Features',
        developmentProcess: 'Development Process',
        screenshots: 'Screenshots',
        technologiesUsed: "Technologies Used",

        // Web Development Page
        languagesAndTechnology: 'Programming Languages and Technologies',
        frameworksAndLibs: 'Frameworks and Libraries',
        toolsAndEnvironments: 'Developer Tools and Environments',
        versionControlAndPm: 'Version Control and Project Management',
        otherTools: 'Other Tools',
        operatingSystems: 'Operating Systems',
        otherSkillsAndKnowledge: 'Other Skills and Knowledge',
        basics: 'Basics',

        webOtherSkills: {
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
            cybersecurity: "Basic cybersecurity knowledge",
            microsoftOffice: "Microsoft Office applications",
        },

        webProjects: {
            queueScheduleTitle: "Schedule calendar with coverage indicators",
            kioskTitle: "Customer Information Kiosk",
            fileManagerTitle: "File Manager",
            numbersToStringsTitle: "Displaying numbers as a string",
            calcAndRandomNumberTitle: "Calculator and random number generator with PHP",
        },
        // WP - QueueSchedule
        WPQueueHeading: "Schedule Display in Daily and Weekly Views with Coverage Period Indicators",
        WPQueueDevProcess1: "The project displaying the schedule coverage was created upon request. The requirement was for a table available in both weekly and daily views, capable of properly handling employee on-call schedules, displaying the time intervals accurately and transparently, and being able to integrate into any currently existing (legacy and modern) web interface. It was also important to display both covered and empty time intervals.\n" +
            "As the first step, I created a mockup in Figma based on the client's specifications, and after presenting it, I started building the dynamic table.",
        WPQueueDevProcess2: "For displaying employee schedules, I created cards with a blue background, which appear on the starting time's day, in the appropriate position and width.\n" +
            "A problem arose where schedules for shorter periods did not fit properly on smaller screens in the weekly view. I handled this issue with the following CSS solution:",
        WPQueueDevProcess3: "As soon as the \"@container\" detects that the card narrows to below 40px (meaning the start and end times can no longer fit in a readable way), it first hides the time displayed as a string, and then, when the width reaches below 10px, the SVG icons are also hidden. These elements reappear on a \":hover\" event, ensuring readability.",
        WPQueueDevProcess4: "The biggest challenge for me was handling dates properly, which I implemented using the JavaScript Date object.\n" +
            "To ensure proper functioning of the switch between weekly and daily views, highlighting the current date, and navigating between the previous and next periods, I had to implement the correct logic.\n" +
            "The days of the week are calculated based on the current date. For example, in the weekly view, Monday is always the first day of the week, while in the daily view, only the selected day is highlighted. I used the following method for this:",
        WPQueueDevProcess5: "This function ensures that the start of the week is always Monday, even if called on any other day of the week. The full weekly view is generated based on this start date.",
        WPQueueDevProcess6: "For the daily view, the schedules for the selected day are highlighted. To highlight the current date, I applied a special class, so visually, today’s date can be immediately identified:",
        WPQueueDevProcess7: "With this solution, the column for the current day is automatically highlighted in the table.",
        WPQueueFeatures: {
            dailyAndWeeklyView: "Daily and weekly view",
            timePeriodNavigation: "Navigate time period forward and backward",
            resetTodayButton: "Reset to today button",
            integratableIntoAnySystem: "Integratable into any existing system",
            dataFromJsArray: "The data comes from an array in a JavaScript file, so it can handle any structured event list",
            highlightCurrentDay: "Highlight current day",
            displayCoveredPeriods: "Display covered and uncovered periods",
            hoverOnSmallScreens: "Hover tooltips on small screens",
        },

        // Game Development Page
        gameEngine: 'Game Engine',
        graphicAnd3d: 'Graphic and 3D Design',
        narrativeAndGameplayDesign: 'Narrative and Gameplay Design',
        debuggingAndTranslation: 'Debugging and Translation',
        multiMediaAndContentCreation: 'Multimedia and Content Creation',
        gaeaDescription: "Heightmap Generation - Basics",
        pureRefDescription: "References and Design",
        substancePainterDescription: "Texturing - Basics",
        photoshopDescription: "Concept Art, Sketching, Level plan",
        kritaDescription: "Concept Art, Sketching",

        gameOtherSkills: {
            title: "Cinematography",
            ruleOfThirds: "Rule of Thirds",
            lighting: "Lighting",
            composition: "Composition",
            blocking: "Blocking",
            cameraAngles: "Camera Angles",

            levelDesign: "Level Design",
            blockout: "Blockout/Greybox",
            psychologicalTriggers: "Psychological Triggers (Priming, Foreshadowing)",
            layout: "Layout",
            environmentalStorytelling: "Environmental Storytelling",
            playerGuidance: "Player Guidance",

            gameDesign: "Game Design",
            mechanics: "Mechanics",
            gameDesignDocument: "Game Design Documentation (GDD)",
            cognitiveBiases: "Cognitive Biases in Design (Priming, Loss Aversion, Framing Effect)",
            prototyping: "Prototyping",

            storytelling: "Storytelling",
            narrativeDesign: "Narrative Design",
            emotionalHooksAndPlayerEngagement: "Emotional Hooks & Player Engagement",
            characterDevelopment: "Character Development",
            worldBuilding: "Worldbuilding",

            other: "Other",
            hardwareKnowledge: "Hardware knowledge",
            cybersecurityKnowledge: "Basic Cybersecurity knowledge",
            microsoftOffice: "Microsoft Office applications",
        },

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
