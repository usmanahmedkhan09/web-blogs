<template>
  <div class="container">
    <div class="card" v-for="(post, index) in posts" :key="index">
      <div class="card__title">
        <h2>{{ post.title }}</h2>
      </div>
      <div class="card__image">
        <img :src="post.imageUrl" alt="" />
      </div>
      <div class="card__content">
        <button type="submit" class="btn">show Details</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: mapState({
    posts: (state) => state.posts,
  }),
  methods: {
    ...mapActions(["fetchAll"]),
  },
  mounted() {
    this.fetchAll();
  },
};
</script>
<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;
  padding: 5rem;
}
.card {
  width: 20rem;
  max-width: 90%;
  margin: auto;
  display: block;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
.card__image {
  width: 100%;
}

.card__image img {
  width: 100%;
}
.card__title {
  text-align: center;
}
.card__content {
  text-align: center;
  margin-block: 2rem;
}
.btn {
  display: inline-block;
  padding: 0.25rem 1rem;
  text-decoration: none;
  font: inherit;
  border: 1px solid #00695c;
  color: #00695c;
  background: white;
  border-radius: 3px;
  cursor: pointer;
  height: 3rem;
  width: 13rem;
  font-weight: bold;
}
.btn:hover {
  background: #00695c;
  color: white;
}
</style>
