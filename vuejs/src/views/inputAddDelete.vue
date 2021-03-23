<template>
  <div>
    <input type="text" placeholder="Some text" v-model.trim="text" />
    <!-- {{text}} -->
    <!-- <input v-bind:value="text" @change="todoTextChange"> -->
    <!-- :value="text"
    @input="({ target }) => text = target.value" v-model other way -->
    <!-- ask to Sahak -->
    <button
      v-if="showCreateTexts && !hasEditingItem"
      type="submit"
      :disabled="!text"
      @click="handleClick"
    >
      Create
    </button>
    <div v-else-if="hasEditingItem">
      <button :disabled="!text" @click="saveEdited">Save</button>
      <button @click="cancel">Cancel</button>
    </div>
    <ol>
      <li v-for="(value, index) in list" :key="index">
        <p :class="[value.isActive ? 'is-green' : 'is-red']">
          {{ value.text }}
        </p>
        <button @click="dellText(index)">Remove</button>
        <button @click="changeTextStatus(index)">Change</button>
        <button v-if="!value.isEditing" @click="editText(index)">Edit</button>
      </li>
    </ol>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters, createLogger } from "vuex";

export default {
  data() {
    return {
      text: "",
      isEditing: false,
      editingItem: {},
    };
  },
  plugins: [createLogger(console.log("PLUGINS"))],
  computed: {
    ...mapState({
      list: (state) => state.inputAddDelete.list,
    }),
    ...mapGetters(["showCreateTexts"]),
    hasEditingItem() {
      // eslint-disable-next-line
      // debugger;
      const isEditingItem = this.list.find((el) => el.isEditing);
      return isEditingItem;
    },
  },
  destroyed() {
    this.clearList();
  },
  methods: {
    ...mapActions([
      "addText",
      "dellText",
      "changeTextStatus",
      "clearList",
      "editTextChange",
      "saveEditedData",
    ]),
    handleClick() {
      this.addText(this.text);
      this.text = "";
    },
    editText(index) {
      // this.addText(this.text);
      this.editTextChange(index);
      // eslint-disable-next-line
      // debugger;
      this.list.forEach((e, i) => {
        if (i === index) {
          this.editingItem = {
            ...this.list[i],
            index: i,
          };
          this.text = e.text;
          // same
          // this.text = this.list[i].text;
        }
      });
      // for (let i = 0; i <= this.list.length; i++) {
      //   if (i === index) {
      //     this.text  = this.list[i].text;
      //     break;
      //   }
      // };
    },
    saveEdited() {
      // eslint-disable-next-line
      // debugger;
      const params = {
        ...this.editingItem,
        text: this.text,
        isEditing: false,
      };
      this.saveAndCancelAction(params);
    },
    cancel() {
      const params = {
        ...this.editingItem,
        isEditing: false,
      };
      this.saveAndCancelAction(params);
    },
    saveAndCancelAction(params) {
      this.saveEditedData(params);
      this.text = "";
      this.editingItem = {};
    },
    todoTextChange(e) {
      this.text = e.target.value;
    },
  },
};
</script>

<style>
.is-green {
  color: green;
}
.is-red {
  color: red;
}
</style>