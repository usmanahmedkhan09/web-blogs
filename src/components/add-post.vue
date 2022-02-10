<template>
  <div>
    <form class="post-form" @submit.prevent="handleCreatePost">
      <div class="form-control">
        <label for="title">Title</label>
        <input v-model="post.title" type="text" name="title" id="title" />
      </div>
      <div class="form-control">
        <label for="imageUrl">Image URL</label>
        <input
          v-model="post.imageUrl"
          type="text"
          name="imageUrl"
          id="imageUrl"
        />
      </div>

      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          v-model="post.description"
          name="description"
          id="description"
          rows="5"
        ></textarea>
      </div>

      <button class="btn" type="submit">Submit</button>
    </form>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      post: {
        title: null,
        imageUrl: null,
        description: null,
      },
    };
  },
  methods: {
    ...mapActions(["addpost"]),
    handleCreatePost() {
      this.$store.dispatch("addpost", this.post).then(() => {
        this.$router.push("/");
      });
    },
  },
};
</script>
<style>
.post-form {
  width: 20rem;
  max-width: 90%;
  margin: auto;
  display: block;
}

.form-control {
  margin: 1rem 0;
}

.form-control label,
.form-control input,
.form-control textarea {
  display: block;
  width: 100%;
  margin-bottom: 0.25rem;
}

.form-control input,
.form-control textarea {
  border: 1px solid #a1a1a1;
  font: inherit;
  border-radius: 2px;
}

.form-control input:focus,
.form-control textarea:focus {
  outline-color: #00695c;
}
</style>
