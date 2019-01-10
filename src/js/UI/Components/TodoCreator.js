import {Eventable} from "../../lib/Eventable";
export class TodoCreator{
    /***
     *
     * @param {HTMLElement} root
     * @param {Eventable} eventableListener
     */
    constructor(root, eventableListener){
        this._input = root.querySelector('.todo-creator_text-input');
        this._listener = eventableListener;

        root.addEventListener('submit', this);
        var markAll = root.querySelector(".todo-creator_check_all");
        markAll.addEventListener('click', this);
    }

    handleEvent(e) {
        switch (e.type) {
            case 'submit':
                e.preventDefault();
                this.addElement();
                break;
            case 'click':
                this.markAll();
                break;
        }
    }

    addElement() {
        const text = this._input.value.trim();
        if (text) {
            this._input.value = '';
            this._listener.trigger('add', text);
        }
    }

    markAll() {
        this._listener.trigger('markAll');

    }

}