import{a as w,S as q,i as n}from"./assets/vendor-CrlV4O_2.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&d(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const L="49488951-e375fee229e59287138537a31",x="https://pixabay.com/api/";async function m(r,s=1){try{return(await w.get(x,{params:{key:L,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s}})).data}catch(a){throw console.error("Error fetching images:",a),a}}const y=document.querySelector(".gallery");document.querySelector(".loader");document.querySelector(".load-more");let v=new q(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function E(){y.innerHTML=""}function f(r,s=!1){const a=r.map(({webformatURL:d,largeImageURL:e,tags:t,likes:l,views:h,comments:b,downloads:S})=>`
      <li class="gallery-item">
        <a href="${e}" class="gallery-link">
          <img src="${d}" alt="${t}" class="gallery-image" width="360" height="200" />
        </a>
        <div class="info">
          <ul class="baner">
            <li class="baner-li">
              <p class="baner-title">Likes</p>
              <p class="baner-text">${l}</p>
            </li>
            <li class="baner-li">
              <p class="baner-title">Views</p>
              <p class="baner-text">${h}</p>
            </li>
            <li class="baner-li">
              <p class="baner-title">Comments</p>
              <p class="baner-text">${b}</p>
            </li>
            <li class="baner-li">
              <p class="baner-title">Downloads</p>
              <p class="baner-text">${S}</p>
            </li>
          </ul>
        </div>
      </li>`).join("");s?y.insertAdjacentHTML("beforeend",a):y.innerHTML=a,v.refresh()}const P=document.querySelector("#search-form");document.querySelector(".gallery");const o=document.querySelector(".load-more"),$=document.querySelector(".message"),c=document.querySelector(".loader");let u="",i=1;const g=15;let p=0;o.style.display="none";c.style.display="none";async function H(r){if(r.preventDefault(),u=r.currentTarget.elements["search-text"].value.trim(),!u){n.warning({title:"Warning",message:"Please enter a search query!"});return}i=1,E(),o.style.display="none",c.style.display="block",$.textContent="";try{const s=await m(u,i);if(p=s.totalHits,s.hits.length===0){n.error({title:"Error",message:"No images found. Try another search!"});return}f(s.hits),p>g&&(o.style.display="block")}catch{n.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{c.style.display="none"}}async function I(){i+=1,o.style.display="none",c.style.display="block";try{const r=await m(u,i);f(r.hits,!0),i*g>=p?(o.style.display="none",n.info({title:"Info",message:"We're sorry, but you've reached the end of search results."})):o.style.display="block",M()}catch{n.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{c.style.display="none"}}function M(){const r=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}P.addEventListener("submit",H);o.addEventListener("click",I);
//# sourceMappingURL=index.js.map
