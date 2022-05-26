import events from "./events";
import utility from "./utility";



const appender = (function (){
    return {
        appendCategory: obj=>{
            const div = utility.createElmt("div",obj.id);
            
            const p = document.createElement("p");
            p.textContent = obj.title;
            p.addEventListener("click",events.display.bind(null,p));
                
       
            const button_remove = document.createElement("button");
            button_remove.textContent = "X";
            const button_update = document.createElement("button");
            button_update.textContent = "U";

            div.appendChild(p);
            div.appendChild(button_remove);
            div.appendChild(button_update);

            button_remove.addEventListener("click",events.remove_category.bind(null,button_remove));
            button_update.addEventListener("click",events.update_category.bind(null,button_update));


            document.querySelector("#categories_container").appendChild(div);
        },
        appendItems: arr=>{
            arr.forEach(item=>{
                const div = document.createElement("div");
                div.setAttribute("data-id",item.id);
                div.setAttribute("class",item.category_id);
                const p = document.createElement("p");
                p.textContent = item.title;
                const d = document.createElement("p");
                d.textContent = item.description;
                const button_remove = document.createElement("button");
                button_remove.textContent= "remove";
                button_remove.addEventListener("click",events.remove_item.bind(null,button_remove));

                div.appendChild(p);
                div.appendChild(d);
                div.appendChild(button_remove);
                document.querySelector("#main").appendChild(div);
            })

            
        },
        append_empty_div(obj){
            const div = document.createElement("div");
            div.setAttribute("class",obj.id);
            document.querySelector("#main").appendChild(div);
           
        }

        
    }
})();

export default appender;