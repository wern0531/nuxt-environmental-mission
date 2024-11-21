<script setup>
import AppHeader from "@/components/global/AppHeader.vue";
import AppFooter from "@/components/global/AppFooter.vue";
</script>

<template>
  <AppHeader />
  <slot />
  <AppFooter />
</template>

<style lang="scss" scoped></style>
