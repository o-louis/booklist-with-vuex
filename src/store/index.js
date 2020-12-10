import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentBook: { id: null, title: "", author: "" },
    bookList: [],
  },
  mutations: {
    setCurrentTitle: (state, name) => {
      state.currentBook.title = name;
    },
    setCurrentAuthor: (state, name) => {
      state.currentBook.author = name;
    },
    addBook: (state) => {
      state.bookList.push({ ...state.currentBook, id: state.bookList.length });
      state.currentBook = { id: null, title: "", author: "" };
    },
  },
  actions: {
    setCurrentTitle: (state, name) => {
      state.commit("setCurrentTitle", name.target.value);
    },
    setCurrentAuthor: (state, name) => {
      state.commit("setCurrentAuthor", name.target.value);
    },
    addBook: (state) => {
      state.commit("addBook");
    },
  },
  getters: {
    currentTitle: (state) => state.currentBook.title,
    currentAuthor: (state) => state.currentBook.author,
    bookList: (state) => state.bookList,
    getDataBook: (state) => (id) =>
      state.bookList.find((book) => book.id === id),
  },
});
