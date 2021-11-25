<template>
  <h2>コンタクト</h2>
  <form action="/">
    <fieldset>
      <legend>入力欄</legend>
      <div>
        <label>お名前<br><input name="test1" type="text" /></label>
      </div>
      <div>
        <label>詳細欄<br><textarea name="test2" /></label>
      </div>
      <div>
        <button type="submit">送信</button>
      </div>
    </fieldset>
  </form>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
export default defineComponent({
  name: 'ContactPage',
  setup () {
    onMounted(() => {
      document.title = 'コンタクト'
    })
    return {}
  }
})
</script>
