const displayer = (()=>{
    const display =(arr)=>{
        arr.forEach(element => {
            console.log("le titre de cette categorie est : ",element.title)
            element.items.forEach(e=>{
                console.log(`${e.id} ) titre: ${e.title} , description : 
                ${e.description} , due Date: ${e.dueDate},Priority: ${e.priority}`);
                console.log("Done: ",e.checklist);
            })
        });
    }

    return {
        display,
    }
})()

export default displayer;