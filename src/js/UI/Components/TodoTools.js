import {TodoList} from "./TodoList";
import {Eventable} from "../../lib/Eventable";

export class TodoTools {
    /***
     *
     * @param {HTMLElement} root
     * @param {Eventable} eventableListener
     * @param {TodoList} todoList
     */
    constructor(root, eventableListener, todoList) {
        this._root = root;
        this._listener = eventableListener;
        this._todoList = todoList;

        var all=this._root.querySelector('.__All');
        all.addEventListener('click',()=>this.all(all));

        var active=this._root.querySelector('.__Active');
        active.addEventListener('click',()=>this.active(active));

        var completed=this._root.querySelector('.__Completed');
        completed.addEventListener('click',()=>this.completed(completed));

        var clear = this._root.querySelector('.todo-toolbar_clear-completed');
        clear.addEventListener('click',()=>this.clear());
    }

    all(button) {
        this.allNoSelected(button);
        var items=this._todoList.getItems();
        for (var i=0;i<items.length;i++){
            items[i].classList.remove('__not-active');
        }
    }

    active(button) {
        this.allNoSelected(button);
        var items=this._todoList.getItems();
        for (var i=0;i<items.length;i++){
            var status = items[i].querySelector('.custom-checkbox_target').checked;
            if (status){
                items[i].classList.add('__not-active');
            }else{
                items[i].classList.remove('__not-active');
            }
        }

    }

    completed(button) {
        this.allNoSelected(button);
        var items=this._todoList.getItems();
        for (var i=0;i<items.length;i++){
            var status = items[i].querySelector('.custom-checkbox_target').checked;
            if (!status){
                items[i].classList.add('__not-active');
            }else{
                items[i].classList.remove('__not-active');
            }
        }
    }

    allNoSelected(button){
        var filters = this._root.querySelectorAll('.todo-toolbar_filter');
        for (var i=0;i<filters.length;i++){
            filters[i].classList.remove('__selected');
        }
        button.classList.add('__selected');
    }

    clear() {
        var items=this._todoList.getItems();
        for (var i=0;i<items.length;i++){
            var status = items[i].querySelector('.custom-checkbox_target').checked;
            if (status){
                items[i].parentElement.removeChild(items[i]);
            }
        }
    }

    amountWatcher() {
        var items = this._todoList.getItems();
        var amount=0;
        for (var i=0;i<items.length;i++){
            var status = items[i].querySelector('.custom-checkbox_target').checked;
            if (!status){
                amount++;
            }
        }
        var message = amount+' item';
        if (amount > 1) {
            message += 's';
        }
        message += ' left';
        this._root.querySelector('.todo-toolbar_unready-counter').textContent=message;
    }

}
