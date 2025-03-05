import{k as g}from"./kiosk_main-15c9dc19.js";import{G as p}from"./glightbox-d1fa783f.js";import{T as z}from"./TechSection-f14f9947.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";import{e as v,f as y,r as u,o as a,c as l,b as e,F as n,g as k,a as h,h as f,t as m,d as _}from"./runtime-core.esm-bundler-7ce0e83d.js";import"./skill-icon-467e4089.js";import"./vue-02e76274.js";import"./html-055a12e9.js";import"./js-e0bf548e.js";import"./docker-19fba0d0.js";import"./css-19fbf238.js";import"./tailwind-8fa25f6e.js";import"./raspberry-5f6dc085.js";import"./bash-ef25aae3.js";import"./figma-9da12e4f.js";const j={components:{TechSection:z},setup(){const r=v([{src:"/media/imgs/projects/web/kiosk_1.png",alt:"Kiosk kép 1"},{src:"/media/imgs/projects/web/kiosk_2.png",alt:"Kiosk kép 2"},{src:"/media/imgs/projects/web/kiosk_8.png",alt:"Kiosk kép 8"},{src:"/media/imgs/projects/web/kiosk_3.png",alt:"Kiosk kép 3"},{src:"/media/imgs/projects/web/kiosk_4.png",alt:"Kiosk kép 4"},{src:"/media/imgs/projects/web/kiosk_5.png",alt:"Kiosk kép 5"},{src:"/media/imgs/projects/web/kiosk_6.png",alt:"Kiosk kép 6"},{src:"/media/imgs/projects/web/kiosk_7.png",alt:"Kiosk kép 7"}]);return y(()=>{p({selector:".glightbox",closeEffect:"zoom",loop:!0})}),{images:r}},data(){return{kiosk_main:g,features:["Információ átadás","ÁSZF megtekintése","Panaszkezelés","Validált beviteli mezők",":mailTo linkek letiltva","Egyedi Chrome Extension a navigáció és a megnyíló oldalak korlátozására","Saját készítésű háttérvideó","PDF dokumentumok megnyitása modálban","Automatikus visszaállás főoldalra","Beépített virtuális billentyűzet (KioskBoard)","Érintésre optimalizált UI"]}}},w={class:"web-projects-page"},K={class:"project-content-wrapper"},A={class:"container"},x={class:"container py-5"},S={class:"row align-items-center"},E={class:"col-12 col-md-7 text-center"},T=["href"],B=["src"],P={class:"col-12 col-md-5"},V={class:"list-group project-glass-list"},F={class:"list-group-index"},C={class:"row py-4"},N={class:"row py-4"},q={class:"row justify-content-center"},D=["href"],I=["src","alt"];function L(r,t,M,d,i,O){const c=u("tech-section");return a(),l("div",w,[t[4]||(t[4]=e("div",{class:"header"},[e("h1",null,"Vásárlói Tájékoztató Kiosk"),e("p",null,"Érintőképernyős vásárlói tájékoztató Raspberry Pi-re")],-1)),e("div",K,[e("div",A,[e("div",x,[t[1]||(t[1]=e("h3",{class:"mb-3"},"Projekt funkciók",-1)),e("div",S,[e("div",E,[e("a",{href:i.kiosk_main,class:"glightbox"},[e("img",{src:i.kiosk_main,alt:"Kiosk",class:"img-fluid rounded shadow-lg project-img"},null,8,B)],8,T)]),e("div",P,[e("ul",V,[(a(!0),l(n,null,k(i.features,(s,o)=>(a(),l("li",{key:o,class:"list-group-item"},[e("span",F,"#"+m(o+1),1),_(" "+m(s),1)]))),128))])])]),e("div",C,[h(c)]),t[2]||(t[2]=f('<div class="row py-4"><h3 class="mb-3">Fejlesztési folyamat</h3><div class="development-process-text"><div class="mb-2">A projekt célja egy érintőképernyős, webes alapú vásárlói tájékoztató létrehozása volt Raspberry Pi alapokon, amelyet később az ügyfélszolgálati irodákban helyeztek el. A rendszer kizárólag a megadott információk megjelenítésére szolgál, nem engedi a felhasználóknak, hogy külső oldalakra navigáljanak vagy az eszköz operációs rendszeréhez hozzáférjenek. A felületet VUE és Tailwind CSS segítségével építettem fel. </div><div class="mb-2"> A főoldalra egy folyamatosan futó, egyedi háttérvideót készítettem, amit a ZNET Telekom meglévő videóiból állítottam össze 30 másodpercben. A kiosk létrehozása közben több olyan problémába is belebotlottam, amik megoldásával sokat tanultam mind a böngésző, mind a Raspbian OS rendszerről. </div><div class="mb-2"> Többek között: fontos volt, hogy a felhasználó ne tudja semmilyen körülmények között elhagyni a kiosk felületét. A PDF-ekben található :mailto linkek (e-mail címek) és az egyéb külső oldalakra mutató linkek azonban ezt nem tették lehetővé, ezért elő kellett állnom egy megoldással. A mailto linkek tiltására Írtam egy bash scriptet, ami megakadályozza, hogy a Chromium böngészőből e-mail kliens nyíljon meg, így a felhasználók nem tudnak külső programokat elérni. A külső weboldalak megnyílása egy öszetettebb probléma volt, így összetettebb megoldást is igényelt. JavaScript alapokon készítettem egy saját Chrome extensiont, amely tilt minden olyan próbálkozást, ami egy másik weboldal megnyitására irányul. Ha ilyen történne, a rendszer azonnal visszanavigál a főoldalra. </div><div> Az oldalak adatainak többsége egy könnyen hozzáférhető külső JavaScript tömbből töltődik. </div><div class="mb-2"> Mivel érintőképernyős, fizikai billentyűzet nélüli rendszerre kellett tervezni, ezért szükség volt a panaszkezelési &quot;form&quot; miatt beépíteni egy moduláris virtuális billentyűzetet, ami kompatibilis VUE-vel. Erre a célra a legalkalmasabbnak a <a class="toOutsideLink" href="https://furcan.github.io/KioskBoard/" target="_blank">KioskBoard</a> minősült. </div><div> A panaszkezelés &quot;form&quot; validációval van ellátva. A küldés gomb megnyomásával Axios kéréssel API-n keresztül kommunikál a weboldal megfelelő backend szegmensével. </div><div> Kérés volt az ügyfélszolgálat felől az is, hogy ha az ügyfelek használat után otthagyják a kioskokat, akkor egy bizonyos idő után álljanak vissza alapállapotba. Ezért, úgy hozam létre a projektet, hogy az oldal 15 perc inaktivitás után automatikusan visszatér a főoldalra. </div></div></div>',1)),e("div",N,[t[0]||(t[0]=e("h3",{class:"mb-5"},"Képernyőképek",-1)),e("div",q,[(a(!0),l(n,null,k(d.images,(s,o)=>(a(),l("div",{key:o,class:"col-md-4 col-sm-6 mb-4"},[e("a",{href:s.src,class:"glightbox","data-gallery":"gallery1"},[e("img",{src:s.src,class:"img-fluid rounded shadow",alt:s.alt},null,8,I)],8,D)]))),128))])])]),t[3]||(t[3]=e("div",null," végén iframe nem listázott - 4. Még jobb lenne egy videós bemutató Egy rövid videó (30-60 mp) a projekt működéséről OBS Studio vagy Screenity bővítménnyel felveheted Ha YouTube-ra feltöltöd, beágyazhatod az oldalra ",-1))])])])}const le=b(j,[["render",L]]);export{le as K};
