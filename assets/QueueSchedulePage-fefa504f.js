import{Q as _}from"./queue_main-70c7d2d4.js";import{G as b}from"./glightbox-d1fa783f.js";import{T as g}from"./TechSection-f945874b.js";import{_ as v}from"./plugin-vueexport-helper-c27b6911.js";import{b8 as y,b as f,bc as w,b1 as r,ac as n,ad as s,bo as t,k,F as l,ba as p,ag as i,ah as P}from"./runtime-core.esm-bundler-2613ae3f.js";import"./skill-icon-19769e6e.js";import"./html-2018b70c.js";import"./css-e2e5e335.js";import"./js-86fbaf22.js";import"./figma-984d6341.js";const Q={components:{TechSection:g},setup(){const e=y([{src:"/media/imgs/projects/web/queue_main.png",alt:"Beosztás lefedettség kép 1"},{src:"/media/imgs/projects/web/queue_1.png",alt:"Beosztás lefedettség kép 2"},{src:"/media/imgs/projects/web/queue_2.png",alt:"Beosztás lefedettség kép 3"},{src:"/media/imgs/projects/web/queue_3.png",alt:"Beosztás lefedettség kép 4"},{src:"/media/imgs/projects/web/queue_4.png",alt:"Beosztás lefedettség kép 5"},{src:"/media/imgs/projects/web/queue_5.png",alt:"Beosztás lefedettség kép 6"}]);return f(()=>{b({selector:".glightbox",closeEffect:"zoom",loop:!0})}),{images:e}},data(){return{Queue_main:_,features:["dailyAndWeeklyView","timePeriodNavigation","resetTodayButton","integratableIntoAnySystem","dataFromJsArray","highlightCurrentDay","displayCoveredPeriods","hoverOnSmallScreens"]}},computed:{translatedFeatures(){return this.features.map(e=>this.$t(`WPQueueFeatures.${e}`))}}},$={class:"web-projects-page"},S={class:"header"},D={href:"https://github.com/nemethd01/QueueSchedule.git",target:"_blank",class:"btn custom-button"},j={class:"project-content-wrapper"},W={class:"container"},B={class:"container py-5"},q={class:"mb-3"},z={class:"row align-items-center"},F={class:"col-12 col-md-7"},T={class:"text-center"},N=["href"],V=["src"],A={class:"row tech-section"},G={class:"col-12 col-md-5"},O={class:"list-group project-glass-list"},C={class:"list-group-index"},E={class:"row py-4"},H={class:"mb-3"},L={class:"development-process-text"},I={class:"mb-2"},M={class:"mb-2"},x={class:"mb-2"},J={class:"mb-2"},K={class:"mb-2"},R={class:"mb-2"},U={class:"mb-2"},X={class:"row mb-5 py-4"},Y={class:"mb-5"},Z={class:"row justify-content-center"},ss=["href"],es=["src","alt"],ts={class:"text-center"},as={href:"https://github.com/nemethd01/QueueSchedule.git",target:"_blank",class:"btn custom-button"};function os(e,a,rs,u,d,m){const h=w("tech-section");return r(),n("div",$,[s("div",S,[s("h1",null,t(e.$t("webProjects.queueScheduleTitle")),1),s("p",null,t(e.$t("WPQueueHeading")),1),s("a",D,t(e.$t("viewOnGitHub")),1)]),s("div",j,[s("div",W,[s("div",B,[s("h3",q,t(e.$t("projectFeatures")),1),s("div",z,[s("div",F,[s("div",T,[s("a",{href:d.Queue_main,class:"glightbox"},[s("img",{src:d.Queue_main,alt:"Schedule calendar with coverage indicators",class:"img-fluid rounded shadow-lg project-img"},null,8,V)],8,N)]),s("div",A,[k(h)])]),s("div",G,[s("ul",O,[(r(!0),n(l,null,p(m.translatedFeatures,(o,c)=>(r(),n("li",{key:c,class:"list-group-item"},[s("span",C,"#"+t(c+1),1),P(" "+t(o),1)]))),128))])])]),s("div",E,[s("h3",H,t(e.$t("developmentProcess")),1),s("div",L,[s("div",I,t(e.$t("WPQueueDevProcess1")),1),s("div",M,t(e.$t("WPQueueDevProcess2")),1),a[0]||(a[0]=i('<div class="mb-2"><div class="code-block"><span class="keyword">@container</span> (max-width: 40px) {<br><span class="selector">.start-time span, .end-time span</span> {<br>   display: none;<br> }<br> }<br><br><span class="keyword">@container</span> (max-width: 10px) {<br><span class="selector">.start-time img, .end-time img</span> {<br>   display: none;<br> }<br> } </div></div>',1)),s("div",x,t(e.$t("WPQueueDevProcess3")),1),s("div",J,t(e.$t("WPQueueDevProcess4")),1),a[1]||(a[1]=i('<div class="mb-2"><div class="code-block"><span class="keyword">function</span> getWeekStart(date) {<br>   <span class="keyword">const</span> day = date.getDay();<br>   <span class="keyword">const</span> diff = date.getDate() - day + (day === 0 ? -6 : 1); <span class="comment">// Monday is the first day</span><br>   <span class="keyword">return</span> <span class="keyword">new</span> Date(date.setDate(diff));<br> } </div></div>',1)),s("div",K,t(e.$t("WPQueueDevProcess5")),1),s("div",R,t(e.$t("WPQueueDevProcess6")),1),a[2]||(a[2]=i('<div class="mb-2"><div class="code-block"><span class="keyword">const</span> today = <span class="keyword">new</span> Date().toISOString().split(<span class="string">&#39;T&#39;</span>)[0];<br><span class="keyword">const</span> headers = document.querySelectorAll(<span class="string">&#39;.date-header&#39;</span>);<br><br> headers.forEach(header =&gt; {<br>   <span class="keyword">if</span> (header.dataset.date === today) {<br>     header.classList.add(<span class="string">&#39;today-header&#39;</span>);<br>   }<br> }); </div></div>',1)),s("div",U,t(e.$t("WPQueueDevProcess7")),1)])]),s("div",X,[s("h3",Y,t(e.$t("screenshots")),1),s("div",Z,[(r(!0),n(l,null,p(u.images,(o,c)=>(r(),n("div",{key:c,class:"col-md-4 col-sm-6 mb-4"},[s("a",{href:o.src,class:"glightbox","data-gallery":"gallery1"},[s("img",{src:o.src,class:"img-fluid rounded shadow",alt:o.alt},null,8,es)],8,ss)]))),128))])]),s("div",ts,[s("a",as,t(e.$t("viewOnGitHub")),1)])])])])])}const bs=v(Q,[["render",os]]);export{bs as Q};
