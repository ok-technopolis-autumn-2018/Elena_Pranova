import '../styles/default.scss';
import {Eventable} from "./lib/Eventable";
import {TodoCreator} from "./UI/Components/TodoCreator";
import {TodoList} from "./UI/Components/TodoList";
import {TodoBoard} from "./UI/Components/TodoBoard";
import {TodoTools} from "./UI/Components/TodoTools";

const eventableListener = new Eventable();
const todoCreator = document.querySelector(".todo-creator");
const todoList = document.querySelector(".todo-list");
const todoBoard = document.querySelector(".todo-board");
const todoTools = document.querySelector(".todo-toolbar");

var todoCreatorComponent = new TodoCreator(todoCreator, eventableListener);
var todoListComponent = new TodoList(todoList, eventableListener);
var todoBoardComponent = new TodoBoard(todoBoard, todoListComponent);
var todoToolsComponent = new TodoTools(todoTools, eventableListener, todoListComponent);

eventableListener.on('add', (text)=>todoListComponent.add(text));
eventableListener.on('add', ()=>todoBoardComponent.checkContent());
eventableListener.on('add', ()=>todoToolsComponent.amountWatcher());

eventableListener.on('remove', (item)=>todoListComponent.remove(item));
eventableListener.on('remove', ()=>todoBoardComponent.checkContent());
eventableListener.on('remove', ()=>todoToolsComponent.amountWatcher());

eventableListener.on('markAll',()=>todoListComponent.markAll());

eventableListener.on('check',()=>todoToolsComponent.amountWatcher());

/*var list = document.querySelector(".todo-list");
var main_field = document.querySelector(".todo-creator_text-input");
var amountOfActive = 0;
var amountOfLeft = 0;
var all = true;
var active = false;
var completed = false;

function update(){
    var amount = amountOfLeft <0?0:amountOfLeft;
    document.querySelector(".todo-toolbar_unready-counter").textContent=amount+" item left";
};

document.querySelector(".__All").addEventListener("click", function() {
        all = true;
        active = false;
        completed = false;
        document.querySelector(".__selected").classList.remove("__selected");
        this.classList.add("__selected");

    });
document.querySelector(".__Active").addEventListener("click", function() {
         all = false;
         active = true;
         completed = false;
         document.querySelector(".__selected").classList.remove("__selected");
         this.classList.add("__selected");

    });
document.querySelector(".__Completed").addEventListener("click", function() {
         all = false;
         active = false;
         completed = true;
         document.querySelector(".__selected").classList.remove("__selected");
         this.classList.add("__selected");

    });

document.querySelector(".todo-toolbar_clear-completed").addEventListener("click", function() {
        if (all) {
             var getItems = list.querySelectorAll(".todo-list_item");
                for (var i = 0; i < 4; i++) {
                    if (getItems[i].classList.contains("__not-active") === false) {
                        getItems[i].querySelector(".custom-checkbox_target").checked=false;
                        getItems[i].classList.add("__not-active");
                    }
                }
                amountOfActive=0;
        }
        if (active) {
                var getItems = list.querySelectorAll(".todo-list_item");
                for (var i = 0; i < 4; i++) {
                    if ((getItems[i].classList.contains("__not-active") === false)&&(!getItems[i].querySelector(".custom-checkbox_target").checked)) {
                        amountOfLeft--;
                        getItems[i].classList.add("__not-active");
                    }
                }
        }
        if (completed) {
                var getItems = list.querySelectorAll(".todo-list_item");
                    for (var i = 0; i < 4; i++) {
                        if ((getItems[i].classList.contains("__not-active") === false)&&(getItems[i].querySelector(".custom-checkbox_target").checked)) {
                                        getItems[i].querySelector(".custom-checkbox_target").checked=false;
                                        getItems[i].classList.add("__not-active");
                         }
                    }
        }
        update();

    });


document.querySelector(".todo-creator_check_all").addEventListener("click", function(){
    var getItems = list.querySelectorAll(".todo-list_item");
    for (var i = 0; i < 4; i++) {
        if (getItems[i].classList.contains("__not-active") === false) {
            getItems[i].querySelector(".custom-checkbox_target").setAttribute("checked", "checked");
            amountOfLeft--;
        }
    }
    update();

    });

main_field.addEventListener("change", function(){
    console.log(main_field.value);
    var text = main_field.value;
    if (text === "HTML") {
        var item = list.querySelector(".__not-active");
        item.classList.remove("__not-active");
        item.querySelector(".todo-list_item-text").value="HTML";
        amountOfActive++;
        amountOfLeft++;
        item.querySelector(".todo-list_item-remove").addEventListener("click", function() {
            this.parentNode.classList.add("__not-active");
            amountOfActive--;
            if (!this.parentNode.querySelector(".custom-checkbox_target").checked){
                amountOfLeft--;
                update();
            }
        });
        item.querySelector(".todo-list_item_ready-marker").addEventListener("click",function(){
            if (this.querySelector(".custom-checkbox_target").checked){
                amountOfLeft--;
            }else{
                amountOfLeft++;
            }
            update();
        });

    }
    if (text === "CSS") {
        var item = list.querySelector(".__not-active");
        item.classList.remove("__not-active");
        item.querySelector(".todo-list_item-text").value="CSS";
        amountOfActive++;
        amountOfLeft++;
        item.querySelector(".todo-list_item-remove").addEventListener("click", function() {
            this.parentNode.classList.add("__not-active");
            amountOfActive--;
            if (!this.parentNode.querySelector(".custom-checkbox_target").checked){
                amountOfLeft--;
                update();
            }
        });
        item.querySelector(".todo-list_item_ready-marker").addEventListener("click",function(){
            if (this.querySelector(".custom-checkbox_target").checked){
                    amountOfLeft--;
            }else{
                    amountOfLeft++;
            }
            update();
        });
    }
    if (text === "JS") {
        var item = list.querySelector(".__not-active");
        item.classList.remove("__not-active");
        item.querySelector(".todo-list_item-text").value="JS";
        amountOfActive++;
        amountOfLeft++;
        item.querySelector(".todo-list_item-remove").addEventListener("click", function() {
            this.parentNode.classList.add("__not-active");
            amountOfActive--;
            if (!this.parentNode.querySelector(".custom-checkbox_target").checked){
                amountOfLeft--;
                update();
            }
        });
        item.querySelector(".todo-list_item_ready-marker").addEventListener("click",function(){
            if (this.querySelector(".custom-checkbox_target").checked){
                amountOfLeft--;
            }else{
                amountOfLeft++;
            }
            update();
        });
    }
    if (text === "JS tools") {
        var item = list.querySelector(".__not-active");
        item.classList.remove("__not-active");
        item.querySelector(".todo-list_item-text").value="JS tools";
        amountOfActive++;
        amountOfLeft++;
        main_field.value='';
        item.querySelector(".todo-list_item-remove").addEventListener("click", function() {
            this.parentNode.classList.add("__not-active");
            amountOfActive--;
            if (!this.parentNode.querySelector(".custom-checkbox_target").checked){
                amountOfLeft--;
                update();
            }
         });
        item.querySelector(".todo-list_item_ready-marker").addEventListener("click",function(){
            if (this.querySelector(".custom-checkbox_target").checked){
                amountOfLeft--;
            }else{
                amountOfLeft++;
            }
            update();
        });
    }
    update();
    main_field.value='';
});*/


