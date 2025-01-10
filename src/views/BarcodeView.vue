<script setup lang="ts">
import VBarcode from '../components/VBarcode.vue'

const barcodeValue = sessionStorage.getItem('barcode-value')
</script>

<template>
  <h1>Barcode V3</h1>
  <VBarcode :value="barcodeValue!" />
  <RouterLink to="/" replace class="underline text-blue-300">
    Back Home
  </RouterLink>
</template>
