import Vue from "vue";
import Vuex from "vuex";
import modulePosts from './modules/posts';
import users from './modules/users';
import postsSecond from './modules/postsSecond';
import inputAddDelete from './modules/inputAddDelete';
import todoList from './modules/todoList'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    modulePosts,
    users,
    postsSecond,
    inputAddDelete,
    todoList,
  },
});
