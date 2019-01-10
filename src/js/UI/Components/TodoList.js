import {Eventable} from "../../lib/Eventable";

export class TodoList {
    /***
     *
     * @param {HTMLElement} root
     * @param {Eventable} eventableListener
     */
    constructor(root, eventableListener){
        this._root = root;
        this._eventableListener = eventableListener;
    }

    add(text) {
        var template = this.template(text);
        this._root.appendChild(template.todo_list_item);
        template.removeButton.addEventListener('click', ()=>this._eventableListener.trigger("remove", template.todo_list_item));
        template.checkboxButtom.addEventListener('click', ()=>this._eventableListener.trigger("check", template.todo_list_item));
        this.autoResizable(template);
    }

    count() {

        return this.getItems().length;
    }

    getItems(){
        return this._root.querySelectorAll('.todo-list_item');
    }

    autoResizable(item) {
        var textArea = item.todo_list_item.querySelector('.todo-list_item-text');
        textArea.addEventListener('change',()=>this.resize(textArea));
        textArea.addEventListener('cut',()=>this.resize(textArea));
        textArea.addEventListener('paste',()=>this.resize(textArea));
        textArea.addEventListener('drop',()=>this.resize(textArea));
        textArea.addEventListener('keydown',()=>this.resize(textArea));
    }

    resize(textArea) {
        textArea.style.height='auto';
        textArea.style.height=textArea.scrollHeight+'px';
    }

    remove(item) {
        this._root.removeChild(item);
    }

    markAll() {
        var massiveOfItem = this.getItems();
        for(var i=0;i<massiveOfItem.length;i++){
            var check_item = massiveOfItem[i].querySelector('.custom-checkbox_target');
            massiveOfItem[i].classList.add('__is-checked');
            check_item.setAttribute('checked','checked');
        }
    }

    template(text) {
        var todo_list_item = document.createElement('div');
        todo_list_item.classList.add('todo-list_item');
        var custom_checkbox = document.createElement('div');
        custom_checkbox.classList.add('custom-checkbox');
        custom_checkbox.classList.add('todo-list_item_ready-marker');
        var custom_checkbox_target = document.createElement('input');
        custom_checkbox_target.classList.add('custom-checkbox_target');
        custom_checkbox_target.setAttribute('type','checkbox');
        custom_checkbox_target.setAttribute('aria-label','Mark todo as ready');
        var custom_checkbox_visual = document.createElement('div');
        custom_checkbox_visual.classList.add('custom-checkbox_visual');
        var checkbox_visual_icon = document.createElement('div');
        checkbox_visual_icon.classList.add('custom-checkbox_visual-icon');
        custom_checkbox_visual.appendChild(checkbox_visual_icon);
        custom_checkbox.appendChild(custom_checkbox_target);
        custom_checkbox.appendChild(custom_checkbox_visual);

        var button_remove = document.createElement('button');
        button_remove.classList.add('todo-list_item-remove');
        button_remove.setAttribute('aria-label','Delete todo');

        var item_text = document.createElement('div');
        item_text.classList.add('todo-list_item-text-w');
        var textArea = document.createElement('textarea');
        textArea.classList.add('todo-list_item-text');
        textArea.setAttribute('rows','1');
        textArea.value = text;
        item_text.appendChild(textArea);

        todo_list_item.appendChild(custom_checkbox);
        todo_list_item.appendChild(button_remove);
        todo_list_item.appendChild(item_text);

        return {
            todo_list_item: todo_list_item,
            removeButton: button_remove,
            checkboxButtom: custom_checkbox
        } ;
    }
}
