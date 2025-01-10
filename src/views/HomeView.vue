<script setup lang="ts">
import VBarcode from '../components/VBarcode.vue'
</script>

<template>
  <h1>Home V2</h1>
  <VBarcode value="This is Home View V2" />
  <RouterLink to="/barcode" class="underline text-blue-300">
    To Barcode page
  </RouterLink>
</template>
