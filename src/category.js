import appender from "./appender";

function category(title,id){
    return{
        title,
        id,
        items:[],
        addItems:function(item){
            item.category_id = this.id;
            this.items.push(item);
          },

        
    }
}

export default category;