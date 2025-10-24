import{S as p,i as c}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const d="https://pixabay.com/api/",f="29734791-3fd561d0afce25ff9315d455c";function m(s){const o=new URLSearchParams({key:f,q:s.trim(),image_type:"photo",orientation:"horizontal",safesearch:"true"}),t=`${d}?${o.toString()}`;return fetch(t).then(i=>{if(!i.ok)throw new Error(`HTTP ${i.status}`);return i.json()})}function h(s){return s.map(({webformatURL:o,largeImageURL:t,tags:i,likes:e,views:r,comments:a,downloads:u})=>`
        <li class="gallery-item">
          <a href="${t}">
            <div class="img-wrapper">
              <img class="card-image" src="${o}" alt="${i}" />
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
        `).join("")}const n={form:document.querySelector(".search-form"),input:document.querySelector(".search-input"),submitBtn:document.querySelector(".search-button"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader-wrapper")};let y=new p(".gallery a",{captions:!0,captionsData:"alt",captionDelay:200});function g(){n.loader.classList.remove("visually-hidden")}function v(){n.loader.classList.add("visually-hidden")}function L(){n.gallery.innerHTML=""}function l(s){n.submitBtn.disabled=s,n.input.disabled=s}n.form.addEventListener("submit",s=>{s.preventDefault();const o=n.input.value.trim();if(!o){c.warning({message:"Please enter a search query!",position:"topRight"}),n.input.focus();return}L(),g(),l(!0),m(o).then(t=>{const i=Array.isArray(t==null?void 0:t.hits)?t.hits:[];if(i.length===0){c.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const e=h(i);n.gallery.innerHTML=e,y.refresh()}).catch(t=>{console.error(t),c.error({message:"Something went wrong. Please try again later",position:"topRight"})}).finally(()=>{v(),l(!1),n.input.value=""})});
//# sourceMappingURL=index.js.map
