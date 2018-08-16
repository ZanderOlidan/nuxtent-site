<template>
  <section class="home-container">
    <div>
      <h2 class="home-slogan">
        Seamlessly use content files in your Nuxt.js sites.
      </h2>
      <div class="home-links">
        <!-- <nuxt-link 
          to="/hello-world" 
          class="button--green">See Your First Post</nuxt-link> -->
        <a 
          href="https://github.com/nuxt-community/content-module" 
          target="_blank" 
          class="button--grey">Learn More on Github</a>
      </div>
      <ul>
        <li 
          v-for="(song, index) in songs" 
          :key="index">
          <a :href="song.permalink">Title: {{ song.title }}</a><br>
          Singer: {{ song.singer }} <br>
          Author: {{ song.author }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  asyncData: async ({ app, route, payload }) => ({
    songs: payload || await app.$content('/').getAll()
  })
}
</script>
<style>
.home-container
{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.home-slogan
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.home-links
{
  padding-top: 15px;
}
</style>
