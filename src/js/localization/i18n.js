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
        otherProjects: "További GitHub projektek",

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
        // WebP - QueueSchedule
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
        // WebP - Customer Information Kiosk
        WPKioskHeading: "Érintőképernyős vásárlói tájékoztató Raspberry Pi-re",
        WPKioskDevProcess1: "A projekt célja egy érintőképernyős, webes alapú vásárlói tájékoztató létrehozása volt Raspberry Pi alapokon, amelyet később az ügyfélszolgálati irodákban helyeztek el.\n" +
            "A rendszer kizárólag a megadott információk megjelenítésére szolgál, nem engedi a felhasználóknak, hogy külső oldalakra navigáljanak vagy az eszköz operációs rendszeréhez hozzáférjenek.\n" +
            "A felületet VUE és Tailwind CSS segítségével építettem fel.",
        WPKioskDevProcess2: "A főoldalra egy folyamatosan futó, egyedi háttérvideót készítettem, amit a ZNET Telekom meglévő videóiból állítottam össze 30 másodpercben.\n" +
            "A kiosk létrehozása közben több olyan problémába is belebotlottam, amik megoldásával sokat tanultam mind a böngésző, mind a Raspbian OS rendszerről.",
        WPKioskDevProcess3: "Többek között: fontos volt, hogy a felhasználó ne tudja semmilyen körülmények között elhagyni a kiosk felületét. A PDF-ekben található :mailto linkek (e-mail címek) és az egyéb külső oldalakra mutató linkek azonban ezt nem tették lehetővé, ezért elő kellett állnom egy megoldással.\n" +
            "A mailto linkek tiltására Írtam egy bash scriptet, ami megakadályozza, hogy a Chromium böngészőből e-mail kliens nyíljon meg, így a felhasználók nem tudnak külső programokat elérni.\n" +
            "A külső weboldalak megnyílása egy öszetettebb probléma volt, így összetettebb megoldást is igényelt. JavaScript alapokon készítettem egy saját Chrome extensiont, amely tilt minden olyan próbálkozást, ami egy másik weboldal megnyitására irányul. Ha ilyen történne, a rendszer azonnal visszanavigál a főoldalra.",
        WPKioskDevProcess4: "Az oldalak adatainak többsége egy könnyen hozzáférhető külső JavaScript tömbből töltődik.",
        WPKioskDevProcess5: "Mivel érintőképernyős, fizikai billentyűzet nélüli rendszerre kellett tervezni, ezért szükség volt a panaszkezelési \"form\" miatt beépíteni egy moduláris virtuális billentyűzetet, ami kompatibilis VUE-vel. Erre a célra legalkalmasabb megoldás volt a ",
        WPKioskDevProcess6: "A panaszkezelés \"form\" validációval van ellátva. A küldés gomb megnyomásával Axios kéréssel API-n keresztül kommunikál a weboldal megfelelő backend szegmensével.",
        WPKioskDevProcess7: "Kérés volt az ügyfélszolgálat felől az is, hogy ha az ügyfelek használat után otthagyják a kioskokat, akkor egy bizonyos idő után álljanak vissza alapállapotba.\n" +
            "Ezért, úgy hozam létre a projektet, hogy az oldal 15 perc inaktivitás után automatikusan visszatér a főoldalra.",
        WPKioskFeatures: {
            informationTransfer: "Információ átadás",
            termsAndConditions: "ÁSZF megtekintése",
            complaintManagement: "Panaszkezelés",
            validatedInputs: "Validált beviteli mezők",
            mailtoDisabled: ":mailTo linkek letiltva",
            chromeExtension: "Egyedi Chrome Extension a navigáció és a megnyíló oldalak korlátozására",
            backgroundVideo: "Saját készítésű háttérvideó",
            pdfModal: "PDF dokumentumok megnyitása modálban",
            returnToHome: "Automatikus visszaállás főoldalra",
            kioskBoard: "Beépített virtuális billentyűzet (KioskBoard)",
            touchOptimized: "Érintésre optimalizált UI"
        },
        // WebP - FileManager
        WPFileManagerHeading: "Egyszerű és modern fájlkezelő Vue + PHP alapokon.",
        WPFileManagerDevProcess1: "A File Manager projektem elsősorban PHP tanulási céllal készült. Megismerkedtem az objektum-orientált programozás (OOP) alapjaival, valamint az MVC-vel és a PDO-val, miközben az alkalmazás backend-jét fejlesztettem.\n" +
            "A projekt frontend Vue.js alapú, a backend pedig PHP-ban készült. Az MVC architektúra segített abban, hogy kód egyes részeit jól elkülöníthessem, ezzel tisztábbá és olvashatóbbá téve azt.",
        WPFileManagerDevProcess2: "Az alkalmazás létrehozásakor a célom az volt, hogy egy egyszerű fájlkezelő rendszert hozzak létre, ami lehetővé teszi a felhasználók számára a fájlok feltöltését, letöltését, valamint mappák kezelését (létrehozás, törlés).\n" +
            "A fájlok feltöltését több részből álló chunk-alapú feltöltési megoldással valósítottam meg, amelyet a FileController osztály kezeli.\n" +
            "Emellett a mappák megfelelő kezelése is fontos része a projektnek, amit a FolderController osztály biztosít.",
        WPFileManagerDevProcess3: "A fájlok kezelését egy adatbázis-alapú megoldás biztosítja, amely a fájlok nevét, méretét és egyedi azonosítóját tárolja.\n" +
            "Az adatbázis kapcsolatot a DB.php fájlban hoztam létre, ami PDO-t használ.",
        WPFileManagerDevProcess4: "A projekt készítése során ismerkedtem meg a PDO-val, amely segített a biztonságos adatbázis-műveletek végrehajtásában. A PDO biztosítja a SQL injection elleni védelmet.",
        WPFileManagerFeatures: {
            fileManagement: "Fájlkezelés",
            uploadAndDelete: "Fájl feltöltés és törlése",
            folderManagement: "Mappa létrehozása és törlése",
            navigationInFolders: "Mappákon belüli navigáció",
            sorting: "Rendezés név és dátum szerint",
            separatedFilesAndFolders: "Fájlok és mappák elválasztva",
            currentLevel: "Aktuális mappaszint (navigációs útvonal)",
            validatedInputs: "Validált beviteli mezők",
            uploadSeparation: "Feltöltött fájlok feltöltési idő szerint külön mappákban elválasztva (backend)",
            oopAndMvc: "OOP - MVC",
            autoload: "PHP autoload",
        },
        // WebP - NumbersToString
        WPNumbersToStringHeading: "Számok szöveggé alakítása a magyar helyesírás szabályai szerint",
        WPNumbersToStringDevProcess1: "A projekt elkészítésének célja a PHP nyelv tanulása volt, amin belül főként a stringkezelésen, a logikán és a nagyságrendi szabályok kezelésén volt a hangsúly.",
        WPNumbersToStringDevProcess2: "A program a megadott számot különböző helyiértékekre bontja (egységek, tizesek, százasok, ezresek, milliósok), majd a megfelelő magyar nyelvi szabályok alapján szöveggé alakítja.\n" +
            "Figyelembe veszi a magyar helyesírási szabályokat, például azt, hogy kétezerig egybeírjuk a számokat, azon túl viszont csak a kerek ezreseket és milliósokat kötjük össze.",
        WPNumbersToStringDevProcess3: "A rendszer GET-alapú bevitel segítségével dolgozza fel a felhasználó által megadott számot, és a megfelelő formátumban jeleníti meg az eredményt.\n" +
            "Az a felület egy egyszerű HTML-űrlapot tartalmaz számbevitelhez és a kiírt szöveg megjelenítéséhez, továbbá egy Reset gombot is.",
        WPNumbersToStringFeatures: {
            numbersToString: "Számok szöveggé alakítása a magyar helyesírás szabályai szerint",
            getInput: "GET-alapú bevitel és feldolgozás",
            correctSeparation: "Számok helyes elválasztása (kétezerig egybeírva, azon túl csak a kerek ezresek és milliók kötőjelesek)",
            formBased: "Űrlap alapú (számbevitel és kiírás)",
            reset: "Reset funkció",
            dynamicOutput: "Dinamikus HTML-kimenet",
        },
        // WebP - CalcAndRandomNum
        WPCalcAndRandomNumHeading: "Egyszerű matematikai műveletekkel operáló számológép és meghatározható mennyiségű páros szám generátor",
        WPCalcAndRandomNumDevProcess1: "A projekt elkészítésének célja a PHP nyelv tanulása volt. Ez az oldal két interaktív programot tartalmaz: egy véletlenszám-generátort és egy számológépet.",
        WPCalcAndRandomNumDevProcess2: "A véletlenszám-generátor lehetővé teszi a felhasználó számára, hogy egy számot adjon meg, ami meghatározza, hány véletlenszerű számot szeretne generálni.\n" +
            "A rendszer csak a páros számokat jeleníti meg.",
        WPCalcAndRandomNumDevProcess3: "A számológép lehetővé teszi, hogy a felhasználó egyszerű műveleteket végezzen (összeadás, kivonás, szorzás, osztás).\n" +
            "Számokat és műveleti jeleket adhatunk hozzá, és a program automatikusan kiszámolja az eredményt a megfelelő műveleti sorrendben.\n" +
            "A számológép a nullával történő osztás megkísérlése esetén hibát jelez.",
        WPCalcAndRandomNumDevProcess4: "Mindkét program kiszűri a nem számjegyeket a bevitelből, így csak érvényes számokat fogad el, továbbá mindegyik GET-alapú bevitel segítségével dolgozza fel a felhasználó által megadott számot, és a megfelelő formátumban jeleníti meg az eredményt.\n" +
            "Ha a felhasználó érvénytelen számot ad meg, akkor hibaüzenet figyelmezteti.",
        WPCalcAndRandomNumDevProcess5: "A fejlesztés során a legnagyobb kihívást az adta, hogy biztosítani kellett, hogy a felhasználók által megadott adatok mindig a megfelelő formátumban legyenek, és a műveletek a várt eredményt adják.\n" +
            "A véletlenszám-generátor esetében a számok kiszűrése és a páratlan számok megjelenítése, míg a számológépnél a műveletek megfelelő sorrendje és a hibák kezelése volt a legnagyobb munka.",
        WPCalcAndRandomNumFeatures: {
            randomNum: "Véletlenszám-generálás (csak páros)",
            validatedInputs: "Validált beviteli mezők",
            regex: "Regex használata",
            getBasedForms: "GET-alapú űrlapkezelés",
            reset: "Reset funkció",
            dynamicOutput: "Dinamikus HTML-kimenet",
            divisionByZero: "Nullával való osztás ellenőrzött és kezelve van",
            clearable: "Törölhető művelet",
            calcByPrior: "Eredmény kiszámítása az alapműveletek prioritásának megfelelően",
            simpleOperation: "Egyszerű matematikai műveletek végrehajtása (+, -, *, /)",
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
        otherProjects: "Other GitHub projects",

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
        // WebP - QueueSchedule
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
        // WebP - Customer Information Kiosk
        WPKioskHeading: "Touchscreen customer information system for Raspberry Pi",
        WPKioskDevProcess1: "The aim of the project was to create a touchscreen, web-based customer information system based on Raspberry Pi, which was later placed in customer service offices.\n" +
            "The system is solely intended for displaying the provided information and does not allow users to navigate to external websites or access the device's operating system.\n" +
            "I built the interface using VUE and Tailwind CSS.",
        WPKioskDevProcess2: "I created a continuously running custom background video for the homepage, which I compiled from existing videos of ZNET Telekom, lasting 30 seconds.\n" +
            "While creating the kiosk, I encountered several issues, the resolution of which taught me a lot about both the browser and the Raspbian OS.",
        WPKioskDevProcess3: "Among other things, it was important that the user should not be able to leave the kiosk interface under any circumstances. However, the :mailto links (email addresses) and other links pointing to external websites in the PDFs did not allow this, so I had to come up with a solution.\n" +
            "To block mailto links, I wrote a bash script that prevents the Chromium browser from opening the email client, so users cannot access external programs.\n" +
            "Opening external websites was a more complex issue, so it required a more sophisticated solution. I created my own Chrome extension based on JavaScript, which blocks any attempts to open another website. If this happens, the system immediately navigates back to the homepage.",
        WPKioskDevProcess4: "Most of the page data is loaded from an easily accessible external JavaScript array.",
        WPKioskDevProcess5: "Since the system had to be designed for a touchscreen, without a physical keyboard, it was necessary to integrate a modular virtual keyboard for the complaint management form, which is compatible with VUE. The most suitable option for this purpose was ",
        WPKioskDevProcess6: "The complaint management system is equipped with form validation. By pressing the submit button, the system communicates with the appropriate backend segment of the website through an API using an Axios request.",
        WPKioskDevProcess7: "The customer service also requested that if customers leave the kiosks after use, the system should revert to its default state after a certain amount of time.\n" +
            "Therefore, I designed the project so that the page automatically returns to the homepage after 15 minutes of inactivity.",
        WPKioskFeatures: {
            informationTransfer: "Information transfer",
            termsAndConditions: "View Terms and Conditions",
            complaintManagement: "Complaint management",
            validatedInputs: "Validated input fields",
            mailtoDisabled: ":mailTo links disabled",
            chromeExtension: "Custom Chrome Extension to restrict navigation and opened pages",
            backgroundVideo: "Custom background video",
            pdfModal: "Opening PDF documents in a modal",
            returnToHome: "Automatic return to homepage",
            kioskBoard: "Built-in virtual keyboard (KioskBoard)",
            touchOptimized: "Touch-optimized UI"
        },
        // WebP - FileManager
        WPFileManagerHeading: "Simple and modern file manager based on Vue + PHP.",
        WPFileManagerDevProcess1: "My File Manager project was primarily created for learning PHP. I became familiar with the basics of object-oriented programming (OOP), as well as MVC and PDO, while developing the application's backend.\n" +
            "The project’s frontend is based on Vue.js, while the backend was developed in PHP. The MVC architecture helped me separate different parts of the code, making it cleaner and more readable.",
        WPFileManagerDevProcess2: "When creating the application, my goal was to build a simple file management system that allows users to upload, download files, and manage folders (create, delete).\n" +
            "I implemented the file upload using a chunk-based solution, which is managed by the FileController class.\n" +
            "Proper folder management is also an important part of the project, which is handled by the FolderController class.",
        WPFileManagerDevProcess3: "The management of files is handled by a database-based solution that stores the files' names, sizes, and unique identifiers.\n" +
            "The database connection is established in the DB.php file, which uses PDO.",
        WPFileManagerDevProcess4: "During the project development, I became familiar with PDO, which helped me perform secure database operations. PDO provides protection against SQL injection.",
        WPFileManagerFeatures: {
            fileManagement: "File management",
            uploadAndDelete: "File upload and deletion",
            folderManagement: "Create and delete folder",
            navigationInFolders: "Navigation within folders",
            sorting: "Sorting by name and date",
            separatedFilesAndFolders: "Files and folders separated",
            currentLevel: "Current folder level (navigation path)",
            validatedInputs: "Validated input fields",
            uploadSeparation: "Uploaded files separated into different folders by upload time (backend)",
            oopAndMvc: "OOP - MVC",
            autoload: "PHP autoload",
        },
        // WebP - NumbersToString
        WPNumbersToStringHeading: "Converting numbers to text according to Hungarian spelling rules",
        WPNumbersToStringDevProcess1: "The goal of the project was to learn the PHP programming language, focusing mainly on string manipulation, logic, and handling magnitude rules.",
        WPNumbersToStringDevProcess2: "The program breaks down the given number into different place values (ones, tens, hundreds, thousands, millions), and then converts it into text according to the appropriate Hungarian language rules." +
            "It takes into account Hungarian spelling rules, such as writing numbers as a single word up to two thousand, while only linking round thousands and millions after that.",
        WPNumbersToStringDevProcess3: "The system processes the number entered by the user through GET-based input and displays the result in the appropriate format." +
            "The interface contains a simple HTML form for number input and the display of the converted text, along with a Reset button.",
        WPNumbersToStringFeatures: {
            numbersToString: "Converting numbers to text according to Hungarian spelling rules",
            getInput: "GET-based input and processing",
            correctSeparation: "Correct separation of numbers (written as one word up to two thousand, after that only round thousands and millions are hyphenated)",
            formBased: "Form-based (number input and output)",
            reset: "Reset function",
            dynamicOutput: "Dynamic HTML output",
        },
        // WebP - CalcAndRandomNum
        WPCalcAndRandomNumHeading: "A simple calculator performing basic mathematical operations and a generator for a definable quantity of even numbers",
        WPCalcAndRandomNumDevProcess1: "The goal of the project was to learn the PHP programming language. This page contains two interactive programs: a random number generator and a calculator.",
        WPCalcAndRandomNumDevProcess2: "The random number generator allows the user to input a number that defines how many random numbers they want to generate.\n" +
            "The system displays only even numbers.",
        WPCalcAndRandomNumDevProcess3: "The calculator allows the user to perform simple operations (addition, subtraction, multiplication, division).\n" +
            "Numbers and operators can be added, and the program automatically calculates the result according to the correct order of operations.\n" +
            "The calculator displays an error if an attempt is made to divide by zero.",
        WPCalcAndRandomNumDevProcess4: "Both programs filter out non-numeric characters from the input, accepting only valid numbers. They both process the number entered by the user through GET-based input and display the result in the appropriate format.\n" +
            "If the user enters an invalid number, an error message will warn them.",
        WPCalcAndRandomNumDevProcess5: "The biggest challenge during development was ensuring that the data entered by users was always in the correct format and that the operations returned the expected results.\n" +
            "In the case of the random number generator, filtering numbers and displaying only even numbers was the most significant task, while in the calculator, ensuring the correct order of operations and handling errors was the main focus.",
        WPCalcAndRandomNumFeatures: {
            randomNum: "Random number generation (even numbers only)",
            validatedInputs: "Validated input fields",
            regex: "Usage of regex",
            getBasedForms: "GET-based form handling",
            reset: "Reset function",
            dynamicOutput: "Dynamic HTML output",
            divisionByZero: "Division by zero checked and handled",
            clearable: "Clearable operation",
            calcByPrior: "Calculation of the result according to the priority of basic operations",
            simpleOperation: "Performing simple mathematical operations (+, -, *, /)",
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
