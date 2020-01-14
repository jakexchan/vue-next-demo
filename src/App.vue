<template>
  <div>
    <Title />
    <p>Count: {{ count }}</p>
    <button @click="increase">Increase</button>
    <button @click="decrease">Decrease</button>
  </div>
</template>

<script lang="ts">
import { ref, Ref } from 'vue'
import Title from './components/Title.vue'

interface AppSetup {
  count: Ref,
  increase: Function,
  decrease: Function
}

export default {
  components: {
    Title
  },

  setup (): AppSetup {
    const count: Ref = ref(0)

    const increase = (): void => {
      count.value++
    }

    const decrease = (): void => {
      count.value--
    }

    return {
      count,
      increase,
      decrease
    }
  }
}
</script>
