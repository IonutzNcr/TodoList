import appender from "./appender";
import createItem from "./item";
import stock from "./stock";

const events = (function(){
    const remove_category = (obj)=>{
        let ind = obj.parentNode.id;
        
        document.querySelector("#categories_container").removeChild(obj.parentNode);
        stock.splice(ind,1);
        clearDom();
    }

    const update_category = (obj)=>{
        let ind = obj.parentNode.id;
        let para = obj.previousSibling.previousElementSibling;
        para.textContent = prompt("New Title : ");
        
        stock[+ind].title = para.textContent;
    }
    const display = (obj) =>{
        //conrol flow 
        
        let ind = obj.parentNode.id;
        let category = stock[+ind];
        let haveItems = category.items.length>0?true:false;
        
        let main  = document.querySelector("#main");
        let children = [...main.children];

        if(haveItems){
            children.forEach(e=>{main.removeChild(e)});
            appender.appendItems(category.items); 
        } else {
            children.forEach(e=>{main.removeChild(e)});
            appender.append_empty_div(stock[+ind]);
        }
    }

    const add_item = (obj)=>{
        const title = prompt("Title: ");
        const description = prompt("Description: " );
        //find algo
        /* trouve la categorie alaquelle il appartien
            ajoute lui un item 
            append les items*/
        let main  = document.querySelector("#main");
        

        /* let index = main.children[0].className */// comme ya plus d'add ca c undefined 
        console.log(main.children)
       /*  const category = stock[index];
        
        const new_item = createItem(title,description,category.items.length,category.id);
        category.addItems(new_item);
        //remove main 
        if(main.children.length>0){ //cette condition est toujours vraie donc inutile ; il faut enlevé, le if;
            let children = [...main.children];
            children.forEach(e=>{main.removeChild(e)});
            appender.appendItems(category.items); 
        }  */
    }

    const remove_item = (obj)=>{
        let category = stock[+obj.parentNode.className];
        let index = +obj.parentNode.dataset.id;

        let main  = document.querySelector("#main");
        let children = [...main.children];

        category.items.splice(index,1);

        let haveItems = category.items.length>0?true:false;

        if(haveItems){
            children.forEach(e=>{main.removeChild(e)});
            appender.appendItems(category.items); 
        } else {
            children.forEach(e=>{main.removeChild(e)});
            appender.append_empty_div(category);
        }
        
    }
    return {
        remove_category,
        update_category,
        display,
        add_item,
        remove_item,
    }
})()

export default events;


function clearDom(){
    let main  = document.querySelector("#main");
    let children = [...main.children];
    children.forEach(e=>{
        main.removeChild(e);
    })
}