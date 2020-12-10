<template>
  <div class="w-1/2 m-auto pt-6" v-if="book">
    <h1 class="text-4xl font-bold text-red-300">
      {{ book.title }}<br />de {{ book.author }}
    </h1>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "BookDetail",
  data() {
    return {
      book: {},
    };
  },
  created() {
    this.book = this.getDataBook(this.$route.params.id);
    if (!this.book && !this.$route.params.id) {
      this.$router.replace({ name: "Home" });
    }
  },
  computed: {
    ...mapGetters(["getDataBook"]),
  },
};
</script>
