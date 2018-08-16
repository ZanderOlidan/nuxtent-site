<template>
  <section class="content-container">
    <h1 class="post-title"> {{ song.title }} </h1>
    <nuxtent-body :body="song.body" />
  </section>
</template>

<script>
export default {
  asyncData: async ({ app, route, payload }) => ({
    song: payload || await app.$content('/').get(route.path)
  })
}
</script>

<style>
.content-container
{
  width: 38rem;
  margin: 0 auto
}

.post-title
{
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 500;
  color: #35495e;
}
</style>
