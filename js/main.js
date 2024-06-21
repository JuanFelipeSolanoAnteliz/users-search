import { usergallery } from "./module/gallery.js";


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

let user__name =document.querySelector("#user__name");
addEventListener('input', (inputFilter)=>{
    let search = inputFilter.target.value;
    console.log(search)    
    info.forEach(element => {

            if(element.name_full.includes(search)){

            }

    });
})