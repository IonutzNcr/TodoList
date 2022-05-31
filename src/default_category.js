import appender from "./appender";
import controller from "./controller";
import categoryFactory from "./category";
import categories from "./stock";

function create_default_category(){
    const category_by_default = categoryFactory("Default category",categories.length);
    controller.add_category(category_by_default);
    appender.append_category(category_by_default);
    /* appender.remove_items_from_DOM(); */ //we don't need this
    appender.append_items(category_by_default);
}

export default create_default_category;