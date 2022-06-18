import appender from "./appender";
import controller from "./controller";
import create_default_category from "./default_category";
import categories from "./stock";

function checkState(){
    if(localStorage.length==0){
        create_default_category();
        _addToStorage();
    } else {
        for(let i=0;i<localStorage.length;i++){
            categories[i]=JSON.parse(localStorage.getItem(i));
        }
        for(let n=0;n<categories.length;n++){
            appender.append_category(categories[n]);
        }
        for(let k=0;k<categories.length;k++){
            if(categories[k].isBold){
                appender.append_items(categories[k]);
            }
        }
    }
}

function _addToStorage(){
    for(let i = 0;i<categories.length;i++){
        localStorage.setItem(i,JSON.stringify(categories[i]))
    }
}

function update_Storage(){
    console.log(localStorage.getItem(0))
    localStorage.clear();
    _addToStorage();
  
    
}

export {checkState,update_Storage}