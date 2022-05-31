function itemFactory(title,description="none",id,dueDate="none",priority="low",checklist=false){
return{
    title,
    description,
    id,
    dueDate,
    priority,
    checklist,
    
}
}

export default itemFactory;