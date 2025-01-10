<script setup lang="ts">
import VBarcode from '../components/VBarcode.vue'
</script>

<template>
  <h1>Barcode V2</h1>
  <VBarcode value="This is Barcode View V2" />
  <RouterLink to="/" replace class="underline text-blue-300">
    Back Home
  </RouterLink>
</template>
