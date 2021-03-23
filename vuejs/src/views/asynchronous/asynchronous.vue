<template>
    <div class="posts-tab">
      <ul class="posts-sidebar">
        <li
          v-for="post in posts"
          v-bind:key="post.id"
          v-bind:class="{ selected: post === selectedPost }"
		  v-on:click="selectedPost = post"
        >
          {{ post.title }}
        </li>
      </ul>
      <div class="selected-post-container">
      	<div
            v-if="selectedPost"
            class="selected-post"
        >
          <h3>{{ selectedPost.title }}</h3>
          <div
            v-html="selectedPost.content"
            >
          </div>
        </div>
        <strong v-else>
          Click on a blog title.
        </strong>
      </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            posts: [
              {
                id: 1,
                title: "Armen",
                content:
                  "<p>Hello Armen</p>"
              },
              {
                id: 2,
                title: "David",
                content:
                  "<p>Hello David.</p>"
              },
              {
                id: 3,
                title: "Sahak",
                content:
                  "<p>Hello Sahak</p>"
              }
            ],
            selectedPost: null
          };
        }
}

</script>

<style >
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
.posts-tab {
  display: flex;
  margin-left: 50%;
}
.posts-sidebar {
  max-width: 40vw;
  margin: 0;
  padding: 0 10px 0 0;
  list-style-type: none;
  border-right: 1px solid #ccc;
}
.posts-sidebar li {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
}
.posts-sidebar li:hover {
  background: #eee;
}
.posts-sidebar li.selected {
  background: lightblue;
}
.selected-post-container {
  padding-left: 10px;
}
.selected-post > :first-child {
  margin-top: 0;
  padding-top: 0;
}

</style>