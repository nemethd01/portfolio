import{_ as r}from"./_plugin-vue_export-helper-c27b6911.js";import{bc as o,b1 as l,ac as i,k as n,bI as d,ad as t,aQ as a,bo as s}from"./runtime-core.esm-bundler-2613ae3f.js";const _={props:{projectTitle:{type:String,default:"Example"},navigateTo:{type:String,default:"/"},projectImage:{type:String},projectTechnologies:{type:String,default:"Technologies"},routerClasses:{type:Array,default:[]},imgClasses:{type:Array,default:[]},cardBodyClasses:{type:Array,default:[]},cardTextClasses:{type:Array,default:[]}}},m={class:"container w-75 mb-4"},g={class:"card game-card d-flex flex-row align-items-center mb-3"},f=["src"],p={class:"card-title"};function u(y,C,e,h,x,T){const c=o("router-link");return l(),i("div",m,[n(c,{to:e.navigateTo,class:a([e.routerClasses])},{default:d(()=>[t("div",g,[t("img",{src:e.projectImage,class:a([e.imgClasses]),alt:"Project Image"},null,10,f),t("div",{class:a([e.cardBodyClasses])},[t("h5",p,s(e.projectTitle),1),t("p",{class:a(["card-text","fst-italic",e.cardTextClasses])},s(e.projectTechnologies),3)],2)])]),_:1},8,["to","class"])])}const v=r(_,[["render",u]]);export{v as p};
