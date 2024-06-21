export     const filterbySearch = async (info, search)=>{
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
