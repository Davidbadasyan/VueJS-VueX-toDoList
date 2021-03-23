import * as mutationTypes from '../mutation-types';

export default {
    state: {
        list: [],
    },
    getters: {
        showCreateTexts: (state) => state.list.length < 5,
    },
    actions: {
        async addText({ commit }, text) {
            // eslint-disable-next-line
            // debugger;
            commit(mutationTypes.INPUT_ADD, text);
        },
        // async getText({commit},parameters){
        //     commit(mutationTypes.INPUT_TEXT,parameters)
        // }
        async dellText({ commit }, index) {
            commit(mutationTypes.DELL_TEXT, index);
            // this.list = this.list.filter((el, i) => i != index);
        },
        async changeTextStatus({ commit }, index) {
            commit(mutationTypes.CHANGE_TEXT_STATUS, index);
        },
        // async pushText({ commit }, index) {
        //     commit(mutationTypes.PUSH_TEXT, index)
        // },
        async editTextChange({ commit }, index) {
            commit(mutationTypes.EDIT_TEXT, index)
        },
        saveEditedData({ commit }, params) {
            commit(mutationTypes.SAVE_EDITED_DATA, params);
        },
        clearList({ commit }) {
            commit(mutationTypes.CLEAR_LIST);
        },
        async updateTodo({ commit }, index) {
            commit(mutationTypes.UPDATE_TODO, index);
        }
    },
    mutations: {
        [mutationTypes.INPUT_ADD](state, param) {
            // eslint-disable-next-line
            // debugger;
            state.list.push({
                text: param,
                isActive: false,
                isEditing: false,
            });
            // state.list = [...state.list, {
            //     text: param,
            //     isActive: false,
            // }];
        },
        [mutationTypes.DELL_TEXT](state, index) {
            // eslint-disable-next-line
            // debugger;
            state.list = state.list.filter((el, i) => i != index);
        },
        [mutationTypes.CHANGE_TEXT_STATUS](state, index) {
            state.list = state.list.map((el, i) => {
                if (i === index) {
                    return {
                        ...el,
                        isActive: !el.isActive,
                    };
                }
                return el;
            });
        },
        [mutationTypes.EDIT_TEXT](state, index) {
            state.list = state.list.map((el, i) => {
                if (i === index) {
                    return {
                        ...el,
                        isEditing: true,
                    };
                }
                return {
                    ...el,
                    isEditing: false,
                };
            });
        },
        [mutationTypes.SAVE_EDITED_DATA](state, params) {
            state.list = state.list.map((el, i) => {
                if (i === params.index) {
                    return {
                        ...el,
                        ...params,
                    };
                }
                return el;
            });
        },
        [mutationTypes.UPDATE_TODO](state, index) {
            console.log(state, index);
        },
        [mutationTypes.CLEAR_LIST](state) {
            state.list = [];
        },
    },
    plugins: []
}
