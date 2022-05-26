import appender from "./appender";
import category from "./category";
import default_page from "./default-page";

import createItem from "./item";
import stock from "./stock";

import "./style.css"

default_page();

const obj1 = category("TOP",0)

const item1 = createItem("todo",'finir todo',"0","TOP")

obj1.addItems(item1)

console.log(obj1)

appender.appendCategory(obj1); 

stock[0] = obj1;