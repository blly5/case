<template>
  <div>
    <TreeItem :data="data" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import TreeItem from './components/treeItem.vue';

const tree = [
  {
    label: '西瓜',
    value: 1,
    check: true,
  },
  {
    label: '苹果',
    value: 2,
    check: false,
    child: [
      {
        label: '红苹果',
        value: 3,
        check: false
      }
    ]
  }
];

export default defineComponent({
  components: { TreeItem },
  setup() {
    let data = ref(tree);
    return { data }
  }
})

</script>