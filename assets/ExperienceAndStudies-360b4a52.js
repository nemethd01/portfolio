import{u as d}from"./vue-i18n-18122535.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";import{b1 as n,ac as r,ad as e,bo as o,F as a,ba as p,ah as l}from"./runtime-core.esm-bundler-2613ae3f.js";const h={data(){return{experiences:[{position:"softwareDeveloperZNET",company:"companyZNET",period:"periodZNET",description:"descriptionZNET"},{position:"itSalesTechnician",company:"companyPCABC",period:"periodPCABC",description:"descriptionPCABC"}],studies:[{degree:"juniorFrontend",institution:"schoolJedlik",period:"periodJedlik",description:"descriptionJedlik"},{degree:"highSchoolDiploma",institution:"schoolDeak",period:"periodDeak",description:"descriptionDeak"},{degree:"ecdlCourse",institution:"schoolDeak",period:"periodECDL",description:"descriptionECDL"}]}},computed:{translatedExperiences(){const{t:i}=d();return this.experiences.map(t=>({position:i(`experiences.${t.position}`),company:i(`experiences.${t.company}`),period:i(`experiences.${t.period}`),description:i(`experiences.${t.description}`)}))},translatedStudies(){const{t:i}=d();return this.studies.map(t=>({degree:i(`studies.${t.degree}`),institution:i(`studies.${t.institution}`),period:i(`studies.${t.period}`),description:i(`studies.${t.description}`)}))}}},u={class:"experience-section"},m={class:"container mt-4"},x={class:"mb-4"},$={class:"card-body"},k={class:"card-title"},f={class:"fw-bold"},g={class:"card-subtitle"},C={class:"card-text mt-2"},D={class:"mt-4 mb-4"},E={class:"card-body"},v={class:"card-title"},S={class:"fw-bold"},b={class:"card-subtitle"},B={class:"card-text mt-2"};function N(i,t,T,y,A,c){return n(),r("div",u,[e("div",m,[e("h2",x,o(i.$t("experienceAndStudies")),1),(n(!0),r(a,null,p(c.translatedExperiences,s=>(n(),r("div",{key:s.position,class:"card mb-3"},[e("div",$,[e("h5",k,[l(o(s.position)+" | ",1),e("span",f,o(s.company),1)]),e("h6",g,o(s.period),1),e("p",C,o(s.description),1)])]))),128)),e("h2",D,o(i.$t("education")),1),(n(!0),r(a,null,p(c.translatedStudies,s=>(n(),r("div",{key:s.institution,class:"card mb-3"},[e("div",E,[e("h5",v,[l(o(s.degree)+" | ",1),e("span",S,o(s.institution),1)]),e("h6",b,o(s.period),1),e("p",B,o(s.description),1)])]))),128))])])}const J=_(h,[["render",N]]);export{J as e};
