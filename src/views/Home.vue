<template>
  <div class="w-1/2 m-auto pt-6">
    <h1 class="text-4xl font-bold">BookList</h1>
    <p class="pt-4 text-lg">
      Add a book to your list, it can be something you read or you want to read.
    </p>
    <form @submit.prevent="addBook" class="mt-8">
      <input
        type="text"
        placeholder="Title of the book.."
        class="border rounded-sm px-3 py-1 rounded-r-none outline-none"
        name="title"
        :value="currentTitle"
        @input="setCurrentTitle"
      />
      <input
        type="text"
        placeholder="Author of the book.."
        class="border rounded-sm px-3 py-1 rounded-r-none outline-none"
        name="author"
        :value="currentAuthor"
        @input="setCurrentAuthor"
      />
      <button
        type="submit"
        class="bg-red-300 px-3 py-1 text-white border border-red-300 rounded-r-sm"
      >
        Add
      </button>
    </form>
    <ul class="mt-8 border-t pt-2">
      <li
        v-for="book in bookList"
        :key="book.id"
        @click="goToDetail(book)"
        class="cursor-pointer hover:text-red-300"
      >
        {{ book.title }} de {{ book.author }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Home",
  methods: {
    ...mapActions(["setCurrentTitle", "setCurrentAuthor", "addBook"]),
    goToDetail(book) {
      const name = (book.title + "-" + book.author).replace(
        /[^A-Z0-9]+/gi,
        "-"
      );
      this.$router.push({
        name: "BookDetail",
        params: {
          id: book.id,
          name,
        },
      });
    },
  },
  computed: {
    ...mapGetters(["currentTitle", "currentAuthor", "bookList"]),
  },
};
</script>
