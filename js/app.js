import "../scss/main.scss"


class List {
    constructor() {
        this.$add = document.querySelector(".add-form");
        this.search = document.querySelector(".search");
        this.$inputAdd = document.querySelector(".add");
        this.$list = document.querySelector("ul");
        this.$btnClear = document.querySelector(".clear-btn");
        this.$btnSearch = document.querySelector(".search-btn");
    }

    erase(e) {
        const check = e.target;
        const listIndex = this.$list.querySelectorAll("li");
        if (listIndex.length === 0) this.$list.style.visibility = "hidden";
        check.parentElement.parentElement.remove();
    }

    eraseIcon(e) {
        const check = e.target;
        const listIndex = this.$list.querySelectorAll("li");
        if (listIndex.length === 0) this.$list.style.visibility = "hidden";
        check.parentElement.parentElement.parentElement.remove();

    }

    mark(e) {
        const check = e.target;
        check.parentElement.parentElement.classList.toggle("decoration")
    }

    markIcon(e) {
        const check = e.target;
        check.parentElement.parentElement.parentElement.classList.toggle("decoration")
    }


    task(e) {
        e.preventDefault();
        console.log("hej")
        const task = this.$inputAdd.value;
        if (task === "") return;
        this.$list.style.visibility = "visible";
        const li = document.createElement("li");
        const span = document.createElement("span");
        const buttonMark = document.createElement("button");
        const buttonDelete = document.createElement("button");
        const icon1 = document.createElement("i");
        const icon2 = document.createElement("i");
        icon1.className = "fas fa-check";
        icon2.className = "fas fa-eraser"
        buttonMark.className = "mark-task";
        buttonMark.appendChild(icon1);
        buttonDelete.className = "delete-task";
        buttonDelete.appendChild(icon2);
        span.className = "list-buttons";
        span.appendChild(buttonMark);
        span.appendChild(buttonDelete);
        li.textContent = task;
        li.appendChild(span);
        this.$list.appendChild(li);
        buttonDelete.addEventListener("click", this.erase.bind(this));
        buttonMark.addEventListener("click", this.mark.bind(this));
        icon1.addEventListener("click", this.markIcon.bind(this));
        icon2.addEventListener("click", this.eraseIcon.bind(this));
        this.$inputAdd.value = "";
    }

    clear() {
        this.$list.textContent = "";
        this.$list.style.visibility = "hidden";
    }


    find(e) {
        const inputText = e.target.value;
        const allLi = [...this.$list.querySelectorAll("li")];
        for (let i = 0; i < allLi.length; i++) {
            !allLi[i].innerText.includes(inputText) ? allLi[i].style.display = "none" : allLi[i].style.display = "flex";
        }
    }

    addTask() {
        this.$add.addEventListener("submit", this.task.bind(this));

    }

    clearTasks() {
        this.$btnClear.addEventListener("click", this.clear.bind(this));
    }

    findTask() {
        this.search.addEventListener("input", this.find.bind(this));
    }


    inputShowHide() {
        this.search.classList.toggle("show");
    }

    inputButton(){
        this.$btnSearch.addEventListener("click", this.inputShowHide.bind(this))
    }

}

const myList = new List();
myList.inputButton();
myList.findTask();
myList.addTask();
myList.clearTasks()
