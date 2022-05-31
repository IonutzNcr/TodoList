function categoryFactory(title,id,isBold=true){
    return{
        title,
        id,
        items:[{title:"Lala",description:"Omg",id:0,dueDate:"none",priority:"low",checklist:false}],
        isBold,
    }
}

export default categoryFactory;