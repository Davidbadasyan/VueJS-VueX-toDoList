import * as mutationTypes from '../mutation-types';

import { JANUARY } from './months.js';
import * as allMonths from './months.js';
console.log(JANUARY);
console.log(allMonths.JANUARY);
console.log(allMonths.FEBRUARY);
console.log(allMonths.Dad); // undefined

export default {
  state: {
    posts: [],
    todos: [
      { id: 1, text: 'is done', done: true },
      { id: 2, text: 'is not done', done: false },
    ],
    nameAndAddresses: [],
  },
  getters: {
    doneTodos: state => state.todos.filter(todo => todo.done),
    // doneTodos: function(state) {
    //   return state.todos.filter( function(todo) {
    //     return todo.done;
    //   });
    // },
  },
  actions: {
    async getPosts({ commit }) {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/photos?_limit=2"
      );
      const posts = await res.json();
      commit(mutationTypes.SAVE_POSTS, posts);
    },
    // by heart ({ commit, dispatch }, params)
    async addPost({ commit, dispatch }, params) {
      // showUserName is action name
      // dispatch calls other action from action
      // dispatch for actions
      dispatch('showUserName', 'David');
      // commit for mutations
      commit(mutationTypes.ADD_NEW_POST, params);
    },
  },
  mutations: {
    // data is our
    [mutationTypes.SAVE_POSTS](state, data) {
      state.posts = data;
    },
    increment(state) {
      state.count++;
    },
    [mutationTypes.ADD_NEW_POST](state, post) {
      state.posts.unshift(post);
    },
    [mutationTypes.CREATE_POST](state, newPost) {
      // eslint-disable-next-line
      // debugger;
      state.nameAndAddresses.unshift(newPost);
    }
  },
};