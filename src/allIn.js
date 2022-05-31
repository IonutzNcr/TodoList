import default_page from "./default_page";
import appender from "./appender";
import categoryFactory from "./category";
import controller from "./controller";
import displayer from "./displayer";
import itemFactory from "./item";
import categories from "./stock";
import create_default_category from "./default_category";
import "./style.css"

create_default_category();

document.querySelector("#add_category").addEventListener("click",()=>{console.log(categories)})