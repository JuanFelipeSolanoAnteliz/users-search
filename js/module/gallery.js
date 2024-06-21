import { filterbySearch } from "./diccionary__filter.js";
export const usergallery = async(info)=>{
    let plantilla = '';
    info.forEach(element => {
        // console.log(element.avatar)
       plantilla +=/*html*/`
       <section id="main__section" class="main__section" >
       <article class="user__section" >
           <div class="user__image__container">
               <img id="user__image" src="${element.avatar}" >
           </div>
           <div class="user__data__viwer" >
               <h2 id="user__name">${element.name_full}</h2>
               <span id="user__description" >${element.description}</span>
           </div>
       </article>
       <span class="span"></span>
   </section>`;
    }); 
    return plantilla;
    
};

