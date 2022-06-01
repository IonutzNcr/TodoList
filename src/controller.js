import categoryFactory from "./category";
import categories from "./stock";

const controller = (()=>{
    const add_category = (category) => {
        categories.push(category);
    }

    const remove_category = (category) =>{
        const index = +category.id;
        categories.splice(index,1);
    }

    const add_item = (category,item)=>{
        category.items.push(item);
    }

    const remove_item = (category,item)=>{
        const index = +item.id;
        category.items.splice(index,1);
    }

    const update_priority = (category,item,new_priority)=>{
        const index = +item.id;
        category.items[index].priority = new_priority;
    }

    const update_checklist = (category,item,new_checklist)=>{
        console.log("This is ",new_checklist)
        const index = +item.id;
        category.items[index].checklist = new_checklist;
    }
    
    const update_bold = (category)=>{
        if(category.isBold){
            category.isBold = false;
            return ;
        } else {
            category.isBold = true;
        }
    };

    const update_id = () =>{
       for (let i = 0;i<categories.length;i++){
           categories[i].id = i;
       }
    }

    const update_item_id = (category) =>{
        for (let i=0;i<category.items.length;i++){
            category.items[i].id= i;
        }
    }

   /*  const control_prio = (category)=>{
        category.items.sort((a,b)=>{
            if(a==)
        })
    } */

    return{
        add_category,
        remove_category,
        add_item,
        remove_item,
        update_priority,
        update_checklist,
        update_bold,
        update_id,
        update_item_id,
    }
})(); 

export default controller;