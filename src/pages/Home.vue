<template>
  <h2>ホーム</h2>
  <p>ここはホームです。いらっしゃいませ。</p>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
export default defineComponent({
  name: 'HomePage',
  setup() {
    onMounted(() => {
      document.title = 'ホーム'
    })
  }
})
</script>
