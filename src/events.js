import categoryFactory from "./category";
import collector from "./collector"
import controller from "./controller";
import itemFactory from "./item";
import categories from "./stock";
import appender from "./appender";
import create_default_category from "./default_category";

const events = (()=>{
    const display_new_category = ()=>{
        const data = collector.getDataForNewCategory();
        const category = categoryFactory(data.title,categories.length);
        _remove_bold();
        controller.add_category(category);   
        appender.append_category(category);
        appender.remove_items_from_DOM();
        appender.append_items(category);
    };

    const display_new_item = ()=>{
        const data = collector.getDataForItem();
        console.log(data);
        const category = categories[+data.category_id];//undefined
        
        const item = itemFactory(data.title,data.description,category.items.length,data.dueDate,data.priority)
        controller.add_item(category,item);
        appender.remove_items_from_DOM();
        appender.append_items(category);
    };

    const display_items = (e) =>{
        //Cherche l'element qui donne la categorie 
        let index = +e.parentNode.id;
        const category = categories[index];
        //enleve tout les bold
        _remove_bold();
        //donne bold a cet element p;
        e.classList.add("bold");
        controller.update_bold(category);
        //remove all items from Dom
        appender.remove_items_from_DOM();
        //append its items
        appender.append_items(category);
    };

    const remove_category = (e) =>{
        let index = +e.parentNode.id;
        const category = categories[index]; // obj ( que je veux supprimer)
        let isThisCategoryBold = category.isBold; //true
        categories.splice(index,1);
        appender.remove_categories_from_DOM(); // nothing on the DOM

        
        controller.update_id();
        if(isThisCategoryBold){
            appender.remove_items_from_DOM();
            if(categories.length>0){
                categories[0].isBold = true;
                categories.forEach(e=>appender.append_category(e));
                appender.append_items(categories[0]);
                return;
            } else {
                create_default_category();
                return;
            }
        } else {
            categories.forEach(e=>appender.append_category(e));
            return;
        }
    };

    const remove_item =(e)=>{
        let category;
        for(let i = 0;i<categories.length;i++){
            if(categories[i].isBold){
                category = categories[i];
                break;
            }
        }
        let index = +e.parentNode.parentNode.dataset.id;
        category.items.splice(index,1);
        controller.update_item_id(category);
        appender.remove_items_from_DOM();
        appender.append_items(category);
    }

   

    const _remove_bold = ()=>{
        for(let i = 0;i<categories.length;i++){
            if(categories[i].isBold){
                controller.update_bold(categories[i]);
            } 
            const p = [...document.querySelectorAll("#categories_container p")];
            p.forEach(e=>{e.classList.remove("bold")});  
        }

    };

    const display_details = (e) =>{
        let div = e.parentNode.previousSibling;
        console.log(div)
        div.classList.toggle("hidden");
        _change_icon(div,e);
    }

    const _change_icon =(div,button)=>{
        if(div.className.includes("hidden")){
            button.textContent = "___";
        } else {
            button.textContent = '---';
        }
       
    }
    return{
        display_new_item,
        display_new_category,
        display_items,
        remove_category,
        remove_item,
        display_details,
    }
})();


export default events;