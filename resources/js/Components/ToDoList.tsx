import ToDoItem from './ToDoItem'
import {useState} from "react";

export default function ToDoList({todos, sendToParent}) {
    const todoList = todos?.map(item => <li key={item.id}><ToDoItem
        key={item.id}
        id={item.id}
        name={item.name}
        sendToParent={sendToParent}/></li>);

    return (
        <div>
             <ul>{todoList}</ul>
        </div>
);
}
