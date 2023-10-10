<template>
  <div>
    <h1>Post list</h1>
    <t-input v-model="searchQuery" placeholder="Поиск...." v-focus />
    <div class="app__btns">
      <t-button> Create Post </t-button>
      <t-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <t-dialog v-model:show="dialogVisible">
      <post-form />
    </t-dialog>
    <post-list :posts="sortedAndSearchedPosts" v-if="!isPostsLoading" />
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import TDialog from "@/components/UI/TDialog.vue";
import TButton from "@/components/UI/TButton.vue";
import TSelect from "@/components/UI/TSelect.vue";
import TInput from "@/components/UI/TInput.vue";
import { usePosts } from "@/hooks/usePosts";
import useSortedPosts from "@/hooks/useSortedPosts";
import useSortedAndSearchedPosts from "@/hooks/useSortedAndSearchedPosts";
export default {
  components: {
    TInput,
    TSelect,
    TButton,
    TDialog,
    PostList,
    PostForm,
  },
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        { value: "title", name: "По названию" },
        { value: "body", name: "По содержимому" },
      ],
    };
  },
  setup() {
    const { posts, totalPages, isPostsLoading } = usePosts(10);
    const { sortedPosts, selectedSort } = useSortedPosts(posts);
    const { searchQuery, sortedAndSearchedPosts } =
      useSortedAndSearchedPosts(sortedPosts);

    return {
      posts,
      totalPages,
      isPostsLoading,
      sortedPosts,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts,
    };
  },
};
</script>

<style>
.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}
.page__wrapper {
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

.observer {
  height: 30px;
  background: green;
}
</style>
