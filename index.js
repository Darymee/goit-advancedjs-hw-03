/* empty css                      */import{S as p,i as l}from"./assets/vendor-5ObWk2rO.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const d={BASE_URL:"/goit-advancedjs-hw-03/",DEV:!1,MODE:"production",PROD:!0,SSR:!1},f="https://pixabay.com/api/",m="29734791-3fd561d0afce25ff9315d455c";console.log("Pixabay key:",d);function h(s){const i=new URLSearchParams({key:m,q:s.trim(),image_type:"photo",orientation:"horizontal",safesearch:"true"}),t=`${f}?${i.toString()}`;return fetch(t).then(o=>{if(console.log(o),!o.ok)throw new Error(`HTTP ${o.status}`);return o.json()})}function y(s){return s.map(({webformatURL:i,largeImageURL:t,tags:o,likes:e,views:r,comments:a,downloads:u})=>`
        <li class="gallery-item">
          <a href="${t}">
            <div class="img-wrapper">
              <img class="card-image" src="${i}" alt="${o}" />
            </div>
            <div class="card-bottom">
              <div class="info">
                <p>Likes</p>
                <span>${e}</span>
              </div>
              <div class="info">
                <p>Views</p>
                <span>${r}</span>
              </div>
              <div class="info">
                <p>Comments</p>
                <span>${a}</span>
              </div>
              <div class="info">
                <p>Downloads</p>
                <span>${u}</span>
              </div>
            </div>
          </a>
        </li>
        `).join("")}const n={form:document.querySelector(".search-form"),input:document.querySelector(".search-input"),submitBtn:document.querySelector(".search-button"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader-wrapper")};let g=new p(".gallery a",{captions:!0,captionsData:"alt",captionDelay:200});function v(){n.loader.classList.remove("visually-hidden")}function L(){n.loader.classList.add("visually-hidden")}function S(){n.gallery.innerHTML=""}function c(s){n.submitBtn.disabled=s,n.input.disabled=s}n.form.addEventListener("submit",s=>{s.preventDefault();const i=n.input.value.trim();if(!i){l.warning({message:"Please enter a search query!",position:"topRight"}),n.input.focus();return}S(),v(),c(!0),h(i).then(t=>{const o=Array.isArray(t==null?void 0:t.hits)?t.hits:[];if(o.length===0){l.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const e=y(o);n.gallery.innerHTML=e,g.refresh()}).catch(t=>{console.error(t),l.error({message:"Something went wrong. Please try again later",position:"topRight"})}).finally(()=>{L(),c(!1),n.input.value=""})});
//# sourceMappingURL=index.js.map
