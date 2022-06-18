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

    const sort_items = (category,reset=false)=>{
        category.items.sort((a,b)=>{
            if(a.priority=="hight"&&b.priority=="low") return -1;
            if(a.priority==b.priority&&+a.id>+b.id) return -1;
        })

        if(reset=true){
            category.items.sort((a,b)=>{
                if(+a.id<+b.id) return -1
            })
        }
    }

    const update_checked = (item)=>{
        console.log(`first checklist is:${item.checklist}`)
        if(item.checklist==true){
            item.checklist=false;
            console.log(`then checklist is:${item.checklist}`)
        } else if(item.checklist==false){
            item.checklist = true;
            console.log(`then checklist is:${item.checklist}`)
        }
    }
    return{
        add_category,
        remove_category,
        add_item,
        remove_item,
        update_priority,
        update_bold,
        update_id,
        update_item_id,
        sort_items,
        update_checked,
    }
})(); 

export default controller;