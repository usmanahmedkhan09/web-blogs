/* eslint-disable no-unused-vars */
import { createStore } from 'vuex'
import { setDoc, doc, getFirestore, onSnapshot } from 'firebase/firestore'

export default createStore({
  state: {
    posts: [],
  },
  mutations: {
    setPosts(state, payload)
    {
      state.posts = [...payload]
    }
  },
  actions: {
    async addpost({ context }, payload)
    {
      let db = getFirestore()
      let updatedPosts = []
      if (this.state.posts.length)
      {
        updatedPosts = [...this.state.posts]
      }
      updatedPosts.push(payload)
      await setDoc(doc(db, "postsCollection", "posts"), {
        ...updatedPosts,
      }).then(() => { return });
    },
    async fetchAll(context)
    {
      let db = getFirestore()
      await onSnapshot(doc(db, "postsCollection", "posts"), (doc) =>
      {

        const arr = doc.data();
        if (arr)
        {
          context.commit('setPosts', Object.values(arr));
        }
      });
    }
  },
  modules: {
  }
})
