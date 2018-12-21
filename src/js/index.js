import '../styles/default.scss';


var list = document.querySelector(".todo-list");
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
             var items = list.querySelectorAll(".todo-list_item");
                for (var i = 0; i < 4; i++) {
                    if (items[i].classList.contains("__not-active") === false) {
                        items[i].querySelector(".custom-checkbox_target").checked=false;
                        items[i].classList.add("__not-active");
                    }
                }
                amountOfActive=0;
        }
        if (active) {
                var items = list.querySelectorAll(".todo-list_item");
                for (var i = 0; i < 4; i++) {
                    if ((items[i].classList.contains("__not-active") === false)&&(!items[i].querySelector(".custom-checkbox_target").checked)) {
                        amountOfLeft--;
                        items[i].classList.add("__not-active");
                    }
                }
        }
        if (completed) {
                var items = list.querySelectorAll(".todo-list_item");
                    for (var i = 0; i < 4; i++) {
                        if ((items[i].classList.contains("__not-active") === false)&&(items[i].querySelector(".custom-checkbox_target").checked)) {
                                        items[i].querySelector(".custom-checkbox_target").checked=false;
                                        items[i].classList.add("__not-active");
                         }
                    }
        }
        update();

    });


document.querySelector(".todo-creator_check_all").addEventListener("click", function(){
    var items = list.querySelectorAll(".todo-list_item");
    for (var i = 0; i < 4; i++) {
        if (items[i].classList.contains("__not-active") === false) {
            items[i].querySelector(".custom-checkbox_target").setAttribute("checked", "checked");
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
});


