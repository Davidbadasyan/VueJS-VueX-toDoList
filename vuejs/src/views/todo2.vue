<template>
  <div>
    <input type="text" placeholder="Some text" v-model.trim="text" />
    <button v-if="lengthCreateText" @click="addInputPush" :disabled="!text">
      Add
    </button>
    <ol>
      <li v-for="(value, index) in copiedList" :key="index">
        <div v-if="value.isEditing">
          <input v-model="copiedList[index].parameters" class="mt-20" />
          <button @click="saveItem(index)">Save</button>
          <button @click="cancelEditing(index)">Cancel</button>
        </div>
        <div v-else>
          <p :class="[value.editColor ? 'is-red ' : 'is-black']">
            {{ value.parameters }}
          </p>
          <button @click="dellItem(index)">Dell</button>
          <button @click="editColor(index)">Color</button>
          <button @click="editTextItem(index)">Edit text</button>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import { cloneDeep } from "lodash";

export default {
  name: "ToDoList2",
  data() {
    return {
      text: "",
      isEditing: false,
      editing: false,
      value: "Davit",
      tempValue: null,
      copiedList: [],
    };
  },
  watch: {
    list: {
      handler() {
        this.copiedList = cloneDeep(this.list);
      },
      immediate: true,
    },
  },
  computed: {
    ...mapState({
      list: (state) => state.todoList.list,
    }),
    ...mapGetters(["lengthCreateText"]),
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
      "updateItem",
    ]),
    addInputPush() {
      this.addText(this.text);
      this.text = "";
    },
    editTextItem(index) {
      this.copiedList = this.copiedList.map((el, i) => {
        if (index === i) {
          return {
            ...el,
            isEditing: true,
          };
        }
        return el;
      });
    },
    saveItem(index) {
      // eslint-disable-next-line
      // debugger;
      const params = {
        index,
        data: {
          isEditing: false,
          parameters: this.copiedList[index].parameters,
        },
        editingItems: this.copiedList.map((el)=> el.isEditing),
      };
      console.log(params.editingItems);
      this.updateItem(params);
    },
    cancelEditing(index) {
      this.copiedList = this.copiedList.map((el, i) => {
        if (index === i) {
          return {
            ...el,
            parameters: this.list[i].parameters,
            isEditing: false,
          };
        }
        return el;
      });
      const params = {
        index,
        data: {
          isEditing: false,
        },
      };
      this.updateItem(params);
    },
    cancelItem() {
      const parameters = {
        isEditing: false,
      };
      this.saveAndCancel(parameters);
    },
    saveAndCancel(parameters) {
      this.save(parameters);
      this.text = "";
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

.mt-20 {
  margin-top: 20px;
}
</style>

