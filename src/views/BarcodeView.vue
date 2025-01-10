<script setup lang="ts">
import VBarcode from '../components/VBarcode.vue'
</script>

<template>
  <h1>Barcode</h1>
  <VBarcode value="This is Barcode View" />
  <RouterLink to="/" replace class="underline text-blue-300">
    Back Home
  </RouterLink>
</template>
