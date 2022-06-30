<!-- Please remove this file from your project -->
<template>
  <div>
    <a-select v-model="value">
      <a-select-option v-for="(item, index) in result" :key="index">{{ item.quote }}</a-select-option>
    </a-select>
  </div>
</template>

<script>
export default {
  name: 'NuxtTutorial',
  data(){
    return {
      result: [],
      value: null,
    }
  },
  async asyncData() {
    let result = await fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/fd9c289c2ee41a844cfbe99ba531aca3b483bf42/quotes.json');
    let text =  await result.text();
    return { result: JSON.parse(text) }
  },
}
</script>
