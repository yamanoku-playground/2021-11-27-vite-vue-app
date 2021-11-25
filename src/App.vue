<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'AppPage',
  // methods: {
  //   setError () {
  //     this.$announcer.set('エラー', 'assertive')
  //   }
  // }
})
</script>

<template>
  <header>
    <a href="/" class="logo">
      <svg width="246" height="242" viewBox="0 0 246 242" role="img" aria-labelledby="title">
        <title id="title">yamanoku ロゴ</title>
        <path d="M64,67v54l82,82-46,46v60h56L310,155V96H230l-21,20L160,67H64ZM176,203l-45,46h25L293,113H230l-39,39-31-31H94Z" transform="translate(-64 -67)" class="cls-1"></path>
      </svg>
    </a>
    <h1>ルーターテストページ</h1>
    <nav>
      <ul class="route">
        <li>
          <router-link to="/">
            ホーム
          </router-link>
        </li>
        <li>
          <router-link to="/about">
            アバウト
          </router-link>
        </li>
        <li>
          <router-link to="/contact">
            コンタクト
          </router-link>
        </li>
      </ul>
    </nav>
  </header>

  <main class="main">
    <router-view/>
  </main>
  <!-- <VueAnnouncer /> -->
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
nav > ul.route {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  margin: calc(var(--y-rhythm-base)/2*-1);
  padding: 0;
}
nav > ul.route > li {
  margin: calc(var(--y-rhythm-base)/2);
}
.logo {
  display: block;
  margin: var(--y-rhythm-2) 0;
  width: 48px;
  height: 48px;
}
.logo > svg {
  width: 100%;
  height: 100%;
  vertical-align: middle;
}
.cls-1 {
  fill: #36465d;
  fill-rule: evenodd;
}
</style>
