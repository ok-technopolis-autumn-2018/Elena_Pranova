import {TodoList} from "./TodoList";

export class TodoBoard{
    /***
     *
     * @param {HTMLElement} root
     * @param {TodoList} todoList
     */
    constructor(root, todoList){
        this._root = root;
        this._todoList = todoList;
    }

    checkContent() {
        console.log('re');
        if (this._todoList.count() == 0) {
            this._root.classList.remove("__has-content");
        } else {
            this._root.classList.add("__has-content");
        }
    }
}