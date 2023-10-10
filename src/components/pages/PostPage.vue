<template>
  <div>
    <h1>List of posts</h1>
    <t-input v-focus v-model="searchQuery" aria-placeholder="Search ..." />
    <div class="app__btns">
      <t-button @click="showDialog">Create post</t-button>
      <t-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <!-- example of usage -->
    <!-- <input type="text" v-model.trim.number="modificatorValue" /> -->

    <t-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </t-dialog>
    <post-list
      v-if="!isPostsLoading"
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
    />
    <div v-else>Loading</div>
    <div v-intersection="loadMorePosts" ref="observer"></div>
    <!-- PAGINATION 1,2,3 -->
    <!-- <div class="page_wrapper">
      <div
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        class="page"
        :class="{
          'current-page': page === pageNumber,
        }"
        @click="changePage(pageNumber)"
      >
        {{ pageNumber }}
      </div>
    </div> -->
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import TDialog from "@/components/UI/TDialog.vue";
import TButton from "@/components/UI/TButton.vue";
import TSelect from "@/components/UI/TSelect.vue";
import TInput from "@/components/UI/TInput.vue";
import axios from "axios";

export default {
  components: {
    PostForm,
    PostList,
    TDialog,
    TButton,
    TSelect,
    TInput,
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostsLoading: false,
      selectedSort: "",
      searchQuery: "",
      page: 1,
      limit: 10,
      totalPages: 0,
      sortOptions: [
        { value: "title", name: "Name" },
        { value: "body", name: "Desc" },
      ],
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    async loadMorePosts() {
      try {
        this.page += 1;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = [...this.posts, ...response.data];
      } catch (error) {
        alert("error fetch");
      }
    },
    // changePage(pageNumber) {
    //   this.page = pageNumber;
    // },
  },
  mounted() {
    this.loadMorePosts();
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((a, b) =>
        a[this.selectedSort]?.localeCompare(b[this.selectedSort])
      );
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  // watch: {
  //   page() {
  //     this.getPosts();
  //   },
  // },
  // watch: {
  //   selectedSort(newValue) {
  //     this.posts.sort((a, b) => a[newValue]?.localeCompare(b[newValue]));
  //   },
  // },
};
</script>

<style>
.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}
.page_wrapper {
  display: flex;
  margin-top: 15px;
}
.page {
  border: 1px solid black;
  padding: 10px;
}
.current-page {
  border: 2px solid teal;
}
</style>
