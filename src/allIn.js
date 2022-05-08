import toDo from "./toDo";


toDo.add("yo","say","hight");
/* console.log(toDo.tasks); */

toDo.update(toDo.tasks[0],"title","new Title");
/* console.log(toDo.tasks); */


toDo.add("so","m","low");
console.log(toDo.tasks);

toDo.remove(0);

console.log(toDo.tasks);


//why before and after remove the console log the same thing is not normal .... 