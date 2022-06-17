import categoryFactory from "./category";
import collector from "./collector"
import controller from "./controller";
import itemFactory from "./item";
import categories from "./stock";
import appender from "./appender";
import create_default_category from "./default_category";
import { update_Storage } from "./localStorage";
import src2 from "./2.png";
import src1 from "./1.png";

const events = (()=>{
    const display_new_category = ()=>{
        const data = collector.getDataForNewCategory();
        if(data.title!=""){
            const category = categoryFactory(data.title,categories.length);
            _remove_bold();
            controller.add_category(category);   
            appender.append_category(category);
            appender.remove_items_from_DOM();
            appender.append_items(category);
            update_Storage();
        }
    };

    const display_new_item = ()=>{
        const data = collector.getDataForItem();
        if(data.title!=""){
            const category = categories[+data.category_id];
            const item = itemFactory(data.title,data.description,category.items.length,data.dueDate,data.priority);
            controller.add_item(category,item);
            controller.sort_items(category);
            appender.remove_items_from_DOM();
            appender.append_items(category);
            update_Storage();
        }
        
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
        update_Storage();
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
                update_Storage();
                return;
            } else {
                create_default_category();
                update_Storage();
                return;
            }
        } else {
            categories.forEach(e=>appender.append_category(e));
            update_Storage();
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
        update_Storage();
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
        div.classList.toggle("hidden");
        _change_icon(div,e);
    }

    const _change_icon =(div,button)=>{
        if(div.className.includes("hidden")){
            button.children[0].src=src1;    
        } else {
            button.children[0].src=src2;
        }
       
    }

    const check_item = (element) =>{
        if(element.className.includes("checked")){
            element.classList.remove("checked");
        } else {
            element.classList.add("checked");
        }
    }
    return{
        display_new_item,
        display_new_category,
        display_items,
        remove_category,
        remove_item,
        display_details,
        check_item
    }
})();


export default events;