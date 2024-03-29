<template>
  <div class="container mx-auto mt-8">
    <h1 class="text-3xl font-bold mb-4">Blog</h1>
    <div class="container mx-auto mt-8 flex flex-wrap">
      <div v-for="blog in filteredStore" :key="blog.id" class="blog-item bg-white shadow-xl rounded-lg p-6 mb-4 mr-2 ml-2">
        <div class="font-bold text-lg">{{ blog.title }}</div>
        <div class="text-gray-500">{{ blog.content.substring(0, 150) }}</div>
        <router-link :to="'/blog/' + blog.id" class="block text-blue-500 hover:underline mt-2">See More</router-link>
        <button @click="editBlog(blog)" class="bg-blue-400 mr-1 mt-2">Edit</button>
        <button @click="deleteBlog(blog.id)" class="bg-red-500 ml-1 mt-2">Delete</button>
        <!-- Edit Modal -->
        <div v-show="blog.id === editedBlogId" class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div class="bg-white rounded-lg p-6">
            <h2 class="text-lg font-semibold mb-4">Edit Blog</h2>
            <input v-model="editedBlog.title" type="text" placeholder="Title" class="w-full px-1 border-inherit mb-2 py-1">
            <textarea v-model="editedBlog.content" placeholder="Content" class="w-full mb-4"></textarea>
            <div class="flex justify-end">
              <button @click="saveEditedBlog" class="px-4 py-2 bg-blue-500 text-white rounded-lg mr-2">Save</button>
              <button @click="cancelEdit" class="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg">Cancel</button>
            </div>
          </div>
        </div>
        <!-- End Edit Modal -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from '../store.js' 
import { storeToRefs } from 'pinia';

const store = useStore();
const { filteredStore} =storeToRefs(store);
const editedBlog = ref({ title: '', content: '' });
const editedBlogId = ref(null);

function editBlog(blog) {
  editedBlogId.value = blog.id;
  editedBlog.value.title = blog.title; // Update title in the editedBlog object
  editedBlog.value.content = blog.content; // Update content in the editedBlog object
}

function saveEditedBlog() {
  if (editedBlogId.value !== null) {
    store.updateBlog({ id: editedBlogId.value, title: editedBlog.value.title, content: editedBlog.value.content });
    editedBlogId.value = null;
    editedBlog.value = { title: '', content: '' }; // Reset editedBlog after saving
  }
}

function cancelEdit() {
  editedBlogId.value = null;
  editedBlog.value = { title: '', content: '' }; // Reset editedBlog on cancel
}

function deleteBlog(id) {
  store.deleteBlog(id)
}
</script>

<style scoped>
/* Add scoped styles for Home.vue here */
.blog-item {
  flex-basis: calc(33.33% - 1rem); /* Set width for each blog item */
}
</style>
  
  