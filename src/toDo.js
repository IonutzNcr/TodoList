// create a todo

const toDo = (()=>{

    const tasks = [];

    const task = (title,description,priority) =>{
        return{
            get title(){
                return title;
            },
            set title(value){
                title = value;
            },
            get description(){
                return description;
            },
            set description(value){
                description=value;
            },
            get priority(){
                return priority;
            },
            set priority(value){
                priority=value;
            },
        }
    };

    const add = (title,description,priority)=>{
        const tache = task(title,description,priority);
        tasks.push(tache);
    }

    const remove = (index)=>{
        console.log(`${task[index]} has been removed`); // wierd behaviour ...  why undefined
        tasks.splice(index,1);
        
    }

    const update = (obj,property,maj)=>{
        
        if(property == "title"){
            obj.title = maj;
            return;
        }
        if(property == "description"){
            obj.description = maj;
            return;
        }
        if(property == "priority"){
            obj.priority = maj;
        }
    }

    return{add,tasks,remove,update,}
})();

export default toDo;