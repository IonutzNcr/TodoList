// retrieve data from inputs : 
// to do later 
//now we use windows prompt to get values and use them to create object & elements 

function getDataFromDom(button){
    if(button.id=="create"){
        let data =  document.querySelector("input-title").value;
        clearInput(button);
        return data;
    } else {
        let data = {};
        data.title = document.querySelector("#title-todo").value;
        data.description = document.querySelector("#desc-todo").value;
        clearInput(button);
        return data;
    }
}

function clearInput(button){
    if(button.id=="create"){
        document.querySelector("#input-title").value = "";
    } else {
        document.querySelector("#title-todo").value = "";
        document.querySelector("#desc-todo").value = "";
    }
    
}