<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <div class="box" :class="{ 'box-finish': !(count < 10) }"><span v-if="count < 10" class="box-text">plz {{ 10 - count }} counts</span></div>
</template>

<style lang="scss" scoped>
a {
  color: #42b983;
}

.box {
  width: 200px;
  height: 200px;
  background-color: pink;
  margin: 80px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color ease-out 1s;

  &-finish {
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    animation: spin 1s infinite linear;
    background-color: #42b983;
  }

  &-text {
    font-weight: bold;
  }
}
</style>
