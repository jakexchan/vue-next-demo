<template>
  <h1>{{ title }}</h1>
</template>

<script lang="ts">
interface Setup {
  title: string
}

export default {
  setup () {
    const title = 'Vue Next'

    return {
      title
    }
  }
}
</script>