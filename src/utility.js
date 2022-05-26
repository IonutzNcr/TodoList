const utility = (()=>{
    const createElmt = (type,id,content=false,class_id=false)=>{ // problem with the content 
        const element = document.createElement(type);
        element.setAttribute("id",id);
        if(typeof content == "string"){
            
            element.textContent = content;
        }
        if(typeof class_id =="string"){
            element.setAttribute("class",class_id);
        }
        return element;
    }

    return {createElmt,
    }

})();

export default utility;