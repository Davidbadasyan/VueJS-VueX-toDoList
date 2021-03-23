<template>
  <div>
    <input type="text" placeholder="Some text" v-model.trim="text" />
    <!-- {{ text }} -->
    <button
      v-if="lengthCreateText && !hasItem"
      @click="addInputPush"
      :disabled="!text"
    >
      Add
    </button>
    <div v-else-if="hasItem">
      <button :disabled="!text" @click="saveItem">Save</button>
      <button @click="cancelItem">Cancel</button>
    </div>
    <ol>
      <li v-for="(value, index) in list" :key="index" @click="enableEditing">
        <p :class="[value.editColor ? 'is-red ' : 'is-black']">
          {{ value.parameters }} {{ text }}
        </p>
        <button @click="dellItem(index)">Dell</button>
        <button @click="editColor(index)">Color</button>
        <button @click="editTextItem(index)" v-if="!value.isEditing">
          Edit text
        </button>
      </li>
    </ol>
    <div v-if="!editing">
      <span class="text" @click="enableEditing">{{ text }}</span>
    </div>
    <div v-else-if="editing">
      <input v-model="tempValue" class="input" />
      <button @click="disableEditing">Cancel</button>
      <button @click="saveEdit">Save</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  name: "ToDoList",
  data() {
    return {
      text: "",
      isEditing: false,
      item: {},
      editing: false,
      value: "Davit ",
      tempValue: null,
    };
  },
  computed: {
    ...mapState({
      list: (state) => state.todoList.list,
    }),
    ...mapGetters(["lengthCreateText"]),
    hasItem() {
      const editing = this.list.find((x) => x.isEditing);
      return editing;
    },
  },
  destroyed() {
    this.destroyedList();
  },
  methods: {
    ...mapActions([
      "addText",
      "destroyedList",
      "dellItem",
      "editColor",
      "editTextIndex",
      "save",
    ]),
    addInputPush() {
      this.addText(this.text);
      this.text = "";
    },
    editTextItem(index) {
      // this.editTextIndex(index);
      // this.enableEditing(index);
      // this.saveEdit(index)
      this.list.forEach((x, y) => {
        // eslint-disable-next-line
        // debugger;
        if (y === index) {
          this.item = {
            ...x,
            // ...this.list[y],
            index: y,
          };
          this.text = x.parameters;
        }
      });
    },
    saveItem() {
      // eslint-disable-next-line
      // debugger;
      const parameters = {
        ...this.item,
        parameters: this.text,
        isEditing: false,
      };
      this.saveAndCancel(parameters);
    },
    cancelItem() {
      const parameters = {
        ...this.item,
        isEditing: false,
      };
      this.saveAndCancel(parameters);
    },
    saveAndCancel(parameters) {
      this.save(parameters);
      this.text = "";
      this.item = {};
    },
    enableEditing() {
      this.tempValue = this.text;
      this.editing = true;
    },
    disableEditing() {
      this.tempValue = null;
      this.editing = false;
    },
    saveEdit() {
      // However we want to save it to the database
      this.text = this.tempValue;
      this.disableEditing();
    },
  },
};
</script>

<style>
.is-black {
  color: black;
}
.is-red {
  color: red;
}
</style>

