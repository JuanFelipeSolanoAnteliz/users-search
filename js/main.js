const url = await fetch(`https://6674179975872d0e0a950e53.mockapi.io/user`)

const getAlldata = async()=>{
    let res = url;
    let data = await res.json()
    return data
};

let info = await getAlldata();
console.log(info);

const usergallery = async(info)=>{
    let plantilla = '';
    info.forEach(element => {
        // console.log(element.avatar)
       plantilla +=/*html*/`
       <section id="main__section" class="main__section" >
       <article class="user__section" >
           <div class="user__image__container">
               <img src="${element.avatar}" >
           </div>
           <div class="user__data__viwer" >
               <h2 id="user__name">${element.name_full}</h2>
               <span id="user__description" >${element.description}</span>
           </div>
       </article>
       <span class="span"></span>
   </section>` 
    }); 
    return plantilla;
    
};

let main__gallery = document.querySelector("#main__gallery")
main__gallery.innerHTML = await usergallery(info)