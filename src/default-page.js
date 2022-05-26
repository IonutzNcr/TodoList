// default page 
import appender from "./appender";
import category from "./category";
import stock from "./stock";
import utility from "./utility";
import events from "./events";

const default_page = ()=>{

    const sideba = sidebar();

    const div_principal = mainSection();
    
    
    
    

    document.querySelector("body").appendChild(sideba);
    document.querySelector("body").appendChild(div_principal);
    
}






export default default_page;

const createInput = (name,id,div_id)=>{ // modifie or conflits
    const div = utility.createElmt("div",div_id);
    const input = utility.createElmt("input",id);
    const label = document.createElement("label");
    label.setAttribute("for",id); 
    label.textContent = name;
    appendFct(div,label,input);
    return div;

}

const appendFct=(arg1,...arg2)=>{
    for(let i=0;i<arg2.length;i++){
        arg1.appendChild(arg2[i]);
    }
    
}

function sidebar(){
    const sidebar = utility.createElmt("div","sidebar");
    const div_title = utility.createElmt("div","title");
    const div_container_input = utility.createElmt("div","input-title-container");
    const div_input = createInput("Title: ","input-title","div-input-title");//ca a modifier or conflits 
    const title = utility.createElmt("h2","title-category","Categories");
    const div_categories = utility.createElmt("div","categories_container")
    const button = utility.createElmt("button","create-new-category","Create");

    //la grosse parentese...
    button.addEventListener("click",()=>{
        const title = prompt("Title : ");
        const categ = category(title,stock.length);//la peut-etre il va falloir créer un html element 
        stock.push(categ);
        appender.appendCategory(categ);
    })
    //fermeture de la grosse parenthese
    appendFct(div_title,title);
    appendFct(div_container_input,div_input,button);
    appendFct(sidebar,div_container_input,div_title,div_categories);

    return sidebar;
}

function mainSection(){
    const div_principal = utility.createElmt("div","principal");

    const main_inputs = utility.createElmt("div","main-inputs");
    const title_todo = createInput("Title: ","title-todo","div-title-todo");
    const desc_todo = createInput("Description: ","desc-todo","div-desc-todo");
    const button = utility.createElmt("button","create-new-item","ADD");
    button.addEventListener("click",events.add_item.bind(null,button));
    const main = utility.createElmt("div","main");

    appendFct(main_inputs,title_todo,desc_todo,button);
    appendFct(div_principal,main_inputs,main);

    return div_principal;
}