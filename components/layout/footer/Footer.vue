<script setup lang="ts">
</script>

<template>
  <footer class="c-footer">
    <div class="c-footer__container | l-container">
      <p>
        Made with 🤍 by Léo Joly
      </p>
      <p>
        © Copyright {{ new Date().getFullYear() }}
      </p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.c-footer {
  padding: 2rem 0;
  border-top: solid .1rem $white;

  &__container {
    @include mq($from: tablet) {
      @include flex($justify: space-between);
    }
  }
}
</style>
