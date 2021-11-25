
<template>
  <h2>アバウト</h2>
  <p>大山奥人 （おおやまおくと） 。ネット上では、おおやまみちのく、yamanokuと名乗って活動しています。誕生日は1989年10月30日。秋田県能代市生まれ。性別は男性。現在千葉県流山市在住。一児（娘）の父と3匹の猫の飼い主。</p>
</template>

<script lang="ts">
// import { useAnnouncer } from '@vue-a11y/announcer'
import { defineComponent, onMounted, ref } from 'vue'
export default defineComponent({
  name: 'AboutPage',
  setup () {
    onMounted(() => {
      document.title = 'アバウト'
    })
    return {}
  }
})
</script>
