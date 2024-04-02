import { todo } from "./data.js";

// console.log(todo);

const { createApp } = Vue;

createApp({
  data() {
    return {
      todo,
      itemText: "",
      done: "",
    };
  },
  methods: {
    toggleDone(id) {
      const item = this.todo.find((el) => {
        return el.id === id;
      });
      // console.log(item);
      if (item) {
        item.done = !item.done;
      }
      // this.todo[i].done = !this.todo[i].done
    },
    deleteItem(id) {
      const i = this.todo.findIndex((el) => el.id === id);
      if (i !== -1) {
        this.todo.splice(i, 1);
      }
    },
    addItem() {
      const newObj = {
        id: null,
        text: this.itemText,
        done: false,
      };
      let nextId = 0;
      this.todo.forEach((el) => {
        if (nextId < el.id) {
          nextId = el.id;
        }
      });
      newObj.id = nextId + 1;
      this.todo.push(newObj);
      this.itemText = "";
    },
  },
  computed: {
    filteredTodo() {
      return this.todo.filter((el) => {
        if (this.done === "") {
          return true;
        }
        if (this.done === "false") {
          return el.done === false;
        }
        if (this.done === "true") {
          return el.done === true;
        }
      });
    },
  },
  mounted() {},
}).mount("#app");
