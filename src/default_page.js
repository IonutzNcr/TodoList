import events from "./events";

const default_page = (()=>{
    const div1 = _inputForCategory();
    const div2 = _divForCategories();
    const div3 = _inputForItem();
    const div4 = _divForItems();

    document.querySelector("body").appendChild(div1);
    document.querySelector("body").appendChild(div2);
    document.querySelector("body").appendChild(div3);
    document.querySelector("body").appendChild(div4);
})()

export default default_page;

function _inputForCategory(){
    const div = document.createElement("div");
    div.setAttribute("id","container1");
    const form = document.createElement("form");
    const input = document.createElement("input");
    input.setAttribute("placeholder","Add a title...");
    input.setAttribute("id","input_category");
    input.setAttribute("required","");
    const button = document.createElement("button");
    button.setAttribute("type","submit");
    button.textContent = "Add";
    button.setAttribute("id","add_category");
    button.addEventListener("click",events.display_new_category);
    button.addEventListener("click",_clearInpus.bind(null,"category"));

    form.appendChild(input);
    form.appendChild(button);
    div.appendChild(form)

    return div;
}

function _inputForItem(){
    const div = document.createElement("div");
    div.setAttribute("id","container3");
    const form = document.createElement("form");
    const input = document.createElement("input");
    input.setAttribute("id","input_title");
    input.setAttribute("placeholder","Add a title...");
    input.setAttribute("required","");
    //a changer mais pour l'instant je mets un input (a changer avec un calendrier);
    const input_calendrier = document.createElement("input");
    input_calendrier.setAttribute("placeholder","Pick your due date...");
    input_calendrier.setAttribute("id","input_dueDate");
    input_calendrier.setAttribute("type","date");
    const input_description = document.createElement("textarea");
    input_description.setAttribute("placeholder","Description...");
    input_description.setAttribute("id","input_description");
    input_description.setAttribute("row","3");
    //radio stuff (I forgot how its working);
    const fieldset = document.createElement("fieldset");
    fieldset.setAttribute("id","fieldset");
    const legend = document.createElement("legend");
    legend.textContent = "Priority";

    const div_radio_1 = document.createElement("div");

    const radio_hight = document.createElement("input");
    radio_hight.setAttribute("id","hight");
    radio_hight.setAttribute("name","priority");
    radio_hight.setAttribute("value","hight");
    radio_hight.setAttribute("type","radio");
    const label_hight = document.createElement("label");
    label_hight.setAttribute("for","hight");
    label_hight.textContent = "Hight";
    div_radio_1.appendChild(radio_hight);
    div_radio_1.appendChild(label_hight);

    const div_radio_2 = document.createElement("div");

    const radio_low = document.createElement("input");
    radio_low.setAttribute("id","low");
    radio_low.setAttribute("name","priority");
    radio_low.setAttribute("value","low");
    radio_low.setAttribute("type","radio");
    const label_low = document.createElement("label");
    label_low.setAttribute("for","low");
    label_low.textContent = "Low";
    div_radio_2.appendChild(radio_low);
    div_radio_2.appendChild(label_low);

    fieldset.appendChild(legend);
    fieldset.appendChild(div_radio_1);
    fieldset.appendChild(div_radio_2);

    const add_btn = document.createElement("button");
    add_btn.setAttribute("id","add_item");
    add_btn.setAttribute("type","submit");
    add_btn.textContent = "Add";
    add_btn.addEventListener("click",events.display_new_item);
    add_btn.addEventListener("click",_clearInpus.bind(null,"item"))
    
    form.appendChild(input);
    form.appendChild(input_description);
    form.appendChild(input_calendrier); 
    form.appendChild(fieldset);
    form.appendChild(add_btn);
    div.appendChild(form);
    
    return div;
}

function _divForCategories(){
    const div = document.createElement("div");
    div.setAttribute("id","categories_container");
    
    return div;
}

function _divForItems(){
    const div = document.createElement("div");
    div.setAttribute("id","items_container");
    
    return div;
}

function _clearInpus(arg){
    if(arg=="category"){
        document.querySelector("#input_category").value = "";
        return;
    } else {
        document.querySelector("#input_title").value = "";
        document.querySelector("#input_dueDate").value = "";
        document.querySelector("#input_description").value = "";
        const ele = document.getElementsByName("priority");
        for(var i=0;i<ele.length;i++){
            ele[i].checked = false;
        }
       
        }
}
