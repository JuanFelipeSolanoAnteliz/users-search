import { usergallery } from "./module/gallery.js";
import { filterbySearch } from "./module/diccionary__filter.js";


const getAlldata = async()=>{
    const url = await fetch(`https://6674179975872d0e0a950e53.mockapi.io/user`)
    
    let res = url;
    let data = await res.json()
    return data
};

let info = await getAlldata();
// console.log(info);
let main__gallery = document.querySelector("#main__gallery")
main__gallery.innerHTML = await usergallery(info)

let input__search = document.querySelector("#input__search")

input__search.addEventListener('input', async (inputFilter)=>{
    let search = (inputFilter.target.value).toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g,'');
    console.log(search)    
    const filterbySearch = async (info, search)=>{
        let emptyArray = [];
    
        info.forEach(element => {
            // console.log(element.name_full)
            if(element.name_full.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g,'').includes(search)|| 
               element.description.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g,'').includes(search)){
                emptyArray.push(element) 
            };
        });
        return emptyArray;
    };
    
    let contentFilter = await filterbySearch(info, search);
    console.log(contentFilter)

    const galleryAfterSearch = async (contentFilter)=>{
        let plantilla ='';
        contentFilter.forEach(element => {
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
    
    main__gallery.innerHTML = (await galleryAfterSearch(contentFilter))
})

