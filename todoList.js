import * as mutationTypes from '../mutation-types'

export default {
    state: {
        list: []
    },
    getters: {
        lengthCreateText: (state) => state.list.length <= 3,
    },
    actions: {
        async addText({ commit }, text) {
            commit(mutationTypes.ADD_TEXT, text)
        },
        async dellItem({ commit }, index) {
            commit(mutationTypes.DELL_ITEM, index)
        },
        async destroyedList({ commit }) {
            commit(mutationTypes.DESTROYED_LIST);
        },
        async editColor({ commit }, index) {
            commit(mutationTypes.EDIT_COLOR, index)
        },
        async editTextIndex({ commit }, index) {
            commit(mutationTypes.SAVE_DATA_EDIT, index)
        },
        async save({ commit }, parameters) {
            commit(mutationTypes.SAVE_ITEM_EDIT, parameters)
        },
    },
    mutations: {
        [mutationTypes.ADD_TEXT](state, text) {
            state.list.push({
                parameters: text,
                editColor: false,
                isEditing: false,
            });
        },
        [mutationTypes.DELL_ITEM](state, index) {
            state.list = state.list.filter((el, i) => i != index);
        },
        [mutationTypes.EDIT_COLOR](state, index) {
            state.list = state.list.map((el, i) => {
                if (i === index) {
                    return {
                        ...el,
                        editColor: !el.editColor,
                    };
                };
                return el;
            });
        },
        [mutationTypes.SAVE_DATA_EDIT](state, index) {
            state.list = state.list.map((x, y) => {
                if (y === index) {
                    return {
                        ...x,
                        isEditing: true,
                    };
                }
                return {
                    ...x,
                    isEditing: false,
                };
            });
        },
        [mutationTypes.SAVE_ITEM_EDIT](state, parameters) {
            state.list = state.list.map((x, y) => {
                if (y === parameters.index) {
                    return {
                        ...x,
                        ...parameters,
                    }
                }
                return x;
            })
        },
        [mutationTypes.DESTROYED_LIST](state) {
            state.list = [];
        },
    },
}


