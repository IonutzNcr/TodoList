import events from "./events";
import src1 from "./1.png";


const appender = (()=>{
    const append_category = (category)=>{
        const div = document.createElement("div");
        div.setAttribute("id",category.id);
        const p = document.createElement("p");
        if(category.isBold){
            p.classList.add("bold");
        }
        p.textContent = `${category.title}`;
        p.addEventListener("click",events.display_items.bind(null,p));
        const button  = document.createElement("button");
        button.textContent = "X";
        button.addEventListener("click",events.remove_category.bind(null,button))

        div.appendChild(p);
        div.appendChild(button);

        document.querySelector("#categories_container").appendChild(div);
    }

    const remove_items_from_DOM = ()=>{
        const items = [...document.querySelectorAll("#items_container>div")];
        const container = document.querySelector("#items_container");
        items.forEach(e=>{
            container.removeChild(e);
        });
        
    }
    const append_items = (category)=>{
        category.items.forEach(e=>{
            const div = document.createElement("div");
            if(e.priority=="hight"){
                div.classList.add("green");
            }

           
            div.setAttribute("data-id",e.id);
            div.setAttribute("data-family",category.id);
            const div_visible = document.createElement("div");
            div_visible.classList.add("visible");
            const p_title = document.createElement("p");
            p_title.textContent = e.title;
            console.log(e.checklist)
            if(e.checklist==true){
                p_title.classList.add("checked");
            } else if(e.checklist==false){
                p_title.classList.remove("checked");
            }
            p_title.addEventListener("click",events.check_item.bind(null,p_title));
            const p_dueDate = document.createElement("p");
            p_dueDate.classList.add("date");
            p_dueDate.textContent = e.dueDate;
            const button_remove = document.createElement("button");
            button_remove.textContent = "x";
            button_remove.classList.add("remove_item");
            button_remove.addEventListener("click",events.remove_item.bind(null,button_remove));
            
            const div_hidden = document.createElement("div");
            div_hidden.classList.add("hidden");
            const p_description = document.createElement("p");
            p_description.textContent = e.description;
            p_description.classList.add("description");
            div_hidden.appendChild(p_description);

            const div_show_details = document.createElement("div");
            const button_show_details = document.createElement("button");
            /* button_show_details.textContent = '___'; */
            button_show_details.classList.add("details");
            button_show_details.addEventListener("click",events.display_details.bind(null,button_show_details));
            div_show_details.appendChild(button_show_details)
            const img = document.createElement("img");
            img.setAttribute("src",src1);
            button_show_details.appendChild(img);
            
            div_visible.appendChild(p_title);
            div_visible.appendChild(p_dueDate);
            div_visible.appendChild(button_remove);
            
            div.appendChild(div_visible);
            div.appendChild(div_hidden);
            div.appendChild(div_show_details);

            document.querySelector("#items_container").appendChild(div);
        })
    };

    const remove_categories_from_DOM=()=>{
        const categories = document.querySelectorAll("#categories_container>div")
        categories.forEach(e=>document.querySelector("#categories_container").removeChild(e));
    }

    return {
        append_category,
        append_items,
        remove_items_from_DOM,
        remove_categories_from_DOM,
    }
})();

export default appender;