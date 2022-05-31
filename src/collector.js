const collector = (()=>{
    const getDataForNewCategory = ()=>{
        return {
            title:document.querySelector('#input_category').value,
        }
    }

    const getDataForItem = ()=>{
        return{
            title:document.querySelector('#input_title').value,
            dueDate:document.querySelector('#input_dueDate').value,
            description:document.querySelector('#input_description').value,
            get category_id(){
                //c'est ici
                const ps = [...document.querySelectorAll("#categories_container p")];
                let id;
                ps.forEach(e=>{
                    if(e.className.includes("bold")){
                        const category_id = e.parentNode.id;
                        id = category_id;
                    }
                })
                return id;
            },
            get priority(){
                let a = document.querySelector('#hight');
                let b = document.querySelector('#low');
               
                if(document.querySelector('#hight').checked){
                    return a.value;
                } 
                if(document.querySelector('#low').checked){
                    return b.value;
                }
                return 'low';
            }
        }
    }

    return{
        getDataForNewCategory,
        getDataForItem,
    }
})();

export default collector;